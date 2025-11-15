import React from "react";

export default function AdditionalInfo() {
    return (
        <div className="product-single__addtional-info">

            <div className="item">
                <label className="h6">Габариты</label>
                <span>90 x 60 x 90 см</span>
            </div>

            <div className="item">
                <label className="h6">Размер</label>
                <span>XS, S, M, L, XL</span>
            </div>

            <div className="item">
                <label className="h6">Цвет</label>
                <span>Черный, Оранжевый, Белый</span>
            </div>

            <div className="item">
                <label className="h6">Хранение</label>
                <span>Удобное платье-рубашка свободного кроя</span>
            </div>
        </div>
    );
}
