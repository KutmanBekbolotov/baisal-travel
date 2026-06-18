import logoHeader from '../../assets/photo_2026-06-17_11-38-26.png'
export function Footer() {
  return (
    <footer className="site-footer">
      <div className='footer-info'>
        <img className='logo-header' src={logoHeader} alt="BasialTravel" />
        <p>Туры, авиабилеты, визы, страховка, отели и трансферы под ключ.</p>
        <p>Наш адрес: ул. Аалы Токомбаева 21/2, отель Jannat Regency 5*</p>
        
      </div>
      <div className="footer-links">
        <a href="mailto:baisaltravel@gmail.com">baisaltravel@gmail.com</a>
        <a href="tel:+996558910558">+996558910558 </a>
        <a href="tel:+996997282823">+996997282823 </a>
        <a href="tel:+996508282328 ">+996508282328 </a>
        <p><br></br>dev version 1.0.0</p>
      </div>
    </footer>
  )
}
