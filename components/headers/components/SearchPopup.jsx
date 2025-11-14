"use client";
import { useEffect, useRef, useState } from "react";

export default function SearchPopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const containerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsPopupOpen(false);
        }
    };

    useEffect(() => {

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`header-tools__item hover-container ${
                isPopupOpen ? "js-content_visible" : ""
            }`}
        >
            <div className="js-hover__open position-relative">
                <a
                    onClick={() => setIsPopupOpen((pre) => !pre)}
                    className="js-search-popup search-field__actor"
                    href="#"
                >
                    <svg
                        className="d-block"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <use href="#icon_search" />
                    </svg>
                    <i className="btn-icon btn-close-lg"></i>
                </a>
            </div>

            <div className="search-popup js-hidden-content">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-field container"
                >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                        Что вы ищете?
                    </p>

                    <div className="position-relative">
                        <input
                            className="search-field__input search-popup__input w-100 fw-medium"
                            type="text"
                            name="search-keyword"
                            placeholder="Поиск товаров"
                        />

                        <button className="btn-icon search-popup__submit" type="submit">
                            <svg
                                className="d-block"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <use href="#icon_search" />
                            </svg>
                        </button>

                        <button
                            className="btn-icon btn-close-lg search-popup__reset"
                            type="reset"
                        ></button>
                    </div>

                    <div className="search-popup__results">
                        <div className="search-result row row-cols-5"></div>
                    </div>
                </form>
            </div>
        </div>
    );
}
