import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // add thêm dòng này mới đọc đc file 3D .glb
  assetsInclude: ['**/*.glb'],
  build: {
    sourcemap: true, // Bật tạo source maps cho production
    minify: 'terser',
  },
});
