require('ignore-styles');

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[name].[ext]',
});

require('./server');

// import 'ignore-styles';

// import babelRegister from '@babel/register';

// import assetRequireHook from 'asset-require-hook';

// import './server';

// babelRegister({
//   presets: [
//     '@babel/preset-env',
//     [
//       '@babel/preset-react',
//       {
//         runtime: 'automatic',
//       },
//     ],
//   ],
// });
// assetRequireHook({
//   extensions: ['jpg', 'png', 'gif'],
//   name: '/assets/[name].[ext]',
// });
