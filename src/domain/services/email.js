import emailjs from '@emailjs/browser'

import {
    REACT_APP_EMAIL_JS_PUBLIC_KEY,
    REACT_APP_EMAIL_JS_TEMPLATE_ID,
    REACT_APP_EMAIL_JS_SERVICE_ID,
} from '../../config/globals'

console.log(REACT_APP_EMAIL_JS_TEMPLATE_ID)
export const emailService = async (body) => {
    try {
        const response = await emailjs.send(
            REACT_APP_EMAIL_JS_SERVICE_ID,
            REACT_APP_EMAIL_JS_TEMPLATE_ID,
            body.data,
            REACT_APP_EMAIL_JS_PUBLIC_KEY
        )
        return response
    } catch (error) {
        return error
    }
}
