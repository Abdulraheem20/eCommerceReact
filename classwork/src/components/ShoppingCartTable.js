import React, { useState } from "react";
import image1 from "../images/Rectangle 34.png";
import image2 from "../images/Rectangle 35.png";
import image3 from "../images/Rectangle 36.png";
import image4 from "../images/Rectangle 37.png";
import image5 from "../images/Rectangle 38.png";
import '../components/styles/ShoppingCart.css'
import AddMinusBtn from "./AddMinusBtn";
import {MdCancel} from "react-icons/md";

const ShoppingCartTable = () => {
    const [show, setShow] = useState(true);
  const toggle = ()=>{
    return setShow(!show)
  }
    
  return (
    <div style={{margin: '50px'}}>
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
          <tr className={show? 'none': 'remove'}>
            <td className="td1">
              <img src={image1} alt="img" />
              <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
              }} />
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
              <AddMinusBtn/>
            </td>
            <td>‎€219.00</td>
          </tr>
          <tr className={show? 'none': 'remove'}>
            <td className="td1">
              <img src={image2} alt="img" />
              <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
              }} />
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
            <AddMinusBtn/>
            </td>
            <td>‎€219.00</td>
          </tr>
          <tr className={show? 'none': 'remove'}>
            <td className="td1" >
              <img src={image3} alt="img" />
              <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
              }} />
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
            <AddMinusBtn/>
            </td>
            <td>‎€219.00</td>
          </tr>
          <tr className={show? 'none': 'remove'}>
            <td className="td1">
              <img src={image4} alt="img" />
              <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
              }} />
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
            <AddMinusBtn/>
            </td>
            <td>‎€219.00</td>
          </tr>
          <tr className={show? 'none': 'remove'}>
            <td className="td1">
              <img src={image5} alt="img" />
              <MdCancel className="cancel" 
              onClick={()=>{
                toggle()
              }} />
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
            <AddMinusBtn/>
            </td>
            <td>‎€219.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;
