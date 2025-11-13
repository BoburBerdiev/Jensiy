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
          <h5>Sed do eiusmod tempor incididunt ut labore</h5>
          <p>
            Saw wherein fruitful good days image them, midst, waters upon, saw.
            Seas lights seasons. Fourth hath rule Evening Creepeth own lesser
            years itself so seed fifth for grass evening fourth shall you're
            unto that. Had. Female replenish for yielding so saw all one to
            yielding grass you'll air sea it, open waters subdue, hath. Brought
            second Made. Be. Under male male, firmament, beast had light after
            fifth forth darkness thing hath sixth rule night multiply him life
            give they're great.
          </p>
          <div className="row">
            <div className="col-md-6">
              <h5>Why choose product?</h5>
              <ul className="list text-list list_dot_darkgray">
                <li className="list-item text-list__item">
                  Creat by cotton fibric with soft and smooth
                </li>
                <li className="list-item text-list__item">
                  Simple, Configurable (e.g. size, color, etc.), bundled
                </li>
                <li className="list-item text-list__item">
                  Downloadable/Digital Products, Virtual Products
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Sample Number List</h5>
              <ol className="list text-list">
                <li className="list-item text-list__item">
                  Create Store-specific attrittbutes on the fly
                </li>
                <li className="list-item text-list__item">
                  Simple, Configurable (e.g. size, color, etc.), bundled
                </li>
                <li className="list-item text-list__item">
                  Downloadable/Digital Products, Virtual Products
                </li>
              </ol>
            </div>
          </div>
          <p>
            She'd years darkness days. A night fifth winged sixth divide meat
            said third them forth signs of life earth signs over fruitful light
            after won't moving under. Thing yielding upon seed. Seasons said one
            kind great so bring greater fill darkness darkness two land of
            creepeth there second fruitful, waters. Make don't void years
            Gathering gathering divide fill.
          </p>
        </div>
        <div className="container mw-1170">
          <div className="row">
            <div className="col-md-6">
              <p>
                <Image
                  loading="lazy"
                  className="w-100 object-position-top object-fit-cover d-block"
                  src="/assets/images/gallereya/gal6.webp"
                  width="570"
                  height="697"
                  alt="image"
                />
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <Image
                  loading="lazy"
                  className="w-100 object-position-top object-fit-cover d-block"
                  src="/assets/images/gallereya/gal7.webp"
                  width="570"
                  height="697"
                  alt="image"
                />
              </p>
            </div>
          </div>
        </div>
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
          <p>
            She'd years darkness days. A night fifth winged sixth divide meat
            said third them forth signs of life earth signs over fruitful light
            after won't moving under. Thing yielding upon seed. Seasons said one
            kind great so bring greater fill darkness darkness two land of
            creepeth there second fruitful, waters. Make don't void years
            Gathering gathering divide fill.
          </p>
        </div>
      </div>

    </section>
  );
}
