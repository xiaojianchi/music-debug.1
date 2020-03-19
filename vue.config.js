/*
    webpack-chain 如何使用 ？

    使用
        vue inspect > output.js
        查看 配置文件
 */
const axios = require('axios')

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    // chainWebpack 来配置
    chainWebpack: config => {
        config.resolve.alias
            .set("common", resolve("src/common"))
            .set("components", resolve("src/components"))
            .set("assets", resolve("src/assets"))
            .set("img",resolve("src/base/slider-img"))
            .end()

    },

    //配置 devServer
    devServer: {
        before(app) {
            app.get('/getBanner', function (req, res) {
                const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

                axios.get(url, {
                    headers:{
                      host: 'u.y.qq.com',
                      referer: 'https://y.qq.com/'
                    },
                    params: req.query
                }).then((response) => {

                    const arry = response.data.focus.data.content;

                    const sliderItems = arry.map(item => {
                        const jump = item.jump_info.url;
                        return {
                            id: item.id,
                            picUrl: item.pic_info.url,
                            linkUrl: jump.startsWith('7') ? 'https://y.qq.com/n/yqq/playlist/' + jump + '.html' : 'https://y.qq.com/n/yqq/album/' + jump + '.html'
                        }

                    });

                    res.json(sliderItems)
                }).catch((e) => {
                    console.log(e)
                })
            })

        }
    }
}

// module.exports = {
// configureWebpack对象来配置
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 "common": resolve("src/common"),
//                 "components": resolve("src/components")
//             },
//             extensions: [
//                 '.mjs',
//                 '.js',
//                 '.jsx',
//                 '.vue',
//                 '.json',
//                 '.wasm',
//                 '.scss',
//                 '.sass'
//             ]
//         }
//     }
// }
