import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { cpSync } from 'node:fs';
export default defineConfig({
  base:'./',
  plugins:[{name:'copy-catalog-images',closeBundle(){cpSync('assets/products','dist/assets/products',{recursive:true});}}],
  build:{rollupOptions:{input:{main:resolve('index.html'),one:resolve('1/index.html'),two:resolve('2/index.html'),three:resolve('3/index.html'),four:resolve('4/index.html'),five:resolve('5/index.html'),six:resolve('6/index.html'),seven:resolve('7/index.html'),eight:resolve('8/index.html'),nine:resolve('9/index.html'),ten:resolve('10/index.html')}}}
});
