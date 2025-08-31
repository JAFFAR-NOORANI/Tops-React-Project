import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { displayProduct } from "../products/productSlice";


const Home = () => {

const products = useSelector((state) => state.product.data)
console.log(products);

const dispatch = useDispatch()

useEffect( () => {
  dispatch(displayProduct())
})


  return (
    <>
      <main className="main">
        {/* <!--=============== HOME ===============--> */}
        <section className="home section--lg">
          <div className="home__container container grid">
            <div className="home__content">
              <span className="home__subtitle">Hot Promotions</span>
              <h1 className="home__title">
                Fashion Trending <span>Great Collection</span>
              </h1>
              <p className="home__description">
                Save more with coupons & up tp 20% off
              </p>
              <a href="shop.html" className="btn">
                Shop Now
              </a>
            </div>
            <img
              src="./src/assets/img/home-img.png"
              className="home__img"
              alt="hats"
            />
          </div>
        </section>

        {/* <!--=============== CATEGORIES ===============--> */}
        {/* <section className="categories container section">
          <h3 className="section__title">
            <span>Popular</span> Categories
          </h3>
          <div className="categories__container swiper">
            <div className="swiper-wrapper">
              <a href="shop.html" className="category__item swiper-slide">
                <img
                  src="./src/assets/img/category-1.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">T-Shirt</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                  src="./src/assets/img/category-2.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Bags</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-3.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Sandal</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-4.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Scarf Cap</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-5.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Shoes</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-6.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Pillowcase</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-7.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Jumpsuit</h3>
              </a>
              <a href="shop.html" className="category__item swiper-slide">
                <img
                 src="./src/assets/img/category-8.jpg"
                  alt=""
                  className="category__img"
                />
                <h3 className="category__title">Hats</h3>
              </a>
            </div>

            <div className="swiper-button-prev">
              <i className="fi fi-rs-angle-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fi fi-rs-angle-right"></i>
            </div>
          </div>
        </section> */}

        {/* <!--=============== PRODUCTS ===============--> */}
        <section className="products container section">
          <div className="tab__btns">
            <span className="tab__btn active-tab" data-target="#featured">
              Featured
            </span>
            <span className="tab__btn" data-target="#popular">
              Popular
            </span>
            <span className="tab__btn" data-target="#new-added">
              New Added
            </span>
          </div>

          <div className="tab__items">
            <div className="tab__item active-tab" content id="featured">
              <div className="products__container grid">
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-1-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src={"./src/assets/img/product-1-2.jpg"}
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-pink">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-2-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-2-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-3-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-3-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-orange">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-4-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-4-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-5-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-5-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-30%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-6-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-6-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-7-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-7-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-8-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-8-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab__item" content id="popular">
              <div className="products__container grid">
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-9-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-9-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-pink">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-2-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-2-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-10-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-10-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-orange">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-4-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-4-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-5-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-5-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-30%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-11-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-11-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-7-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-7-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-8-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-8-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab__item" content id="new-added">
              <div className="products__container grid">
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-1-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-1-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-pink">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-12-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-12-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-13-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-13-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-orange">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-4-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-4-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">Hot</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-10-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-10-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-30%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-6-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-6-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-blue">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-9-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-9-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                    <div className="product__badge light-green">-22%</div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
                <div className="product__item">
                  <div className="product__banner">
                    <a href="details.html" className="product__images">
                      <img
                       src="./src/assets/img/product-8-1.jpg"
                        alt=""
                        className="product__img default"
                      />
                      <img
                       src="./src/assets/img/product-8-2.jpg"
                        alt=""
                        className="product__img hover"
                      />
                    </a>
                    <div className="product__actions">
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Quick View"
                      >
                        <i className="fi fi-rs-eye"></i>
                      </a>
                      <a
                        href="#"
                        className="action__btn"
                        aria-label="Add to Wishlist"
                      >
                        <i className="fi fi-rs-heart"></i>
                      </a>
                      <a href="#" className="action__btn" aria-label="Compare">
                        <i className="fi fi-rs-shuffle"></i>
                      </a>
                    </div>
                  </div>
                  <div className="product__content">
                    <span className="product__category">Clothing</span>
                    <a href="details.html">
                      <h3 className="product__title">
                        Colorful Pattern Shirts
                      </h3>
                    </a>
                    <div className="product__rating">
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="product__price flex">
                      <span className="new__price">$238.85</span>
                      <span className="old__price">$245.8</span>
                    </div>
                    <a
                      href="#"
                      className="action__btn cart__btn"
                      aria-label="Add To Cart"
                    >
                      <i className="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--=============== DEALS ===============--> */}
        <section className="deals section">
          <div className="deals__container container grid">
            <div className="deals__item">
              <div className="deals__group">
                <h3 className="deals__brand">Deals of the Day</h3>
                <span className="deals__category">Limited quantities</span>
              </div>
              <h4 className="deals__title">
                Summer Collection New Modern Design
              </h4>
              <div className="deals__price flex">
                <span className="new__price">$139.00</span>
                <span className="old__price">$160.99</span>
              </div>
              <div className="deals__group">
                <p className="deals__countdown-text">
                  Hurry Up! Offer Ends In:
                </p>
                <div className="countdown">
                  <div className="countdown__amount">
                    <p className="countdown__period">02</p>
                    <span className="unit">Days</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">22</p>
                    <span className="unit">Hours</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">57</p>
                    <span className="unit">Mins</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">28</p>
                    <span className="unit">Sec</span>
                  </div>
                </div>
              </div>
              <div className="deals__btn">
                <a href="details.html" className="btn btn--md">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="deals__item">
              <div className="deals__group">
                <h3 className="deals__brand">Women Clothing</h3>
                <span className="deals__category">Shirts & Bag</span>
              </div>
              <h4 className="deals__title">Try Something new on vacation</h4>
              <div className="deals__price flex">
                <span className="new__price">$178.00</span>
                <span className="old__price">$256.99</span>
              </div>
              <div className="deals__group">
                <p className="deals__countdown-text">
                  Hurry Up! Offer Ends In:
                </p>
                <div className="countdown">
                  <div className="countdown__amount">
                    <p className="countdown__period">02</p>
                    <span className="unit">Days</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">22</p>
                    <span className="unit">Hours</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">57</p>
                    <span className="unit">Mins</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">28</p>
                    <span className="unit">Sec</span>
                  </div>
                </div>
              </div>
              <div className="deals__btn">
                <a href="details.html" className="btn btn--md">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!--=============== NEW ARRIVALS ===============--> */}
        <section className="new__arrivals container section">
          <h3 className="section__title">
            <span>New</span> Arrivals
          </h3>
          <div className="new__container swiper">
            <div className="swiper-wrapper">
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-1-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-1-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-pink">Hot</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-2-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-2-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-green">Hot</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-3-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-3-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-orange">Hot</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-4-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-4-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-blue">Hot</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-5-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-5-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-blue">-30%</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-6-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-6-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-blue">-22%</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
              <div className="product__item swiper-slide">
                <div className="product__banner">
                  <a href="details.html" className="product__images">
                    <img
                     src="./src/assets/img/product-7-1.jpg"
                      alt=""
                      className="product__img default"
                    />
                    <img
                     src="./src/assets/img/product-7-2.jpg"
                      alt=""
                      className="product__img hover"
                    />
                  </a>
                  <div className="product__actions">
                    <a href="#" className="action__btn" aria-label="Quick View">
                      <i className="fi fi-rs-eye"></i>
                    </a>
                    <a
                      href="#"
                      className="action__btn"
                      aria-label="Add to Wishlist"
                    >
                      <i className="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" className="action__btn" aria-label="Compare">
                      <i className="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product__badge light-green">-22%</div>
                </div>
                <div className="product__content">
                  <span className="product__category">Clothing</span>
                  <a href="details.html">
                    <h3 className="product__title">Colorful Pattern Shirts</h3>
                  </a>
                  <div className="product__rating">
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                    <i className="fi fi-rs-star"></i>
                  </div>
                  <div className="product__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                  <a
                    href="#"
                    className="action__btn cart__btn"
                    aria-label="Add To Cart"
                  >
                    <i className="fi fi-rs-shopping-bag-add"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev">
              <i className="fi fi-rs-angle-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="fi fi-rs-angle-right"></i>
            </div>
          </div>
        </section>

        {/* <!--=============== SHOWCASE ===============--> */}
        <section className="showcase section">
          <div className="showcase__container container grid">
            <div className="showcase__wrapper">
              <h3 className="section__title">Hot Releases</h3>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-1.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Floral Print Casual Cotton Dress
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-2.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Ruffled Solid Long Sleeve Blouse
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-3.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Multi-Color Print V-neck T-shirt
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase__wrapper">
              <h3 className="section__title">Deals & Outlet</h3>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-4.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Fish Print Patched T-shirt
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-5.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Fintage Floral Print Dress
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-6.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Multi-Color Stripe Circle T-shirt
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase__wrapper">
              <h3 className="section__title">Top Selling</h3>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-7.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Geometric Printed Long Sleeve Blouse
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-8.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Print Patchwork Maxi Dress
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-9.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Daisy Floral Print Straps Jumpsuit
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase__wrapper">
              <h3 className="section__title">Trendy</h3>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-7.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Floral Print Casual Cotton
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-8.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Ruffled Solid Long Sleeve
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
              <div className="showcase__item">
                <a href="details.html" className="showcase__img-box">
                  <img
                    src="./src/assets/img/showcase-img-9.jpg"
                    alt=""
                    className="showcase__img"
                  />
                </a>
                <div className="showcase__content">
                  <a href="details.html">
                    <h4 className="showcase__title">
                      Multi-Color Print V-neck
                    </h4>
                  </a>
                  <div className="showcase__price flex">
                    <span className="new__price">$238.85</span>
                    <span className="old__price">$245.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--=============== NEWSLETTER ===============--> */}
        <section className="newsletter section home__newsletter">
          <div className="newsletter__container container grid">
            <h3 className="newsletter__title flex">
              <img
                src="./src/assets/img/icon-email.svg"
                alt=""
                className="newsletter__icon"
              />
              Sign in to Newsletter
            </h3>
            <p className="newsletter__description">
              ...and receive $25 coupon for first shopping.
            </p>
            <form action="" className="newsletter__form">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
