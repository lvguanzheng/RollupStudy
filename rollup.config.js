import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import server from 'rollup-plugin-server'
import livereload from 'rollup-plugin-livereload'
import html from '@rollup/plugin-html'
import typeScript from 'rollup-plugin-typescript'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    compact: true,
    sourcemap: true,
    globals: {
      lodash: '_'
    }
  },
  plugins: [
    typeScript(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({
      exclude: /node_modules/
    }),
    json(),
    html({
      fileName: 'index.html',
      publicPath: '',
      title: 'Rollup Test'
    }),
    postcss(),
    server({
      open: true,
      port: 3080,
      host: 'localhost',
      contentBase: './dist'
    }),
    livereload()
  ],
  external: [/node_modules\/(?=(lodash)\/).*/]
}
