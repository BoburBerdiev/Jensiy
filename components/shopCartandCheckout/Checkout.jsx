"use client";
import { useState } from "react";

export default function Checkout() {
    const [selectedRegion, setSelectedRegion] = useState("");
    const [idDDActive, setIdDDActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");



    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="checkout-form">
                <div className="billing-info__wrapper">
                    <h4>Платёжные данные</h4>

                    <div className="row">
                        {/* Имя */}
                        <div className="col-md-6">
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout_first_name"
                                    placeholder="Имя"
                                />
                                <label htmlFor="checkout_first_name">Имя *</label>
                            </div>
                        </div>

                        {/* Фамилия */}
                        <div className="col-md-6">
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout_last_name"
                                    placeholder="Фамилия"
                                />
                                <label htmlFor="checkout_last_name">Фамилия *</label>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="col-md-12">
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout_company_name"
                                    placeholder="Название компании"
                                />
                                <label htmlFor="checkout_company_name">
                                    Компания (необязательно)
                                </label>
                            </div>
                        </div>

                        {/* Country / Region */}
                        <div className="col-md-12">
                            <div className="search-field my-3">
                                <div
                                    className={`form-label-fixed hover-container ${
                                        idDDActive ? "js-content_visible" : ""
                                    }`}
                                >
                                    <label htmlFor="search-dropdown" className="form-label">
                                        Страна / Регион *
                                    </label>

                                    <div className="js-hover__open">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg search-field__actor search-field__arrow-down"
                                            id="search-dropdown"
                                            value={selectedRegion}
                                            readOnly
                                            placeholder="Выберите страну..."
                                            onClick={() => setIdDDActive((prev) => !prev)}
                                        />
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-md-12">
                            <div className="form-floating mt-3 mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout_address"
                                    placeholder="Адрес"
                                />
                                <label htmlFor="checkout_address">Адрес *</label>
                            </div>

                            <div className="form-floating mt-3 mb-3">
                                <input type="text" className="form-control" id="checkout_address_2" />
                                <label htmlFor="checkout_address_2">Квартира, блок (необязательно)</label>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-12">
                            <div className="form-floating my-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="checkout_email"
                                    placeholder="Почта"
                                />
                                <label htmlFor="checkout_email">Электронная почта *</label>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="col-md-12">
                            <div className="form-floating my-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="checkout_phone"
                                    placeholder="Телефон"
                                />
                                <label htmlFor="checkout_phone">Телефон *</label>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="col-md-12">
                            <div className="mt-3">
                <textarea
                    className="form-control form-control_gray"
                    placeholder="Комментарий к заказу (необязательно)"
                    rows="5"
                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NO PAYMENT, NO TOTALS — удалено */}
            </div>
        </form>
    );
}
