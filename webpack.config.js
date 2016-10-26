module.exports = {
    entry: "./src/widget.js",
    output: {
        path: __dirname,
        filename: "dist/iot-niceicon-widget.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};
