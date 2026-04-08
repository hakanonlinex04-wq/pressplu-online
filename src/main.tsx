import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Root element not found! Make sure index.html has <div id='root'></div>");
} else {
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
