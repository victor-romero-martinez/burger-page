import Image from "next/image";

import './styles.css'

export default function Header() {
  return (
    <header>
      <div className="container p-inline header">

        <div className="w-full p-block header__container">
          <Image src={'/logo-kfc.svg'} alt="logo kfc" width={80} height={80} />
          <span className="header-links">
            <a href={'#home'}>Home</a>
            <a href={'#menu'}>Menú</a>
            <a href={'#contact'}>Contacto</a>
          </span>
        </div>

      </div>
    </header>
  )
};