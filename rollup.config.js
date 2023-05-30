import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'SQLColumnBuilder',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    babel({
      presets: ['@babel/preset-react'],
    }),
  ],
  external: ['react'],
};