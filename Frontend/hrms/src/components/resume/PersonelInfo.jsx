import React from 'react'
import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'

export default function PersonelInfo() {
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    Kişisel Bilgiler
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-photo">

                            </div>
                        </div>
                        <div className="col-md-8 info-content">
                            <h2 className="ps-2">Şahin Boğa</h2>
                            <div className="row ">
                                <div className="col-md-6">
                                    <InfoMessage header="E-posta adresi" text="sahin@sah.com" />
                                </div>
                                <div className="col-md-6">
                                    <InfoMessage header="Doğum Tarihi" text="01/01/2000" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <InfoMessage header="E-posta adresi" text="sahin@sah.com" />
                                </div>
                                <div className="col-md-6">
                                    <InfoMessage header="Doğum Tarihi" text="01/01/2000" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <InfoMessage header="E-posta adresi" text="sahin@sah.com" />
                                </div>
                                <div className="col-md-6">
                                    <InfoMessage header="Doğum Tarihi" text="01/01/2000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MessageBox>
        </div>
    )
}


