
const path = require('path')

function resolve(name) {
    return path.join(__dirname,name)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@common',resolve('src/common'))
            .end()
    }
}
