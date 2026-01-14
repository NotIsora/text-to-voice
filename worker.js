// worker.js
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0';

// 1. Tắt load model từ local (GitHub Pages không có file model cục bộ)
env.allowLocalModels = false;

// 2. Sử dụng cache của trình duyệt để lần sau load nhanh hơn
env.useBrowserCache = true;

// 3. [FIX QUAN TRỌNG] Tắt Multi-threading để chạy được trên GitHub Pages
// Vì GitHub Pages không có headers COOP/COEP, ta phải ép chạy đơn luồng (số luồng = 1)
env.backends.onnx.wasm.numThreads = 1;;

class ObjectDetectionPipeline {
    static task = 'object-detection';
    static model = 'Xenova/detr-resnet-50';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = await pipeline(this.task, this.model, { quantized: true, progress_callback });
        }
        return this.instance;
    }
}

self.addEventListener('message', async (event) => {
    // Nhận ImageBitmap trực tiếp từ main thread (hiệu năng cao hơn blob/url)
    const { image, status } = event.data;

    if (status === 'predict') {
        try {
            const detector = await ObjectDetectionPipeline.getInstance((data) => {
                self.postMessage({ status: 'loading', data });
            });

            // Inference
            const output = await detector(image, { threshold: 0.8, percentage: true });

            // ImageBitmap cần được đóng thủ công để giải phóng RAM sau khi dùng xong
            if (image && typeof image.close === 'function') image.close();

            self.postMessage({ status: 'complete', output });
        } catch (e) {
            self.postMessage({ status: 'error', data: e.toString() });
        }
    }

});
