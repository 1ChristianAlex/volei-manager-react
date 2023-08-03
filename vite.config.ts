import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';

export default defineConfig({
  plugins: [million.vite(), react()],
});
