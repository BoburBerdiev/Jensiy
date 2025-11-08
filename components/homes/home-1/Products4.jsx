import React from "react";
import Link from "next/link";

export default function Products4() {
  return (
    <section className="grid-banner container mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{ backgroundImage: "url(/assets/images/men.webp)" }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(4, 29, 86, 0.5)",
                    }}
                >
                </div>
            </div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg text-white">
              <h6 className="text-uppercase  fw-medium mb-3 text-white">
                Starting At $19
              </h6>
              <h3 className=" mb-3 text-white">Women's T-Shirts</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase  fw-medium text-white"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
          </div>
        </div>
        {/* <!-- /.col-md-6 --> */}

        <div className="col-md-6">
          <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
              className="background-img"
              style={{ backgroundImage: "url(/assets/images/women.webp)" }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(4, 29, 86, 0.5)",
                    }}
                >
                </div>
            </div>
            <div className="content_abs content_bottom content_left content_bottom-lg content_left-lg text-white">
              <h6 className="text-uppercase fw-medium mb-3 text-white">Starting At $39</h6>
              <h3 className="mb-3 text-white">Men's Sportswear</h3>
              <Link
                href="/shop-1"
                className="btn-link default-underline text-uppercase fw-medium text-white"
              >
                Shop Now
              </Link>
            </div>
            {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
          </div>
        </div>
        {/* <!-- /.col-md-6 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
