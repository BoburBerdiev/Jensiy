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
                    id="pills-item-1"
                    role="tabpanel"
                    aria-labelledby="pills-item-1-tab"
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
                          id="tab-item-1"
                          role="tabpanel"
                          aria-labelledby="tab-item-1-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                              <li className="nav-item position-relative" role="presentation">
                                  <a className="nav-link nav-link_rline">
      <span className="rline-content">
        Ташкентская область, город Алмалык, Бустонский МФЙ, улица Бустон, дом №8<br />
        Ташкентская область
      </span>
                                  </a>
                              </li>

                              <li className="nav-item position-relative" role="presentation">
                                  <a className="nav-link nav-link_rline" href="mailto:Vintagedenimuz@gmail.com">
                                      <span className="rline-content">Vintagedenimuz@gmail.com</span>
                                  </a>
                              </li>

                              <li className="nav-item position-relative" role="presentation">
                                  <a className="nav-link nav-link_rline" href="tel:+998998070100">
                                      <span className="rline-content">+998 (99) 807-01-00</span>
                                  </a>
                              </li>
                          </ul>
                          {/* <!-- /.sub-menu --> */}
                        </div>

                      </div>
                    </div>
                    {/* <!-- /.row --> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-2"
                    role="tabpanel"
                    aria-labelledby="pills-item-2-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-3"
                    role="tabpanel"
                    aria-labelledby="pills-item-3-tab"
                  >
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
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
