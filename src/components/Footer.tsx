"use client";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaFacebookMessenger,
  FaTiktok,
} from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white pt-10 text-sm bg-[var(--color-secondary)]">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24 px-4 md:px-8 lg:px-40 ">
        {/* Redes */}
        <div>
          <h3 className="font-bold mb-2">Nuestras redes: </h3>
          <div className="flex gap-3 mb-4">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaFacebookMessenger size={24} />
            <FaTiktok size={24} />
          </div>
          <h4 className="font-bold">
            <Link href="/contact">Contáctanos</Link>
          </h4>

          <p>Email: tienda@mail.com</p>
          <p>Whatsapp: +51 999 999 999</p>
        </div>
        {/* Preguntas frecuentes */}
        <div>
          <h3 className="font-bold mb-2">
            <Link href="/">Preguntas frecuentes</Link>
          </h3>
        </div>

        {/* Términos y condiciones */}
        <div>
          <h3 className="font-bold mb-2">
            <Link href="/">Términos y condiciones</Link>
          </h3>
          <h3 className="font-bold mb-2">
            <Link href="/">Política de cookies</Link>
          </h3>
          <h3 className="font-bold mb-2">
            <Link href="/">Devoluciones</Link>
          </h3>
          <Image
            src="/libro_reclamaciones.png"
            alt="Libro de reclamaciones"
            width={90}
            height={60}
          />
        </div>

        {/* Métodos de pago */}
        <div>
          <h3 className="font-bold mb-2">Pagos con:</h3>
          <div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <Image src="/yape.png" alt="Yape" width={32} height={32} />
              <Image src="/plin.png" alt="Plin" width={32} height={32} />
              <Image src="/bcp.webp" alt="BCP" width={32} height={32} />
              <Image
                src="/interbank.png"
                alt="Interbank"
                width={32}
                height={32}
              />
              <Image
                src="/scotiabank.webp"
                alt="Scotiabank"
                width={32}
                height={32}
              />
              <Image src="/bbva.png" alt="BBVA" width={32} height={32} />
              <Image src="/paypal.webp" alt="PayPal" width={32} height={32} />
              <Image src="/izipay.jpg" alt="IzyPay" width={32} height={32} />
              <SiVisa size={32} />
              <SiMastercard size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-center text-sm mt-10 border-t border-gray-700 pt-4 pb-4">
        &copy; 2025 Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
