import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/styles/auth.css'

export default function LoginPage() {
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
                            <form className="form-group login-form">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput"><i class="bi bi-person"></i>Email address</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword"><i class="bi bi-lock"></i>Password</label>
                                </div>

                                <div className="d-flex justify-content-between mt-4 align-items-center">
                                    <div class="form-check text-white">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Beni Hatırla
                                        </label>
                                    </div>
                                    <button className="btn-link text-light">Şifremi Unuttum?</button>
                                </div>
                                <div className="text-center ">

                                    <div className="login-actions">
                                        <button className="login-btn">Giriş Yap</button>
                                    </div>
                                </div>
                            </form>
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
