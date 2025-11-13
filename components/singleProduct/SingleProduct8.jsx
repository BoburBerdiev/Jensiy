"use client";
import React, { useState } from "react";
import Slider4 from "./sliders/Slider4";
import BreadCumb from "./BreadCumb";
import Star from "../common/Star";
import Size from "./Size";
import Colors from "./Colors";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import Link from "next/link";
import ShareComponent from "../common/ShareComponent";
import { useContextElement } from "@/context/Context";
export default function SingleProduct8({ product }) {
  const { cartProducts, setCartProducts } = useContextElement();
  const [quantity, setQuantity] = useState(1);

  const isIncludeCard = () => {
    const item = cartProducts.filter((elm) => elm.id == product.id)[0];
    return item;
  };
  const setQuantityCartItem = (id, quantity) => {
    if (isIncludeCard()) {
      if (quantity >= 1) {
        const item = cartProducts.filter((elm) => elm.id == id)[0];
        const items = [...cartProducts];
        const itemIndex = items.indexOf(item);
        item.quantity = quantity;
        items[itemIndex] = item;
        setCartProducts(items);
      }
    } else {
      setQuantity(quantity - 1 ? quantity : 1);
    }
  };
  const addToCart = () => {
    if (!isIncludeCard()) {
      const item = product;
      item.quantity = quantity;
      setCartProducts((pre) => [...pre, item]);
    }
  };
  return (
    <section className="product-single container">
      <div className="row">
        <div className="col-lg-7">
          <Slider4 />
        </div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-between mb-4 pb-md-2">
            <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
              <BreadCumb />
            </div>
            {/* <!-- /.breadcrumb --> */}


            {/* <!-- /.shop-acs --> */}
          </div>
          <h1 className="product-single__name">{product.title}</h1>

          <div className="product-single__short-desc">
            <p>
              Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
              elementum gravida nec dui. Aenean aliquam varius ipsum, non
              ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
              aliquet magna posuere eget.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="product-single__swatches">
              <div className="product-swatch text-swatches">
                <label>Sizes</label>
                <div className="swatch-list">
                  <Size />
                </div>
                {/*<a*/}
                {/*  href="#"*/}
                {/*  className="sizeguide-link"*/}
                {/*  data-bs-toggle="modal"*/}
                {/*  data-bs-target="#sizeGuide"*/}
                {/*>*/}
                {/*  Size Guide*/}
                {/*</a>*/}
              </div>
              <div className="product-swatch color-swatches">
                <label>Color</label>
                <div className="swatch-list">
                  <Colors />
                </div>
              </div>
            </div>
            <div className="product-single__addtocart">

              {/* <!-- .qty-control --> */}
              <button
                type="submit"
                className="btn btn-primary btn-addtocart js-open-aside w-100"
                onClick={() => addToCart()}
              >
                {isIncludeCard() ? "Already Added" : "Add to Cart"}
              </button>
            </div>
          </form>

          <div className="product-single__meta-info">
              <AdditionalInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
