"use client";
import { blogs1 } from "@/data/blogs";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Blogs() {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    effect: "none",
    modules: [Autoplay, Pagination],
    loop: true,
    pagination: {
      el: ".blog-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="blog-carousel container">
      <h2 className="section-title text-uppercase fw-bold text-center mb-3 pb-xl-2 mb-xl-4">
          Новости
      </h2>

      <div className="position-relative">
        <Swiper
          style={{ maxWidth: "100vw", overflow: "hidden" }}
          {...swiperOptions}
          className="swiper-container js-swiper-slider"
        >
          {blogs1.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide blog-grid__item mb-2">
                <div key={i} className="blog-grid__item">
                    <div className="blog-grid__item-image">
                        <Image
                            loading="lazy"
                            className="object-fit-cover object-position-top"
                            src={elm.imgSrc}
                            width="450"
                            height="400"
                            alt="image"
                        />
                    </div>
                    <div className="blog-grid__item-detail">
                        <div className="blog-grid__item-meta">
                            <span className="blog-grid__item-meta__date">{elm.date}</span>
                        </div>
                        <div className="blog-grid__item-title">
                            <Link href={`/blog/${elm.id}`}>{elm.title}</Link>
                        </div>
                        <div className="blog-grid__item-content">
                            <p>{elm.content}</p>
                            <Link
                                href={`/blog/${elm.id}`}
                                className="readmore-link"
                            >
                                Продолжить чтение
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          ))}

          {/* <!-- /.swiper-wrapper --> */}
        </Swiper>
        {/* <!-- /.swiper-container js-swiper-slider --> */}

        <div className="blog-pagination type2 mt-1 mt-md-4 d-flex align-items-center justify-content-center"></div>
        {/* <!-- /.products-pagination --> */}
      </div>
      {/* <!-- /.position-relative --> */}
    </section>
  );
}
