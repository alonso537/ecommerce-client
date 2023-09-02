import {ENV} from '@/utils/constanst'

export class Token {
    setToken(token) {
        localStorage.setItem(ENV.TOKEN, token)
    }
}