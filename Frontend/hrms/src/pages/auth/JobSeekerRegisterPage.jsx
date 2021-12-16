import React from 'react'

export default function JobSeekerRegisterPage() {
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
                            <form className="form-group login-form">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput"><i class="bi bi-person"></i>İsim</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput"><i class="bi bi-person"></i>Soyisim</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput"><i class="bi bi-person"></i>E-posta adresi</label>
                                </div>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label for="floatingPassword"><i class="bi bi-lock"></i>Şifre</label>
                                </div>

                                <div className="d-flex justify-content-between mt-4 align-items-center">
                                    <div class="form-check text-white">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Hizmet sözleşmesini onaylıyorum
                                        </label>
                                    </div>
                                </div>
                                <div className="text-center ">

                                    <div className="login-actions">
                                        <button className="login-btn">Kayıt Ol</button>
                                    </div>
                                </div>
                            </form>
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
