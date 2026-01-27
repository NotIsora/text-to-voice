# Vietnamese AI Text-to-Speech (Browser-based)

A lightweight web application that converts Vietnamese text into speech using Deep Learning. This project runs entirely in the browser using **Transformers.js**, meaning no backend server is required to process the audio.

> **Authors:** Nguyễn Lê Thái Dương & Đoàn Thiên An (Class 12CTin)

![Badge](https://img.shields.io/badge/Status-Active-success)
![Badge](https://img.shields.io/badge/Language-Vietnamese-red)
![Badge](https://img.shields.io/badge/Tech-Transformers.js-yellow)

## ✨ Key Features

* **100% Client-Side:** Runs locally in your browser. No data is sent to any server (Privacy-focused).
* **AI Model:** Powered by the `Xenova/mms-tts-vie` model (Massively Multilingual Speech) from Hugging Face.
* **Optimized Performance:** Uses a quantized version of the model (~20-30MB) for faster loading and low memory usage.
* **Modern UI:** Dark mode interface with a real-time model loading progress bar.
* **Audio Generation:** Automatically converts raw audio data into a playable `.wav` file.

## 🚀 Installation & Usage

Since this project uses **ES Modules** (`import ... from ...`), you **cannot** simply double-click the `index.html` file to run it (due to CORS policy restrictions on the `file://` protocol). You must use a local server.

### Option 1: VS Code (Recommended)
1.  Install the **Live Server** extension in Visual Studio Code.
2.  Open `index.html`.
3.  Right-click anywhere in the code and select **"Open with Live Server"**.

### Option 2: Python
If you have Python installed, open your terminal in the project folder and run:
```bash
python -m http.server 8000
