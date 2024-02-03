import { BuildingStoreIcon, FacebookIcon, InstagramIcon, TwitterIcon, WhatsappIcon } from '@/icons/Icons'

import './styles.css'

export default function Footer() {
  return (
    <footer id='contact'>
      <div className='social__media-container'>
        <div className='container p-inline'>
          <div className='social__media w-full'>
            <div>
              <span><WhatsappIcon /> +595 (987)402-7673</span>
              <span><BuildingStoreIcon /> (771) 477-8720</span>
            </div>
            <div>
              <span><FacebookIcon /></span>
              <span><TwitterIcon /></span>
              <span><InstagramIcon /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__info-container">
        <div className="footer__info container p-inline">
          <div>
            <h4>KFC</h4>
            <p>Página no oficial, hecho con fines didácticos <time dateTime='2024-02-04'>04 de Febrero del 2024</time></p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Términos y condiciones</li>
              <li>Trabajé con nosotros</li>
              <li>Ayuda</li>
            </ul>
          </div>
          <div>
            <h4>Site Map</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};