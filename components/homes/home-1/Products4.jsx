import React from "react";
import Link from "next/link";

export default function Products4() {
  return (
    <section className="grid-banner container mb-3">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
              <strong> Наши коллекции</strong>
        </h2>
      <div className="row">
        <div className="col-md-4">
            <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
                <div
                    className="background-img"
                    style={{ backgroundImage: "url(/assets/images/men.jpg)" }}
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
                <div className="content_abs content_center text-center w-100 p-3">
                    <h3 className="text-uppercase fw-bold mb-2 text-white">Мужская коллекция</h3>
                    <p className="fs-6 fw-light mb-2 text-white">
                        Включает в себя классические прямые джинсы, узкие скины и удобные relaxed fit модели. Вся продукция отличается прочностью и стильным дизайном.
                    </p>
                </div>
                {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
            </div>
        </div>
          <div className="col-md-4">
              <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
                  <div
                      className="background-img"
                      style={{ backgroundImage: "url(/assets/images/men.jpg)" }}
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
                  <div className="content_abs content_center text-center w-100 p-3">
                      <h3 className="text-uppercase fw-bold mb-2 text-white">Женская коллекция</h3>
                      <p className="fs-6 fw-light mb-2 text-white">
                          От элегантных джинсов с высокой талией до модных моделей с разрезами и вышивкой. Мы знаем, как важно, чтобы джинсы не только хорошо сидели, но и подчеркивали индивидуальность каждой женщины.
                      </p>
                  </div>

              </div>
          </div>
        {/* <!-- /.col-md-6 --> */}

        <div className="col-md-4">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{ backgroundImage: "url(/assets/images/women.jpg)" }}
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
              <div className="content_abs content_center text-center w-100 p-3">
                  <h3 className="text-uppercase fw-bold mb-2 text-white">Детская коллекция</h3>
                  <p className="fs-6 fw-light mb-2 text-white">
                      Дизайн: яркие и весёлые принты, удобная посадка для активных детей.
                      Безопасность: использование гипоаллергенных материалов, прочные и мягкие ткани.
                  </p>
              </div>
          </div>
        </div>
        {/* <!-- /.col-md-6 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
