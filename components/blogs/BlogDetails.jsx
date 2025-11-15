import React from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Image from "next/image";

export default function BlogDetails({ blog }) {
  return (
    <section className="blog-page blog-single container">
      <div className="mw-930">
        <h2 className="page-title">{blog.title}</h2>
        <div className="blog-single__item-meta">
          <span className="blog-single__item-meta__date">{blog.date}</span>
        </div>
      </div>
      <div className="blog-single__item-content">
        <p>
          <Image
            loading="lazy"
            className="w-100  d-block object-position-top object-fit-cover"
            src={blog.imgSrc}
            width="1410"
            height="650"
            alt="image"
          />
        </p>
        <div className="mw-930">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien
            dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis
            sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci
            etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est
            viverra interdum. Praesent auctor nulla morbi non posuere mattis.
            Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae,
            pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor
            lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis
            consequat faucibus aliquam metus. Ornare consequat, vulputate sit
            maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra,
            maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem
            gravida lacus, justo placerat.
          </p>

        </div>
      </div>

    </section>
  );
}
