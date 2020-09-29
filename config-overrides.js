/* eslint-disable import/no-extraneous-dependencies */
const {
  override,
  fixBabelImports,
  addLessLoader,
  useBabelRc,
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#4c3e8e',
    },
  }),
  useBabelRc(),
);
