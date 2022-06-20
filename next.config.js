// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // experimental: {
  //   forceSwcTransforms: true,
  // },
  // swcMinify: true,
  // modifyVars: { '@primary-color': '#686de0' }, 
  lessVarsFilePath: './src/styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {
    mode: "local",
    localIdentName: process.env.NODE_ENV ? "[local]--[hash:base64:4]" : "[hash:base64:8]",
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "class_name";
    },
  },

  nextjs: {
    localIdentNameFollowDev: true
  },

  webpack(config) {
    config.module.rules.push(
      //   {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'postcss-loader',
      //       options: {
      //         postcssOptions: { plugins: ['postcss-import', 'postcss-url', '@tailwindcss/jit'] },
      //       },
      //     },
      //   ]
      // }, 
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     'cache-loader',
      //     {
      //       loader: 'esbuild-loader',
      //       options: { loader: 'tsx' },
      //     },
      //   ]
      // } 
      )
    return config;
  }
});