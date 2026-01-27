# AI Text-to-Speech Tiếng Việt (Browser-based)

Dự án ứng dụng web đơn giản giúp chuyển đổi văn bản sang giọng nói (Text-to-Speech) Tiếng Việt, chạy hoàn toàn trên trình duyệt sử dụng công nghệ AI (Deep Learning).

> **Tác giả:** Nguyễn Lê Thái Dương & Đoàn Thiên An (12CTin)

![Badge](https://img.shields.io/badge/Status-Active-success)
![Badge](https://img.shields.io/badge/Language-Vietnamese-red)
![Badge](https://img.shields.io/badge/Tech-Transformers.js-yellow)

## ✨ Tính năng nổi bật

* **Chạy cục bộ trên trình duyệt:** Không cần Backend server, không gửi dữ liệu đi đâu (Privacy focused).
* **Mô hình AI:** Sử dụng model `Xenova/mms-tts-vie` từ Hugging Face, hỗ trợ phát âm Tiếng Việt tự nhiên.
* **Tối ưu hiệu năng:** Sử dụng bản Quantized (nén lượng tử) giúp tải nhanh và nhẹ (khoảng 20-30MB).
* **Giao diện:** Dark mode hiện đại, có thanh tiến trình tải model.
* **Định dạng:** Tự động tạo và phát file `.wav`.

## 🚀 Hướng dẫn cài đặt & Chạy

Do dự án sử dụng **ES Modules** (`import ... from ...`), bạn **không thể** chạy bằng cách click đúp vào file HTML (lỗi `file://` protocol CORS policy). Bạn cần dựng một server local đơn giản.

### Cách 1: Dùng VS Code (Khuyên dùng)
1. Cài đặt Extension **Live Server** trong VS Code.
2. Mở file `index.html`.
3. Nhấn chuột phải chọn **"Open with Live Server"**.

### Cách 2: Dùng Python
Nếu đã cài Python, mở terminal tại thư mục chứa file và chạy:
```bash
python -m http.server 8000
