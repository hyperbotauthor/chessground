import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/chessground.js',
      format: 'umd',
      name: 'Chessground',
    },
    {
      file: 'dist/chessground.min.js',
      format: 'umd',
      name: 'Chessground',
      plugins: [
        terser(),
      ],
    },
  ],
  plugins: [
    typescript(),
  ],
};
