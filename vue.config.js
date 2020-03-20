
const path = require('path')
const axios = require('axios')

function resolve(name) {
    return path.join(__dirname,name)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@common',resolve('src/common'))
            .end()
    },
    devServer: {
        before(app){
            app.get('/getSinger',(req,res)=>{
                const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
                axios.get(url,{
                    params: req.query,
                    // headers: {
                    //    // host:'u.y.qq.com',
                    //     origin: 'https://y.qq.com',
                    //     referer: 'https://y.qq.com/portal/singer_list.html'
                    // }
                })
                    .then(request => {
                       res.json(request.data.singerlist)
                    })
                    .catch(err => {
                        console.log('请求数据失败:'+err)
                    })
            })
        }
    }
}
