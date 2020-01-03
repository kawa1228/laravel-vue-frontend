// vue.config.js
module.exports = {
    // options...
    devServer: {
        public: 'localhost',
        port: 8888,
        disableHostCheck: true,
        proxy: {
            'api/': {
                target: 'http://127.0.0.1:10080'
            }
        }
    }
}
