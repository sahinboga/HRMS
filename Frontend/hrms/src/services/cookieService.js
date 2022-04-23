import Cookie from 'js-cookie'
class CookieService {
    static get(key) {
        const data = Cookie.get(key)
        try {
            if(!data)
                throw ""
            return JSON.parse(data)
        } catch {
            return null
        }
    }

    static set(key, data) {
        const json = JSON.stringify(data)
        Cookie.set(key, json)
    }

    static delete(key) {
        Cookie.remove(key)
    }
}

export default CookieService