import React, { useState } from "react";
import image1 from "../images/Rectangle 34.png";
import image2 from "../images/Rectangle 35.png";
import image3 from "../images/Rectangle 36.png";
import image4 from "../images/Rectangle 37.png";
import image5 from "../images/Rectangle 38.png";
import "../components/styles/ShoppingCart.css";
import AddMinusBtn from "./AddMinusBtn";
import { MdCancel } from "react-icons/md";
import CartTotal from "./CartTotal";
import Navbarr from "./Navbarr";
import Footer2 from "./Footer2";

const ShoppingCartTable = () => {
  const [show, setShow] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const toggle1 = () => {
    setShow((previousState) => {
      return { ...previousState, item1: true };
    });
  };
  const toggle2 = () => {
    setShow((previousState) => {
      return { ...previousState, item2: true };
    });
  };
  const toggle3 = () => {
    setShow((previousState) => {
      return { ...previousState, item3: true };
    });
  };
  const toggle4 = () => {
    setShow((previousState) => {
      return { ...previousState, item4: true };
    });
  };
  const toggle5 = () => {
    setShow((previousState) => {
      return { ...previousState, item5: true };
    });
  };

  return (
    <div className="bg">
      <Navbarr/>
      <div
        style={{
          margin: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={show.item1 ? "  remove" : "none"}>
              <td className="td1">
                <img src={image1} alt="img" className="imag" />
                <MdCancel
                  className="cancel"
                  onClick={() => {
                    toggle1();
                    console.log(show.item1);
                  }}
                />
                <div className="text">
                  <span>
                    <h4>Ut diam consequat</h4>
                    <p>Color:Brown</p>
                    <p>Size:XL</p>
                  </span>
                </div>
              </td>
              <td>€32.00</td>
              <td>
                <AddMinusBtn />
              </td>
              <td>‎€219.00</td>
            </tr>
            <tr className={show.item2 ? "  remove" : "none"}>
              <td className="td1">
                <img src={image2} alt="img" className="imag" />
                <MdCancel
                  className="cancel"
                  onClick={() => {
                    toggle2();
                    console.log(show.item2);
                  }}
                />
                <div className="text">
                  <span>
                    <h4>Ut diam consequat</h4>
                    <p>Color:Brown</p>
                    <p>Size:XL</p>
                  </span>
                </div>
              </td>
              <td>€32.00</td>
              <td>
                <AddMinusBtn />
              </td>
              <td>‎€219.00</td>
            </tr>
            <tr className={show.item3 ? "  remove" : "none"}>
              <td className="td1">
                <img src={image3} alt="img" className="imag" />
                <MdCancel
                  className="cancel"
                  onClick={() => {
                    toggle3();
                    console.log(show.item3);
                  }}
                />
                <div className="text">
                  <span>
                    <h4>Ut diam consequat</h4>
                    <p>Color:Brown</p>
                    <p>Size:XL</p>
                  </span>
                </div>
              </td>
              <td>€32.00</td>
              <td>
                <AddMinusBtn />
              </td>
              <td>‎€219.00</td>
            </tr>
            <tr className={show.item4 ? "  remove" : "none"}>
              <td className="td1">
                <img src={image4} alt="img" className="imag" />
                <MdCancel
                  className="cancel"
                  onClick={() => {
                    toggle4();
                    console.log(show.item4);
                  }}
                />
                <div className="text">
                  <span>
                    <h4>Ut diam consequat</h4>
                    <p>Color:Brown</p>
                    <p>Size:XL</p>
                  </span>
                </div>
              </td>
              <td>€32.00</td>
              <td>
                <AddMinusBtn />
              </td>
              <td>‎€219.00</td>
            </tr>
            <tr className={show.item5 ? "  remove" : "none"}>
              <td className="td1">
                <img src={image5} alt="img" className="imag" />
                <MdCancel
                  className="cancel"
                  onClick={() => {
                    toggle5();
                    console.log(show.item5);
                  }}
                />
                <div className="text">
                  <span>
                    <h4>Ut diam consequat</h4>
                    <p>Color:Brown</p>
                    <p>Size:XL</p>
                  </span>
                </div>
              </td>
              <td>€32.00</td>
              <td>
                <AddMinusBtn />
              </td>
              <td>‎€219.00</td>
            </tr>
          </tbody>
        </table>
        <CartTotal />
      </div>
      <Footer2/>
    </div>
  );
};

export default ShoppingCartTable;
