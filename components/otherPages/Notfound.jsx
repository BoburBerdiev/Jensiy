import Link from "next/link";
import React from "react";

export default function Notfound() {
    return (
        <section className="page-not-found">
            <div className="content container">
                <h2 className="mb-3">ОЙ!</h2>
                <h3 className="mb-3">Страница не найдена</h3>
                <p className="mb-3">
                    К сожалению, мы не смогли найти страницу, которую вы искали.
                    Рекомендуем вернуться на главную страницу.
                </p>
                <Link
                    href={"/"}
                    className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
                >
                    ВЕРНУТЬСЯ НАЗАД
                </Link>
            </div>
        </section>
    );
}
