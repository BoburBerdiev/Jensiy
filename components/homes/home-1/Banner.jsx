import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="image-banner">
      <div
        className="background-img"
        style={{
          backgroundImage: "url(/assets/images/sale.png)",
          backgroundPosition: "20% center",
            backgroundRepeat:"no-repeat",
            backgroundAttachment: "fixed",

        }}
      ></div>
      <div className="image-banner__content container py-3">
        <h2 className="text-white fw-bold">Новая коллекция</h2>
        <p className="text-white mb-4">Следите за нашими новыми коллекциями вместе</p>
          <div className={"d-flex gap-3 justify-content-center align-items-center"}>
              <Link
                  href="/shop-1"
                  className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center"
              >
                  <span className="text_dash_half">Скачать</span>
              </Link>
              <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#newsletterPopup"
                  className="btn btn-outline-primary mr-3 border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center"
              >
                  <span className="text_dash_half">Связаться с нами</span>
              </a>
          </div>
      </div>
    </section>
  );
}
