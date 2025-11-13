
"use client";
import Link from "next/link";
import {
  currencyOptions,
  footerLinks1,
  footerLinks2,
  languageOptions,
  socialLinks,
} from "@/data/footer";

export default function Footer2() {
  return (
      <footer className="footer footer_type_2 dark">
        <div className="footer-top container">
          <div className="block-newsletter dark">
            <h3 className="block__title">Получите 10% скидку</h3>
            <p>
              Будьте первыми, кто узнает о трендах, акциях и многом другом!
            </p>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="block-newsletter__form"
            >
              <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your email address"
              />
              <button className="btn btn-secondary fw-medium" type="submit">
                JOIN
              </button>
            </form>
          </div>
        </div>
        {/* <!-- /.footer-top container --> */}

        <div className="footer-middle container">
          <div className="row row-cols-lg-5 row-cols-2">
            <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
              <div className="logo">
                <Link href="/">
                  <img
                      src="/assets/images/logo-png.png"
                      alt="Uomo"
                      className="logo__image"
                  />
                </Link>
              </div>
              {/* <!-- /.logo --> */}

              <p className="footer-address">
                Tashkent region, the city of Almalyk, Buston MFY, Buston street, house No. 8
              </p>

              <p className="m-0">
                <strong className="fw-medium">Vintagedenimuz@gmail.com</strong>
              </p>
              <p>
                <strong className="fw-medium">+998 (99) 807-01-00</strong>
              </p>



              <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer__social-link d-block">
                        <svg
                            className={link.className}
                            width={link.width}
                            height={link.height}
                            viewBox={link.viewBox}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          {typeof link.icon === "string" ? (
                              <use href={link.icon} />
                          ) : (
                              link.icon
                          )}
                        </svg>
                      </a>
                    </li>
                ))}
              </ul>
            </div>
            {/* <!-- /.footer-column --> */}

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase">Company</h6>
              <ul className="sub-menu__list list-unstyled">
                {footerLinks1.map((elm, i) => (
                    <li key={i} className="sub-menu__item">
                      <Link href={elm.href} className="menu-link menu-link_us-s">
                        {elm.text}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
            {/* <!-- /.footer-column --> */}

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase">Shop</h6>
              <ul className="sub-menu__list list-unstyled">
                {footerLinks2.map((elm, i) => (
                    <li key={i} className="sub-menu__item">
                      <Link href={elm.href} className="menu-link menu-link_us-s">
                        {elm.text}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
            {/* <!-- /.footer-column --> */}



            <div className="footer-column mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase">Время работы</h6>
              <ul className="list-unstyled">
                <li><span className="menu-link">Пн - Пт: 8:00 - 21:00</span></li>
                <li><span className="menu-link">Сб: 9:00 - 20:00</span></li>
                <li><span className="menu-link">Вс: Выходной</span></li>
              </ul>
            </div>
            {/* <!-- /.footer-column --> */}
          </div>
          {/* <!-- /.row-cols-5 --> */}
        </div>
        {/* <!-- /.footer-middle container --> */}

        <div className="footer-bottom">
          <div className="container d-md-flex align-items-center">
          <span className="footer-copyright me-auto">
            ©{new Date().getFullYear()} Vintage Denim
          </span>
            <div className="footer-settings d-md-flex align-items-center">
              <div className='flex items-center gap-3 '>
                <span>Разработчик Abdug'aniev Technology</span>
              </div>
            </div>
            {/* <!-- /.footer-settings --> */}
          </div>
          {/* <!-- /.container d-flex align-items-center --> */}
        </div>
        {/* <!-- /.footer-bottom container --> */}
      </footer>
  );
}
