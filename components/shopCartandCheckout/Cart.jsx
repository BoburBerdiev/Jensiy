"use client";

import { useContextElement } from "@/context/Context";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Cart() {
    const { cartProducts, setCartProducts } = useContextElement();

    const setQuantity = (id, quantity) => {
        if (quantity >= 1) {
            const item = cartProducts.filter((elm) => elm.id == id)[0];
            const items = [...cartProducts];
            const itemIndex = items.indexOf(item);
            item.quantity = quantity;
            items[itemIndex] = item;
            setCartProducts(items);
        }
    };

    const removeItem = (id) => {
        setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
    };

    return (
        <div className="shopping-cart" style={{ minHeight: "calc(100vh - 300px)" }}>
            <div className="cart-table__wrapper">
                {cartProducts.length ? (
                    <>
                        <table className="cart-table">
                            <thead>
                            <tr>
                                <th>Товар</th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                            {cartProducts.map((elm, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="shopping-cart__product-item">
                                            <Image
                                                loading="lazy"
                                                src={elm.imgSrc}
                                                width="120"
                                                height="120"
                                                alt="image"
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className="shopping-cart__product-item__detail">
                                            <h4>{elm.title}</h4>
                                            <ul className="shopping-cart__product-item__options">
                                                <li>Цвет: Yellow</li>
                                                <li>Размер: L</li>
                                            </ul>
                                        </div>
                                    </td>

                                    <td>
                                        <a onClick={() => removeItem(elm.id)} className="remove-cart">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="#767676"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
                                                <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="cart-table-footer">
                            <button className="btn btn-light">ОБНОВИТЬ КОРЗИНУ</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="fs-20">Корзина пуста</div>

                        <button className="btn mt-3 btn-light">
                            <Link href={'/shop'}>Перейти к товарам</Link>
                        </button>
                    </>
                )}
            </div>

        </div>
    );
}
