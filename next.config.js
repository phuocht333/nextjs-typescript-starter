// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({ 
  lessVarsFilePath: './src/styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {
    mode: "local",
    localIdentName: process.env.NODE_ENV ? "[local]--[hash:base64:4]" : "[hash:base64:8]",
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "_class_name_";
    },
  },

  nextjs: {
    localIdentNameFollowDev: true
  },

  webpack(config) {
    return config;
  }
});