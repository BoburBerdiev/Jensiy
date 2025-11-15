import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GridBanner() {
  return (
    <section className="grid-banner container mb-3" id="section-grid-banner">
      <div className="row">
        <div className="col-lg-4">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
                className="background-img"
                style={{ backgroundImage: "url(/assets/images/about/about1.jpg)" }}
            >
              <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(4, 29, 86, 0.7)",
                  }}
              >
              </div>
            </div>
            <div className="content_abs content_center text-center ">
              <h3 className="text-uppercase fw-bold mb-2 text-white">Энергоэффективное производство</h3>

              <p className="fs-6 fw-medium mb-2 text-white">
                использование возобновляемых источников энергии.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
                className="background-img"
                style={{ backgroundImage: "url(/assets/images/about/about2.jpg)" }}
            >
              <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(4, 29, 86, 0.7)",
                  }}
              >
              </div>
            </div>
            <div className="content_abs content_center text-center ">
              <h3 className="text-uppercase fw-bold mb-2 text-white">Экологически чистые материалы</h3>
              <p className="fs-6 fw-medium mb-2 text-white">
                переработка отходов производства.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
                className="background-img"
                style={{ backgroundImage: "url(/assets/images/about/about3.jpg)" }}
            >
              <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(4, 29, 86, 0.7)",
                  }}
              >
              </div>
            </div>
            <div className="content_abs content_center text-center ">
              <h3 className="text-uppercase fw-bold mb-2 text-white">Социальные программы</h3>
              <p className="fs-6 fw-medium mb-2 text-white">
                обучение и развитие сотрудников, поддержка местных сообществ.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
