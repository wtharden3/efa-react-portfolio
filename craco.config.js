/* craco.config.js */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': 'rgba(114, 9, 183, 1)',
              '@magenta-7': 'rgba(247, 37, 133, 1)' //247, 37, 133
               }, //114, 9, 183
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
