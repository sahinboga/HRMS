import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import '../../assets/styles/auth.css'
import useAuth from '../../hooks/useAuth'

export default function LoginPage() {

    const initialValues = {
        email: "",
        password: "",
    }

    
    const schema = Yup.object().shape({
        email: Yup.string().required("Eposta zorunlu").email("Eposta adresi hatalı"),
        password: Yup.string().required("Şifre zorunlu"),
    });
    
    const {handleLogin} = useAuth()

    const handleLoginSubmit = (values)=> {
        handleLogin(values, () => {
            window.location.pathname = ""
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
                                Giris Yap
                            </span>
                            <Formik 
                                initialValues={initialValues}
                                //validationSchema={schema}
                                onSubmit={handleLoginSubmit}
                            >
                                {props => (
                                <form className="form-group login-form">
                                    <div className="form-floating mb-3">
                                        <input name='email' onChange={props.handleChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput"><i className="bi bi-envelope"></i> E-mail adresi</label>
                                    </div>
                                    <div className="form-floating">
                                        <input name='password' onChange={props.handleChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword"><i className="bi bi-lock"></i> Şifre</label>
                                    </div>

                                    <div className="d-flex justify-content-between mt-4 align-items-center">
                                        <div className="form-check text-white">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Beni Hatırla
                                            </label>
                                        </div>
                                        <button className="btn-link text-light">Şifremi Unuttum?</button>
                                    </div>
                                    <div className="text-center ">

                                        <div className="login-actions">
                                            <button type='button' onClick={props.handleSubmit} className="login-btn">Giriş Yap</button>
                                        </div>
                                    </div>
                                </form>
                                )}
                            </Formik>
                            <div className="login-footer text-white text-center mt-3">
                                <a className="text-white" href="/auth/jobseeker-register">
                                    Hesabınız yok mu? Hemen Kayıt olun.</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}