import React from 'react'

export default function MainPage() {
  return (
    <div>
      <div className='what_can_you_do'>
        <div className="container">
          <div className="row">
            <div className="grid_title">
              <h1>Neler Yapabilirsin?</h1>
              <p>Kariyer yolcuğun için önemli bir adım atmak ister misin? Güncel iş / staj ilanları, etkinlikler ve kariyer danışmanlığı hizmeti gibi çok sayıda fırsatlar içeren Kariyerim.net ile kariyer yolculuğu artık daha keyifli!</p>
            </div>
          </div>
          <di className="row">
            <div className='col-md-4 '>
              <div className="card">
                <div className="mainpage-card card-body">
                  <div className="mainpage-card-img">
                    <img src="https://www.ipsourceus.com/assets/img/about-two.png" alt="" />
                  </div>
                  <h3 className="mainpage-card-title">İş/Staj İlanları</h3>
                  <p className="mainpage-card-content">
                    Kamu ve özel sektörden binlerce işverenin yıl boyunca yayımladıkları ve bazıları sadece senin üniversitene özel açılan ilanları takip edip, ilgilendiklerine başvurabilirsin.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 '>
              <div className="card">
                <div className="mainpage-card card-body">
                  <div className="mainpage-card-img">
                    <img src="https://unitedwork.com.tr/wp-content/uploads/2021/04/Evaluation-of-Job-Creation-Activities.png" alt="" />
                  </div>
                  <h3 className="mainpage-card-title">Etkinlikler</h3>
                  <p className="mainpage-card-content">
                    İşverenler, Üniversite Kariyer Merkezleri, fakülteler ve öğrenci kulüpleri tarafından düzenlenen atölye/örnek olay çalışmaları, seminerler, yarışmalar, teknoloji kampları gibi kariyer gelişimine katkı sağlayacak farklı alanlardaki etkinlikleri inceleyebilir ve sana uygun olanlara başvuru yapabilirsin.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 '>
              <div className="card">
                <div className="mainpage-card card-body">
                  <div className="mainpage-card-img">
                    <img src="https://www.hexafair.com/wp-content/uploads/2019/07/Virtual_Carrer_-fair.png" alt="" />
                  </div>
                  <h3 className="mainpage-card-title">Kariyer Fuarları</h3>
                  <p className="mainpage-card-content">
                    Yüzlerce işverenin yer aldığı ve çok sayıda kariyer fırsatının sunulduğu fuarlara kaydolarak katılım gösterebilir ve fırsatları yakalayabilirsin.
                  </p>
                </div>
              </div>
            </div>
          </di>
        </div>
      </div>
    </div>
  )
}
