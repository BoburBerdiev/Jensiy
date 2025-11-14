"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function NewsLetter() {
  const modalElement = useRef();
  useEffect(() => {
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    var myModal = new bootstrap.Modal(
      document.getElementById("newsletterPopup"),
      {
        keyboard: false,
      }
    );

    myModal.show();
    modalElement.current.addEventListener("hidden.bs.modal", () => {
      myModal.hide();
    });
  }, []);

  return (
    <div
      className="modal fade"
      id="newsletterPopup"
      ref={modalElement}
      tabIndex="-1"
      data-bs-backdrop={"true"}
      aria-hidden="true"
    >
      <div className="modal-dialog newsletter-popup modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-0 d-none d-md-block">
              <div className="newsletter-popup__bg h-100 w-100">
                <Image
                    loading="lazy"
                    width={450}
                    height={550}
                    src="/assets/images/vintage.jpg"
                    alt="Vintage Denim"
                    className="h-100 w-100 object-fit-cover d-block"
                />
              </div>
            </div>
            <div className="col-md-6 p-0 d-flex align-items-center">
              <div className="block-newsletter w-100">
                <h3 className="block__title">Свяжитесь с нами</h3>
                <p>
                    Есть вопросы по сотрудничеству или нашим услугам? Оставьте своё имя и номер телефона в форме ниже. Наши специалисты свяжутся с вами в ближайшее время и предоставят подробную информацию.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="footer-newsletter__form position-relative bg-body"
                >
                  <input
                    className="form-control border-2 mb-2"
                    type="email"
                    name="email"
                    placeholder="Имя *"
                  />
                    <input
                        className="form-control border-2 mb-2"
                        type="email"
                        name="email"
                        placeholder="Электронная почта *"
                    />
                    <button type="submit" className="btn btn-primary w-100">
                        Отправить
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
