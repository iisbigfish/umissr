import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  history: 'hash',
  hash: true,
  // manifest: {},
  targets: {
    ie: 10,
  },
  manifest: {},
  exportStatic: false,
  lessLoaderOptions: {
    javascriptEnabled: true,
    modules: false,
  },
  disableCSSModules: true,
  disableCSSSourceMap: true,
  ssr: true,
  extraBabelPlugins: [
    [require.resolve('babel-plugin-import'), { libraryName: "antd", libraryDirectory: 'es', style: "css" }],
  ],
  plugins: [
    ['@umijs/plugin-prerender'],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: { webpackChunkName: true },
      title: '1zplay',
      // dll: true,
      locale: {
        enable: true,
        default: 'zh-CN',
        // default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
