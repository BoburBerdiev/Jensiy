"use client";
import {
    aboutPageitems
} from "@/data/menu";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menu) => {
    return menu.split("/")[1] == pathname.split("/")[1];
  };
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (menu) => menu.href.split("/")[1] == pathname.split("/")[1]
    );
  };
  useEffect(() => {
    function setBoxMenuPosition(menu) {
      const scrollBarWidth = 17; // You might need to calculate or define this value
      const limitR = window.innerWidth - menu.offsetWidth - scrollBarWidth;
      const limitL = 0;
      const menuPaddingLeft = parseInt(
        window.getComputedStyle(menu, null).getPropertyValue("padding-left")
      );
      const parentPaddingLeft = parseInt(
        window
          .getComputedStyle(menu.previousElementSibling, null)
          .getPropertyValue("padding-left")
      );
      const centerPos =
        menu.previousElementSibling.offsetLeft -
        menuPaddingLeft +
        parentPaddingLeft;

      let menuPos = centerPos;
      if (centerPos < limitL) {
        menuPos = limitL;
      } else if (centerPos > limitR) {
        menuPos = limitR;
      }

      menu.style.left = `${menuPos}px`;
    }
    document.querySelectorAll(".box-menu").forEach((el) => {
      setBoxMenuPosition(el);
    });
  }, []);
  return (
    <>
        <li className="navigation__item">
            <Link
                href="/"
                className={`navigation__link ${pathname == "/" ? "menu-active" : ""}`}
            >
                Главная
            </Link>
        </li>

        {/*<li className="navigation__item">*/}
        {/*    <Link*/}
        {/*        href="/about"*/}
        {/*        className={`navigation__link ${*/}
        {/*            pathname == "/about" ? "menu-active" : ""*/}
        {/*        }`}*/}
        {/*    >*/}
        {/*        О нас*/}
        {/*    </Link>*/}
        {/*</li>*/}


        <li className="navigation__item">
            <a
                href="#"
                className={`navigation__link ${
                    isActiveParentMenu(aboutPageitems) ? "menu-active" : ""
                }`}
            >
                О нас
            </a>
            <ul className="default-menu list-unstyled">
                {aboutPageitems.map((elm, i) => (
                    <li key={i} className="sub-menu__item">
                        <Link
                            href={elm.href}
                            className={`menu-link menu-link_us-s ${
                                isMenuActive(elm.href) ? "menu-active" : ""
                            }`}
                        >
                            {elm.title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* <!-- /.box-menu --> */}
        </li>
        <li className="navigation__item">
            <Link
                href="/shop"
                className={`navigation__link ${
                    pathname == "/shop" ? "menu-active" : ""
                }`}
            >
                Каталог
            </Link>
        </li>

        <li className="navigation__item">
            <Link
                href="/blog"
                className={`navigation__link ${
                    pathname == "/blog" ? "menu-active" : ""
                }`}
            >
                Новости
            </Link>
        </li>

        <li className="navigation__item">
            <Link
                href="/contact"
                className={`navigation__link ${
                    pathname == "/contact" ? "menu-active" : ""
                }`}
            >
                Контакты
            </Link>
        </li>
    </>
  );
}
