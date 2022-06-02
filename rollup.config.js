import commonjs from '@rollup/plugin-commonjs';
// import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

import packageJson from './package.json';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    /*
    babel({
      exclude: ['node_modules/**'],
    }),
    */
    typescript(),
    postcss({
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
            gap: true
          },
          stage: 3,
          features: {
            'custom-properties': false
          },
        }),
      ],
    }),
  ],
};

export default config;
