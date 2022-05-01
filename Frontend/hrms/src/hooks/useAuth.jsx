import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import authService from '../services/authService'
import CookieService from '../services/cookieService'
import { setLoginData } from '../store/actions/authActions'
import { CookieTypes } from '../utils/CookieTypes'

const useAuth = () => {
    const dispatch = useDispatch()

    const handleLogout = (callback=null) => {
        CookieService.delete(CookieTypes.AUTH)
        window.location.pathname="/"
        callback && callback()
    }

    const handleLogin = (values, callback=null) => {
        authService.login(values).then(res => {
            if(res.data.success) {
                CookieService.set(CookieTypes.AUTH, {...res.data.data.userData})
                dispatch(setLoginData(res.data.data))
                Swal.fire({
                    title: "Başarılı",
                    icon: "success",
                    text: res.data.message
                }).then(res => {
                    callback && callback()
                })
            } else {
                Swal.fire({
                    title: "Başarısız",
                    icon: "error",
                    text: res.data.message
                })
            }
        })
    }

    return {handleLogout, handleLogin}
}

export default useAuth