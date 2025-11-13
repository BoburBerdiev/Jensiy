import React from "react";
import Link from "next/link";

export default function Products1() {
  return (
    <section
      className="collections-grid collections-grid_masonry"
      id="section-collections-grid_masonry"
    >
      <div className="container h-md-100">
        <div className="row h-md-100">
          <div className="col-24">
            <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
             About Us <strong> VINTAGE DENIM</strong>
            </h2>
          </div>
          <div className="col-lg-6 ">
            <div className="collection-grid__item position-relative h-md-100 text-white">
              <div
                className="background-img"
                style={{
                  backgroundImage: "url(/assets/images/vintage.jpg)",
                }}
              >
                {/*<div*/}
                {/*    style={{*/}
                {/*      position: "absolute",*/}
                {/*      inset: 0,*/}
                {/*      background: "rgba(4, 29, 86, 0.5)",*/}
                {/*    }}*/}
                {/*>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          {/* <!-- /.col-md-6 --> */}
          <div className="col-lg-6 h-md-100">
            <p className="fs-6 fw-medium mb-2">
              Фабрика "VINTAGE DENIM" — это место, где сочетаются высокие технологии, опытные мастера и любовь к дениму.

              Основанная в 2019 году, наша фабрика зарекомендовала себя как ведущий производитель джинсовой одежды, предлагая клиентам продукцию высочайшего качества.
            </p>
            <h4 className="mb-1">Наше производство</h4>
            <p className="fs-6 fw-medium mb-2">
              Фабрика "VINTAGE DENIM" оснащена современным оборудованием, что позволяет нам производить джинсы, отвечающие самым строгим стандартам. Каждый этап производства — от выбора тканей до финальной обработки — находится под строгим контролем, чтобы гарантировать безупречное качество каждой пары джинсов.

              Мы используем только высококачественные материалы. Наши ткани проходят несколько стадий обработки, включая покраску и смягчение, что обеспечивает долговечность и комфорт наших изделий.
              Специалисты фабрики следят за последними тенденциями в моде и внедряют инновационные технологии, такие как лазерная обработка и эко-крашение, чтобы наши джинсы были не только стильными, но и экологичными.
            </p>

          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
  );
}
