'use client'
import { useMenuStore } from "@/store/useMenuStore"
import { CloseXIcon } from "@/icons/Icons"
import ProductViewModal from "../product-view/ProductsView"
import QrSection from "./qr-section/QrSection"

import './styles.css'

export default function Dialog() {
  const { isOpen, handleDialog, productModal } = useMenuStore()

  return (
    <dialog open={isOpen}>
      <section className="scale-up-center">

        {
          productModal && (
            <>
              <ProductViewModal props={productModal} />
              <QrSection src={productModal.qr} href={productModal.link_to_buy} />
            </>
          )
        }

        <button
          type="button"
          role="switch"
          aria-checked='false'
          title="close modal"
          onClick={() => handleDialog()}
        >
          <CloseXIcon />
        </button>

      </section>
    </dialog>
  )
};