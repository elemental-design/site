const path = require('path');

exports.onCreateWebpackConfig = ({
  stage, getConfig, rules, loaders, actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ...getConfig().resolve.alias,
        react: path.resolve(__dirname, './node_modules/react/'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom/'),
        // 'elemental-react': path.resolve('../../elemental-react'),
      },
      extensions: getConfig().resolve.extensions.concat('.web.js')
    }
  });
}
