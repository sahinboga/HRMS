import { Formik } from 'formik'
import React, {useSelector} from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import authService from '../../services/authService'

export default function JobSeekerRegisterPage() {
    const initialValues = {
        firstName: "",
        lastName: "",
        user: {
            email: "",
            password: ""
        }
    }

    const history = useHistory()

    const handleRegister = (values) => {
        console.log(values)
        authService.registerJobSekeer(values).then(result => {
            if (result.data.success) {
                toast.success(result.data.message)
                history.push("/auth/login")
            } else {
                toast.error(result.data.message)
            }
        })
    }
    return (
        <div>
            <div className="limiter">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login100-form validate-form">
                            <span className="login100-form-logo">
                                <i className="zmdi zmdi-landscape"></i>
                            </span>

                            <span className="login100-form-title p-b-34 p-t-27">
                                Kayıt Ol
                            </span>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={handleRegister}
                            >
                                {props => (
                                    <form className="form-group login-form">
                                        <div className="form-floating mb-3">
                                            <input type="text" name='firstName' onChange={props.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput"><i className="bi bi-person"></i> İsim</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" name='lastName' onChange={props.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput"><i className="bi bi-person"></i> Soyisim</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" name='user.email' onChange={props.handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput"><i className="bi bi-envelope"></i> E-mail adresi</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" name='user.password' onChange={props.handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword"><i className="bi bi-lock"></i> Şifre</label>
                                        </div>

                                        <div className="d-flex justify-content-between mt-4 align-items-center">
                                            <div className="form-check text-white">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Hizmet sözleşmesini onaylıyorum
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-center ">

                                            <div className="login-actions">
                                                <button type='button' onClick={props.handleSubmit} className="login-btn">Kayıt Ol</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            <div className="login-footer text-white text-center mt-3">
                                <a className="text-white" href="/auth/login">
                                    Hesabınız var mı? Giriş yapın.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
