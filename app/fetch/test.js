import 'whatwg-fetch'
import 'es6-promise'



export function getData() {
    // '/api/1' 获取字符串
    var result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })

    // '/api/2' 获取json
    var result1 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result1.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}
