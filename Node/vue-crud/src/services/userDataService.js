import http from '../http-common'

class userDataService {
    login(data) {
        return http.post('/user/login', data)
    }
}

export default new userDataService