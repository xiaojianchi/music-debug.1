import originJSONP from 'jsonp'

export default function jsonp(url,data,options) {
  url += (url.indexOf('?') < 0 ? '?':'&') + params(data);

  // 将原生的 jsonp 封装成 Promise 对象.
  return new Promise((resolve, reject) => {
      originJSONP(url,options,(err,data) =>{
          if(!err)
              resolve(data);
          else
              reject(err);
      })
  })

}

// 拼接 url 参数
function params(data) {
    let url = '';
    for(let i in data){
        let val = data[i] != undefined ? data[i] : '';
        url += `&${i}=${encodeURIComponent(val)}`
    }

    return url ? url.substring(1) : '';
}

