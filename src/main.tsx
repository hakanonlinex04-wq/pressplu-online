import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Global error handler to capture boot-up crashes
window.onerror = function (msg, url, line, col, error) {
  console.log("APP_CRASH_REPORT:", { msg, url, line, col, error });
  const root = document.getElementById('root');
  if (root && root.innerHTML === "") {
    root.innerHTML = `<div style="padding: 20px; color: white; background: #900; font-family: sans-serif;">
      <h2>Uygulama Başlatılamadı (Loading Error)</h2>
      <p>Lütfen sayfayı yenileyin. Sorun devam ederse teknik bir hata oluşmuş demektir.</p>
      <pre style="font-size: 10px;">${msg}</pre>
    </div>`;
  }
};

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log("ExpressPlus TV app initialized successfully.");
  } catch (error) {
    console.error("Critical failure during React initialization:", error);
  }
}
