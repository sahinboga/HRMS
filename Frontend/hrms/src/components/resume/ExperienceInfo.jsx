import React from 'react'
import { Icon } from 'semantic-ui-react'
import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'

export default function ExperienceInfo() {
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    İş Deneyimi
                    <span className="px-2">
                        <button className="btn-added">
                            <Icon name="add"/> Yeni deneyim ekle
                        </button>
                    </span>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">
                                <img src="https://aday-asset.mncdn.com/img/firma-logosuz.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 info-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <InfoMessage header="İş pozisyonu" text="Web Developer" />
                                </div>
                                <div className="col-md-4">
                                    <InfoMessage header="Firma Adı" text="Web Developer" />
                                </div>
                                <div className="col-md-4">
                                    <InfoMessage header="Firma Sektörü" text="Web Developer" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <InfoMessage header="Şehir" text="Web Developer" />
                                </div>
                                <div className="col-md-4">
                                    <InfoMessage header="Başlangıç Tarihi" text="Web Developer" />
                                </div>
                                <div className="col-md-4">
                                    <InfoMessage header="Bitiş Tarihi" text="Web Developer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MessageBox>
        </div>
    )
}
