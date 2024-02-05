import Image from "next/image";
import Link from "next/link";

import './styles.css'

/**
 * Componentes con enlace para hacer pedidos
 * @param src - QR image
 * @param href - link string
 */
export default function QrSection({ src, href }: { src: string, href: string }) {
  return (
    <div className="qr__section">
      <Image src={src} alt={`qr link ${src}`} width={100} height={100} />
      <p>
        <span>Escanee el código QR</span>
        <span>
          o
        </span>
        <span>
          haga &nbsp;
          <Link href={href} target="_blank" rel="noopener noreferrer">click aquí</Link>
        </span>
      </p>
    </div>
  )
};