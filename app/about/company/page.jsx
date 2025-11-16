import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/about/About";
import Clients from "@/components/otherPages/about/Clients";
import Services from "@/components/otherPages/about/Services";
import React from "react";
import GridBanner from "@/components/homes/home-1/GridBanner";
import Products4 from "@/components/homes/home-1/Products4";

export const metadata = {
    title: "About || Vintage Denim",
    description: "Vintage Denim",
};
export default function AboutPage() {
    return (
        <>
            <Header1 />
            <main className="page-wrapper">
                <div className="mb-4 pb-4"></div>
                <section className="about-us container">
                    <div className="mw-930">
                        <h2 className="page-title text-center">Наша компания</h2>
                    </div>
                    <div className="about-us__content ">
                        <div className=' hero-section mb-5 ratio ratio-21x9'>
                            <video className="w-100 h-100"
                                   poster={`/assets/videos/videos.mov`} playsInline autoPlay loop muted>
                                <source
                                    className=""
                                    src={`/assets/videos/videos.mov`}
                                    type="video/mov"
                                />
                                <source className="" src={`/assets/videos/videos.mov`} type="video/ogv"/>
                                <source className="" type="video/webm" src={`/assets/videos/videos.mov`}/>
                            </video>
                        </div>
                        <div className="mw-930 fs-5 fw-light">
                            <p className=" mb-4">
                                Фабрика "VINTAGE DENIM" — это место, где сочетаются высокие технологии, опытные мастера и любовь к дениму.
                                Основанная в 2019 году, наша фабрика зарекомендовала себя как ведущий производитель джинсовой одежды,
                                предлагая клиентам продукцию высочайшего качества.
                            </p>
                            <p className="mb-4">
                                Фабрика "VINTAGE DENIM" оснащена современным оборудованием, что позволяет нам производить джинсы,
                                отвечающие самым строгим стандартам. Каждый этап производства — от выбора тканей до финальной обработки —
                                находится под строгим контролем, чтобы гарантировать безупречное качество каждой пары джинсов.
                            </p>
                            <p className="mb-4">
                                Мы используем только высококачественные материалы. Наши ткани проходят несколько стадий обработки,
                                включая покраску и смягчение, что обеспечивает долговечность и комфорт наших изделий.
                                Специалисты фабрики следят за последними тенденциями в моде и внедряют инновационные технологии,
                                такие как лазерная обработка и экс-крашение, чтобы наши джинсы были не только стильными, но и экологичными.
                            </p>

                            {/*<h3 className="mb-4">Технологии производства</h3>*/}
                            {/*<p className="mb-4">*/}
                            {/*    На нашей фабрике используются передовые технологии и оборудование, что позволяет нам добиваться высочайшего*/}
                            {/*    качества продукции. В производственном процессе мы применяем:*/}
                            {/*</p>*/}
                            {/*<ul className="mb-4 list-disc ms-5">*/}
                            {/*    <li>Лазерную обработку денима — для создания уникальных узоров и эффектов.</li>*/}
                            {/*    <li>Экологически чистые методы окрашивания — минимальное воздействие на окружающую среду.</li>*/}
                            {/*</ul>*/}



                            {/*<h3 className="mb-4">Социальная ответственность</h3>*/}
                            {/*<p className="mb-4">*/}
                            {/*    Мы заботимся не только о качестве нашей продукции, но и о благополучии наших сотрудников и окружающей среды.*/}
                            {/*    В нашей компании действует программа устойчивого развития, которая включает:*/}
                            {/*</p>*/}
                            {/*<ul className="mb-4 list-disc ms-5">*/}
                            {/*    <li>Энергоэффективное производство: использование возобновляемых источников энергии.</li>*/}
                            {/*    <li>Экологически чистые материалы: переработка отходов производства.</li>*/}
                            {/*    <li>Социальные программы: обучение и развитие сотрудников, поддержка местных сообществ.</li>*/}
                            {/*</ul>*/}

                            {/*<h3 className="mb-4">Наши коллекции</h3>*/}
                            {/*<p className="mb-4">*/}
                            {/*    Мы предлагаем широкий ассортимент джинсовой одежды для мужчин, женщин и детей, включая классические и современные*/}
                            {/*    модели, такие как скинни, бойфренды, клеш и многие другие. Каждая коллекция создается с учётом разнообразных*/}
                            {/*    вкусов и предпочтений наших клиентов.*/}
                            {/*</p>*/}
                        </div>

                    </div>
                    <Services />
                    <Clients />
                    <div className="mb-5 pb-xl-5"></div>

                </section>
            </main>
            <Footer1 />
        </>
    );
}
