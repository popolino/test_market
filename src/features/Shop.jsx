import React, { useEffect } from "react";
import classes from "./Shop.module.scss";
import Product from "./Product";
import { useWindowSize } from "react-use";
import clsx from "clsx";

const Shop = () => {
  const { width } = useWindowSize();
  const [mobile, setMobile] = React.useState(false);

  useEffect(() => {
    width < 1024 && setMobile(true);
    width > 1024 && setMobile(false);
  }, [width]);

  const products = [
    { "id": 1, cart: false, name: "Гидравлический моторо - очень ссука большой  текст" },
    { "id": 2, cart: false, name: "Плашка глухая" },
    { "id": 3, cart: true, name: "Гидравлический моторо - очень ссука большой  текст" },
    { "id": 4, cart: false, name: "Гидравлический моторо - очень ссука большой  текст" },
    { "id": 5, cart: false, name: "Плашка глухая" },
    { "id": 6, cart: true, name: "Плашка глухая" },
    { "id": 7, cart: false, name: "Гидравлический моторо - очень ссука большой  текст" },
    { "id": 8, cart: false, name: "Плашка глухая" },
  ];
  return (
    <div className={clsx(classes["shop-container"], mobile && classes.mobile)}>
      <h1>Товары по акции</h1>
      <div className={classes["products-container"]}>
        {products.map((product) => (
          <Product mobile={mobile} cart={product.cart} name={product.name} />
        ))}
      </div>
      <button className={classes["button-show"]}>Показать еще (200)</button>
    </div>
  );
};

export default Shop;
