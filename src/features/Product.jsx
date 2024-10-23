import React from "react";
import classes from "./Shop.module.scss";
import SvgSelector from "../components/SvgSelector";
import Stars from "../components/Stars";
import clsx from "clsx";
import Dots from "../components/Dots";

const Product = ({ cart, mobile, name }) => {
  return (
    <div className={clsx(classes.container, mobile && classes.mobile)}>
      <figure className={clsx(classes.image, mobile && classes.mobile)}>
        {mobile ? (
          <img
            src="https://s3-alpha-sig.figma.com/img/0c04/89b0/c932f954118151f0d80e506d32ba4aaa?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TSDP2UMUSF0QogBSAkT3TUg~MXGfKOMM54ZNi~Mz8Yd5HnF2pnxNwI4091ggU2bZX9j1k42ZDkuC~UsP~Jcc8kNSEMnBbBVo8fU0PboybIA6abO1qM7DIsNgToyK3r4C6N2j0S1qQdO9Eeub57kgJtX~FTz6ypjq3pqD3edqWtRIOMSjtVmrx6OEYMYC2LZ4AdB6VxgjO7I9nxwEqMiWSX3s~2rYgwKzXLr9YV1Wk2KShZKNludmPhNDunEv~wzs1wjPZmHpR37WBjSdvorbct6Nw2P3iSHokcOHum6knHBaCNSPfNsb1RhkxTiBaEr6QSFl7iE5OYrz0QWMtqeV9A__"
            alt="Model"
          />
        ) : (
          <img
            src="https://s3-alpha-sig.figma.com/img/f49b/e7b6/6aee2c465a63ba7efc8e823f2665213e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ee34bxaV5cXbPSKjHNzoaiFzbZCYWVHRxdc9mkdAL61QdwLj-W5SwutyYgmQDUpN7gpYaW7Kq4qvN4YzZ0rr9qdCVTqt0iNgSiqEC7xVfVjfsOTqbQHPF2zu4Xcl1G8ejfBJFSF98qLul6tN9GGpFrUuJnB8GlHpIKAsjEhZloPjlwVdTfdRcGv6mFdUtWNLZH02b5Pls~BTKXzl7wilUtKuL~hFPjJYZ~qEUc~kTEFZMcR3VbAB1pnLz-se0-E23PZZ-QccrCsd80CQh71kdbjFzFESo-sT~aYD9lDdAr5xMBj90FlgXWA6jwU-1e5GJX3MAT8Sspx-mds1V4nIfQ__"
            alt="Model"
          />
        )}
        <button className={classes.favorites}>
          <SvgSelector id="heart" />
        </button>
      </figure>
      {mobile && <Dots number="4" />}
      {mobile ? (
        <div className={classes.grade}>
          <p>3.2</p>
          <SvgSelector id="star" className="star-fill" />
          <p>5 оценок</p>
        </div>
      ) : (
        <Stars />
      )}
      <div className={clsx(classes.description, mobile && classes.mobile)}>
        <h1 className={classes.title}>{name}</h1>
        {mobile ? (
          <p>JRR051BPC25NNNNN3S1V2A</p>
        ) : (
          <p>
            Бренд: <span>Parker</span>
          </p>
        )}
        {mobile ? (
          <p className={classes.brand}>Parker</p>
        ) : (
          <p>
            Артикул: <span>JRR051BPC25NNNNN3S1V2A</span>
          </p>
        )}
      </div>
      <div
        className={clsx(classes["price-container"], mobile && classes.mobile)}
      >
        <div className={classes["price-top"]}>
          <p>Цена за шт</p>
          <div className={classes.home}>
            <SvgSelector id="home" />
            <p>1203 шт</p>
          </div>
        </div>
        <hr />
        <div className={classes["price-bottom"]}>
          <h2>125 000 000 ₽</h2>
          {mobile ? (
            cart ? (
              <button className={clsx(classes.shopping, classes.mobile)}>
                <SvgSelector id="shopping" />
              </button>
            ) : (
              <p>84 440₽</p>
            )
          ) : (
            <>
              <div>10%</div>
              <p>250 000 440₽</p>
            </>
          )}
        </div>
      </div>
      {!mobile && (
        <div className={classes["cart-container"]}>
          <h2>125 000 000 ₽</h2>
          <div className={classes.panel}>
            <SvgSelector id="minus" />
            <p>105</p>
            <SvgSelector id="plus" />
          </div>
          <button className={classes.shopping}>
            <SvgSelector id="shopping" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
