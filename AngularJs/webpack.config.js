var webpack = require('webpack');
var CompressionWebpackPlugin = require('compression-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var CompressionWebpackPlugin = new CompressionWebpackPlugin({ //gzip 压缩
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: new RegExp(
        '\\.(js|css)$'    //压缩 js 与 css
    ),
    threshold: 10240,
    minRatio: 0.8
})
module.exports = {
    //插件项
    plugins: [commonsPlugin, CompressionWebpackPlugin ],
    //页面入口文件配置
    entry: {
        index : './app/app.js'
    },
    //入口文件输出配置
    output: {
        path: './app/build',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/CXBIG/AnglarJs/app', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};