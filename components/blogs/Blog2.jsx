"use client";
import Link from "next/link";
import Pagination1 from "../common/Pagination1";
import { blogs13, categories } from "@/data/blogs";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog2() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs13);
  useEffect(() => {
    if (activeCategory == "ALL") {
      setFilteredBlogs(blogs13);
    } else {
      setFilteredBlogs([
        ...blogs13.filter((elm) => elm.category.includes(activeCategory)),
      ]);
    }
  }, [activeCategory]);
  return (
    <>
      <section className="blog-page-title mb-4 mb-xl-5">
        <div className="title-bg">
          <Image
            loading="lazy"
            src="/assets/images/blog_title_bg.jpg"
            width="1780"
            height="320"
            alt="image"
          />
        </div>
        <div className="container">
          <h2 className="page-title">Новости</h2>

        </div>
      </section>
      <section className="blog-page container">
        <h2 className="d-none">Новости</h2>
        <div className="blog-grid row row-cols-1 row-cols-md-2 row-cols-xl-3">
          {filteredBlogs.map((elm, i) => (
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
              <div className="blog-grid__item-detail h-100">
                <div className="blog-grid__item-meta">
                  <span className="blog-grid__item-meta__date">{elm.date}</span>
                </div>
                <div className="blog-grid__item-title">
                  <Link href={`/blog/${elm.id}`}>{elm.title}</Link>
                </div>
                <div className="blog-grid__item-content   d-flex flex-column justify-content-between align-items-start ">
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
          ))}
        </div>


      </section>{" "}
    </>
  );
}
