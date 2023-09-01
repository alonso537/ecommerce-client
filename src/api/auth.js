import {ENV} from '@/utils/constanst'

export class Auth {
    async register(formData) {
        try {
            const url = `${ENV.API_URL}${ENV.ENDPOINTS.AUTH.REGISTER}`
            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status >= 200 && response.status < 300) {
                return result
            }


            // return result
        } catch (error) {
            throw error
        }
    }
}