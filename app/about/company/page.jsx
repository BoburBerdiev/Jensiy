import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/about/About";
import Clients from "@/components/otherPages/about/Clients";
import Services from "@/components/otherPages/about/Services";
import React from "react";
import GridBanner from "@/components/homes/home-1/GridBanner";
import Products4 from "@/components/homes/home-1/Products4";

export const metadata = {
    title: "О нас || Vintage Denim",
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
                        <div className=' hero-section mb-5 ratio ratio-21x9' style={{ backgroundImage: "url(/assets/images/collection/bannerabout.JPG)" , backgroundSize: "cover" , backgroundPosition: "center center"  }}>
                            {/*<video className="w-100 h-100"*/}
                            {/*       poster={`/assets/videos/videos.mov`} playsInline autoPlay loop muted>*/}
                            {/*    <source*/}
                            {/*        className=""*/}
                            {/*        src={`/assets/videos/videos.mov`}*/}
                            {/*        type="video/mov"*/}
                            {/*    />*/}
                            {/*    <source className="" src={`/assets/videos/videos.mov`} type="video/ogv"/>*/}
                            {/*    <source className="" type="video/webm" src={`/assets/videos/videos.mov`}/>*/}
                            {/*</video>*/}
                        </div>
                        <div className="mw-930 fs-5 fw-light">
                            <p className="mb-4">
                                Фабрика <strong>VINTAGE DENIM</strong> — это пространство, где высокие технологии объединяются с мастерством специалистов и искренней любовью к дениму. Основанная в <strong>2019 году</strong>, компания зарекомендовала себя как надёжный и современный производитель джинсовой одежды премиального уровня.
                            </p>

                            <h4 className="mb-2">Современное производство</h4>
                            <p className="mb-3">
                                Наше предприятие оснащено <strong>передовым европейским оборудованием</strong>, что позволяет выпускать изделия, соответствующие самым строгим международным стандартам. Каждый этап производственного процесса проходит под тщательным контролем:
                            </p>
                            <ul className="mb-4 ps-4">
                                <li>Отбор лучших тканей</li>
                                <li>Точное раскроение</li>
                                <li>Профессиональная пошивка</li>
                                <li>Финальная обработка и проверка качества</li>
                            </ul>
                            <p className="mb-4">
                                Мы стремимся к тому, чтобы каждая пара джинсов была образцом комфорта, долговечности и стиля.
                            </p>

                            <h4 className="mb-2">Материалы премиум-класса</h4>
                            <p className="mb-3">
                                Для производства используются только <strong>высококачественные ткани</strong>, проходящие несколько технологических этапов:
                            </p>
                            <ul className="mb-4 ps-4">
                                <li>бережная окраска</li>
                                <li>смягчение материала</li>
                                <li>стабилизация цвета</li>
                                <li>защита от износа</li>
                            </ul>
                            <p className="mb-4">
                                Это гарантирует долговечность, идеальную посадку и приятные тактильные ощущения при носке.
                            </p>
                            <h4 className="mb-2">Инновации и мода</h4>
                            <p className="mb-3">
                                Команда специалистов VINTAGE DENIM постоянно следует за трендами в мировой индустрии моды. Мы активно внедряем <strong>инновационные технологии</strong> в производство:
                            </p>
                            <ul className="mb-4 ps-4">
                                <li>лазерная обработка для создания эффектов потертости без вреда для окружающей среды</li>
                                <li><strong>эко-крашение</strong> — технология, снижающая расход воды и химических веществ</li>
                                <li>современные методы стирки и обработки, создающие уникальный характер каждой модели</li>
                            </ul>
                            <h4 className="mb-2">Наша философия</h4>
                            <p className="mb-2">Мы создаём джинсы, которые:</p>
                            <ul className="ps-4">
                                <li>выглядят стильно,</li>
                                <li>служат долго,</li>
                                <li>комфортны в ежедневной носке,</li>
                                <li>производятся с уважением к природе.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5 "></div>

                    <Services />
                    {/*<Clients />*/}
                    {/*<div className="mb-5 pb-xl-5"></div>*/}

                </section>
            </main>
            <Footer1 />
        </>
    );
}
