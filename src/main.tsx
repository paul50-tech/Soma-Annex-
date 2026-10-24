import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register service worker with auto-update for offline capability
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('[PWA] New content available; refreshing.');
  },
  onOfflineReady() {
    console.log('[PWA] Soma Annex Planters catalog ready for offline use.');
  },
});

createRoot(document.getElementById('root')!).render(<App />);

