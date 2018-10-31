import { get } from '../get'
import 'whatwg-fetch'
import 'es6-promise'

// RETURN VALUE is PROMISE TYPE
export function getAdData() {
    const result = get('http://localhost:3000/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('http://localhost:3000/api/homelist/'
                      + encodeURIComponent(city) + '/' + page)
    return result
}
