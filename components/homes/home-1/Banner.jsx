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
        }}
      ></div>
      <div className="image-banner__content container py-3">
        <h2 className="text-white fw-bold">Новая коллекция</h2>
        <p className="text-white mb-4">Следите за нашими новыми коллекциями вместе</p>
        <Link
          href="/shop-1"
          className="btn btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-55 d-inline-flex align-items-center"
        >
          <span className="text_dash_half">Скачать</span>
        </Link>
      </div>
    </section>
  );
}
