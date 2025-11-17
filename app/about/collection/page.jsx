import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";

export const metadata = {
    title: "О нас || Vintage Denim",
    description: "Vintage Denim",
};

// Card component
const CollectionCard = ({ title, description, image }) => (
    <div className="col-md-4">
        <div className="grid-banner__item grid-banner__item_rect position-relative mb-3">
            <div
                className="background-img"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(4, 29, 86, 0.7)",
                    }}
                ></div>
            </div>
            <div className="content_abs content_center text-center w-100 p-3">
                <h3 className="text-uppercase fw-bold mb-2 text-white">{title}</h3>
                <p className="fs-6 fw-light mb-2 text-white">{description}</p>
            </div>
        </div>
    </div>
);

export default function CollectionPage() {
    const collections = [
        {
            title: "Мужская коллекция",
            description:
                "Включает в себя классические прямые джинсы, узкие скины и удобные relaxed fit модели. Вся продукция отличается прочностью и стильным дизайном.",
            image: "/assets/images/img/men-min.jpg",
        },
        {
            title: "Женская коллекция",
            description:
                "От элегантных джинсов с высокой талией до модных моделей с разрезами и вышивкой. Мы знаем, как важно, чтобы джинсы не только хорошо сидели, но и подчеркивали индивидуальность каждой женщины.",
            image: "/assets/images/img/girls-min.jpg",
        },
        {
            title: "Детская коллекция",
            description:
                "Дизайн: яркие и весёлые принты, удобная посадка для активных детей. Безопасность: использование гипоаллергенных материалов, прочные и мягкие ткани.",
            image: "/assets/images/img/kids-min.jpg",
        },
    ];

    const mens = [

        {
            title: "Relaxed fit",
            description:
                "С верхней одеждой: Идеально подходят для сочетания с объемными свитерами, худи или фланелевыми рубашками для совдания образа C обувью: Можно надеть с кроссовками или ботинками для Преседневного стиля или с более классической обувью для аккуратного вида.",
            image: "/assets/images/collection/relaxed.png",
        },

        {
            title: "Regular fit",
            description:
                "С верхней одеждой: Идеально смотрятся с футболками, рубашками и свитерами любого фасона С обувью: Могут сочетаться как с повседневной обувью, так и с более официальной, в зависимости от случая.",
            image: "/assets/images/collection/regular.png",
        },
        {
            title: "Slim fit",
            description:
                "С верхней одеждой: Идеально сочетаются с обтягивающими или спегка свободными футболками. Рубашками и свитерами. С обувью: Могут носиться как с кедами, так и с ботинками, особенно с узкими голенищами.",
            image: "/assets/images/collection/slim.png",
        },
    ]
    const women = [

        {
            title: "Baggi",
            description:
                "Городской стиль: носите с кроссовками и оверсайз худи для создания уличного образа Элегантность с ноткой небрежности: Сочетайте с рубашками и лоферами для контраста между формальностью и расслабленностью.Летний вариант: отлич",
            image: "/assets/images/collection/wbaggi.png",
        },

        {
            title: "Straight jeans",
            description:
                "Классический образ: носите с рубашками или блузами для создания элегантного и утонченного вида.Повседневный стиль: Сочетайте с футболками и кедами для расслабленного и удобного образа.",
            image: "/assets/images/collection/wstaraigh.png",
        },
        {
            title: "Low rise",
            description:
                "Советы по стилизации: для кэжуал образа: Сочетайте с простыми футболками или топами для создания расслабленного и удобного стиля. Для более смелого образа: носите с короткими топами или кроп-топами, чтобы добавить игривости и молодежного дух",
            image: "/assets/images/collection/wlow.png",
        },
    ]

    const kids = [

        {
            title: "Papperbag",
            description:
                "Советы по стилизации: Комбинирование с верхней одеждой: Джинсы 'Paperbag' прекрасно сочетаются с облегающими топами или футболками, которые можно заправить внутрь. чтобы подчеркнуть высокую талию и рюши.Акцент на аксессуары: Используйте яркие ремни или пояса, чтобы добавить контраст и акцентировать внимание на талии. Это также поможет удерживать джинсы на месте, обеспечивая комфорт. Обувь: Выбирайте обувь, которая будет гармонировать с расклешенным кроем джинсов Например, ботинки на низком ходу или кеды подойдут для повседневного образа, а балетки или сандалии добавят элегантыости! Сезонные акценты: В теплое время года дополните образ легкими блузками и топами, а зимой - теплыми свитерами и водолазками.",
            image: "/assets/images/collection/wbaggi.png",
        },

        {
            title: "Regular fit",
            description:
            "Сочетание с верхней одеждой: Джинсы 'Regular Fit' отлично смотрятся с футболками, свитшотами или рубашками. Вы можете выбрать яркий тол, чтобы добавить образу индивидуальности, или остановиться на классическом белом варианте для более традиционного вида.Обувь: Эти джинсы хорошо сочетаются как с кроссовками для активных игр, так и с более элегантной обувью, например, с мокасинами или ботинками, если нужен более официальный стиль.Аксессуары: Ремни и шапки могут стать отличным дополнением к джинсам 'Regular Fit'.Выбирайте аксессуары в тон одежде или наоборот, контрастные, чтобы добавить образу выразительности.",
            image: "/assets/images/collection/wstaraigh.png",
        },
        {
            title: "Low rise",
            description:
                "Советы по стилизации: для кэжуал образа: Сочетайте с простыми футболками или топами для создания расслабленного и удобного стиля. Для более смелого образа: носите с короткими топами или кроп-топами, чтобы добавить игривости и молодежного дух",
            image: "/assets/images/collection/wlow.png",
        },
    ]



    return (
        <>
            <Header1 />
            <main className="page-wrapper">
                <div className="mb-4 pb-4"></div>
                <section className="grid-banner container mb-3">
                    <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
                        <strong>Наши коллекции</strong>
                    </h2>
                    <div className="row">
                        {collections.map((item, index) => (
                            <CollectionCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </section>
                <section className="grid-banner container mb-3">
                    <div className="mw-930 fs-5 fw-light">
                        <h4 className="mb-2 mt-5">Мужская коллекция</h4>


                        <ul className="mb-4 ps-4">
                            {mens.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                        <h4 className="mb-2 mt-5">Женская коллекция</h4>
                        <ul className="mb-4 ps-4">
                            {women.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                        <h4 className="mb-2 mt-5">Детская коллекция</h4>
                        <ul className="mb-4 ps-4">
                            {kids.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <strong>{item.title}:</strong> {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </main>

            <div className="mb-5 pb-xl-5"></div>

            <Footer1 />
        </>
    );
}
