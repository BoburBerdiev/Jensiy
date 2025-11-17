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
export default function TechnologiesPage() {
    return (
        <>
            <Header1 />
            <main className="page-wrapper">
                <div className="mb-4 pb-4"></div>
                <section className="about-us container">
                    <div className="mw-930">
                        <h2 className="page-title text-center">Технологии производства</h2>
                    </div>
                    <div className="about-us__content pb-5 mb-5">
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
                        <div className="mw-930">

                            <p className="mb-4">
                                Добро пожаловать в мир инноваций и стиля! На нашей фабрике каждая деталь создается с использованием передовых технологий, превращая обычный деним в настоящее произведение искусства. Мы не просто шьём одежду — мы создаем уникальные истории в ткани!
                            </p>

                            <h3 className="mb-3">Лазерная обработка денима</h3>
                            <p className="mb-4">
                                Сверхточные лазеры придают каждому изделию эксклюзивный характер: от тончайших узоров до эффектных градиентов. Никакая ручная работа не сравнится с такой точностью и уникальностью. Каждый ваш джинс — единственный в своем роде!
                            </p>

                            <h3 className="mb-3">Экологически чистое окрашивание</h3>
                            <p className="mb-4">
                                Мы заботимся о планете, поэтому используем безопасные и экологичные технологии окрашивания. Яркие цвета, стойкость и минимальное воздействие на окружающую среду — теперь стиль и забота о природе идут вместе!
                            </p>

                            <h3 className="mb-3">Инновации + стиль + экология = ваша идеальная одежда</h3>
                            <p className="mb-4">
                                С нами ваша одежда не просто красива — она уникальна, экологична и современна. Сделайте свой гардероб частью будущего уже сегодня!
                            </p>

                            <h3 className="mb-3">Социальная ответственность — часть нашей философии</h3>
                            <p className="mb-4">
                                Мы заботимся не только о высоком качестве продукции, но и о благополучии людей и планеты. Наша компания активно внедряет программу устойчивого развития, делая мир лучше шаг за шагом:
                            </p>

                            <ul className="mb-4 list-disc ms-5">
                                <li>Энергоэффективное производство: использование возобновляемых источников энергии и современных технологий для минимизации расхода ресурсов.</li>
                                <li>Экологически чистые материалы: переработка отходов производства и подбор безопасных материалов для планеты.</li>
                                <li>Социальные программы: обучение и развитие сотрудников, создание комфортной рабочей среды и поддержка местных сообществ.</li>
                            </ul>

                            <p className="mb-4">
                                Итог: с нами ваша одежда — это не только стиль и качество, но и вклад в экологию и социальное развитие. Мы создаем будущее, заботясь о людях и планете уже сегодня!
                            </p>

                        </div>


                    </div>
                </section>
            </main>
            <Footer1 />
        </>
    );
}
