import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SiteMap() {
  return (
    <div className="modal fade" id="siteMap" tabIndex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div className="sitemap d-flex">
          <div className="w-50 d-none d-lg-block">
            <Image
              width={960}
              height={950}
              style={{ height: "fit-content" }}
              loading="lazy"
              src="/assets/images/nav-bg.jpg"
              alt="Site map"
              className="sitemap__bg"
            />
          </div>
          {/* <!-- /.sitemap__bg w-50 d-none d-lg-block --> */}
          <div className="sitemap__links w-50 flex-grow-1">
            <div className="modal-content">
              <div className="modal-header d-flex align-items-center justify-content-end">

                <button
                  type="button"
                  className="btn-close-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="tab-content col-12" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"

                  >
                    <div className="row">
                        <ul
                            className="nav nav-tabs list-unstyled col-5 d-block"
                            role="tablist"
                        >
                            <li className="nav-item position-relative" role="presentation">
                                <a className="nav-link nav-link_rline" href="/">
                                    <span className="rline-content">Главная</span>
                                </a>
                            </li>

                            <li className="nav-item position-relative" role="presentation">
                                <a className="nav-link nav-link_rline" href="/about">
                                    <span className="rline-content">О нас</span>
                                </a>
                            </li>

                            <li className="nav-item position-relative" role="presentation">
                                <a className="nav-link nav-link_rline" href="/catalog">
                                    <span className="rline-content">Каталог</span>
                                </a>
                            </li>

                            <li className="nav-item position-relative" role="presentation">
                                <a className="nav-link nav-link_rline" href="/contact">
                                    <span className="rline-content">Контакты</span>
                                </a>
                            </li>

                            <li className="nav-item position-relative" role="presentation">
                                <a className="nav-link nav-link_rline" href="/news">
                                    <span className="rline-content">Новости</span>
                                </a>
                            </li>
                        </ul>


                        <div className="tab-content col-7" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                        >
                          <ul className="sub-menu list-unstyled ">
                              <li className="sub-menu__item position-relative mb-2" role="presentation">
                                  <a className=" nav-link_rline">
      <span className="">
        Ташкентская область, город Алмалык, Бустонский МФЙ, улица Бустон, дом №8<br />
        Ташкентская область
      </span>
                                  </a>
                              </li>

                              <li className="sub-menu__item position-relative mb-2" role="presentation">
                                  <a className=" nav-link_rline" href="mailto:Vintagedenimuz@gmail.com">
                                      <span className="">Vintagedenimuz@gmail.com</span>
                                  </a>
                              </li>

                              <li className="sub-menu__item position-relative mb-2" role="presentation">
                                  <a className=" nav-link_rline" href="tel:+998998070100">
                                      <span className="">+998 (99) 807-01-00</span>
                                  </a>
                              </li>
                          </ul>
                          {/* <!-- /.sub-menu --> */}
                        </div>

                      </div>
                    </div>
                    {/* <!-- /.row --> */}
                  </div>

                </div>
              </div>
              {/* <!-- /.modal-body --> */}
            </div>
            {/* <!-- /.modal-content --> */}
          </div>
          {/* <!-- /.sitemap__links w-50 flex-grow-1 --> */}
        </div>
      </div>
      {/* <!-- /.modal-dialog modal-fullscreen --> */}
    </div>
  );
}
