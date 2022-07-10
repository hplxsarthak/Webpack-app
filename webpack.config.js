const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/Entry.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "output.js"
    }

}