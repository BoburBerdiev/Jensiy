import React from "react";
import Link from "next/link";
import CountDownComponent from "@/components/common/CountDownComponent";

export default function Products3() {
  return (
    <section
      className="deal-timer position-relative d-flex align-items-end overflow-hidden"
      style={{ backgroundColor: "#ebebeb" }}
    >
      <div
        className="background-img"
        style={{ backgroundImage: "url(/assets/images/sale.png)" }}
      >
        <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(4, 29, 86, 0.5)",
            }}
        ></div>
      </div>

      <div className="deal-timer-wrapper container position-relative">
        <div className="deal-timer__content pb-2 mb-3 pb-xl-5 mb-xl-3 mb-xxl-5">
          <p className="text_dash text-uppercase text-red fw-medium text-white">
            Deal of the week
          </p>
          <h3 className="h1 text-uppercase text-white">
            <strong>Spring</strong> Collection
          </h3>
          <Link
            href="/shop-1"
            className="btn-link default-underline text-uppercase fw-medium mt-3 text-white"
          >
            Shop Now
          </Link>
        </div>

        <div className="position-relative d-flex align-items-center text-center pt-xxl-4 js-countdown">
          <CountDownComponent />
        </div>
      </div>
      {/* <!-- /.deal-timer-wrapper --> */}
    </section>
  );
}
