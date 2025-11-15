"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import Nav from "./components/Nav";
import {openCart} from "@/utlis/openCart";
import CartLength from "./components/CartLength";
import Image from "next/image";
import User from "./components/User";
import {currencyOptions, languageOptions2} from "@/data/footer";
import {socialLinks} from "@/data/socials";
import SearchPopup from "./components/SearchPopup";

export default function Header1() {
    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 250) {
                if (currentScrollY > lastScrollY.current) {
                    setScrollDirection("down");
                } else {
                    setScrollDirection("up");
                }
            } else {
                setScrollDirection("down");
            }

            lastScrollY.current = currentScrollY;
        };

        const lastScrollY = {current: window.scrollY};
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            id="header"
            className={`header header-fullwidth header-transparent-bg header_sticky border_bottom ${
                scrollDirection === "up" ? "header_sticky-active" : "position-absolute"
            } `}
        >
            <div className="header-top d-flex bg-black color-white align-items-center">
                <ul className="list-unstyled d-flex flex-1 gap-3 m-0">
                    <li>
                        <a href="tel:+998998070100" className="menu-link menu-link_us-s color-white">
                            +998 (99) 807-01-00
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@vintagedenimuz.com" className="menu-link menu-link_us-s color-white">
                            info@vintagedenimuz.com
                        </a>
                    </li>
                </ul>


                <div className="header-top__right flex-1 d-flex gap-2 justify-content-end align-items-center">
                    <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="footer__social-link d-block color-white"
                                >
                                    <svg
                                        className={link.className}
                                        width={link.width}
                                        height={link.height}
                                        viewBox={link.viewBox}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href={link.icon}/>
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <select
                        className="form-select form-select-sm bg-transparent color-white border-0"
                        name="store-language"
                    >
                        {languageOptions2.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            {/* === HEADER MAIN === */}
            <div className="header-desk header-desk_type_2 d-flex align-items-center justify-content-between px-4 py-2">
                {/* === LEFT: NAVIGATION === */}
                <nav className="navigation d-flex align-items-center">


                    <ul className="navigation__list list-unstyled d-flex mb-0 ms-3">
                        <Nav/>
                    </ul>
                </nav>

                {/* === CENTER: LOGO === */}
                <div className="logo text-center position-relative">
                    <Link
                        href="/"
                        className=" w-full h-full "
                    >
                        <Image
                            width={90}
                            height={90}
                            src="/assets/images/logo-png.png"
                            alt="Vintage Denim"
                            className="logo__image d-block"
                        />
                    </Link>
                </div>

                {/* === RIGHT: TOOLS (search, user, wishlist, cart) === */}
                <div className="header-tools d-flex align-items-center justify-content-end gap-3">
                    <SearchPopup />

                    {/* Cart */}
                    <a
                        onClick={() => openCart()}
                        className="header-tools__item header-tools__cart js-open-aside position-relative"
                    >
                        <svg
                            className="d-block"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#icon_cart"/>
                        </svg>
                        <span className="cart-amount d-block position-absolute js-cart-items-count">
              <CartLength/>
            </span>
                    </a>

                    <a
                        className="navigation__item d-flex align-items-center"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#siteMap"
                    >
                        <svg
                            width="30"
                            height="11"
                            viewBox="0 0 30 11"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="30" height="2"/>
                            <rect y="9" width="25" height="2"/>
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}
