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
          <div className="mw-930 fs-5 fw-light">
              <h4 className="mb-2">Эксклюзивные ткани и обработка</h4>
              <p className="mb-4">
                  Эксклюзивные ткани — это высококачественные текстильные материалы, созданные с использованием редкого сырья, авторских техник плетения и современных технологических процессов. Сочетание традиционных ремесленных методов и инновационных производственных подходов придаёт этим материалам уникальные эстетические и эксплуатационные свойства.
              </p>

              <p className="mb-3">
                  Процесс обработки эксклюзивных тканей включает комплекс специализированных процедур, направленных на улучшение их фактуры, долговечности и устойчивости к внешним воздействиям. Ключевыми этапами являются:
              </p>
              <ul className="mb-4 ps-4">
                  <li>Предварительное кондиционирование</li>
                  <li>Деликатная очистка</li>
                  <li>Стабилизация структуры волокон</li>
                  <li>Нанесение защитных или декоративных покрытий</li>
              </ul>

              <p className="mb-4">
                  Каждая операция требует высокой точности, глубоких знаний материаловедения и строгого соблюдения технологических стандартов.
              </p>

              <p className="mb-4">
                  Благодаря профессиональной обработке ткани сохраняют натуральный блеск, насыщенность цвета и структурную целостность, что делает их идеальными для создания изделий премиального уровня. Использование эксклюзивных материалов в модной индустрии позволяет формировать уникальный визуальный стиль, подчёркивать индивидуальность и обеспечивать высокое качество готовой продукции.
              </p>
          </div>

      </div>

    </section>
  );
}
