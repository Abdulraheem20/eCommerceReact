import React from 'react'
import { CiStar } from "react-icons/ci";

const Shop = () => {
  return (
    <div className='colContainer'>
        <div className="col1">
            <div className="categorie">
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Prestashop</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Magento</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Bigcommerce</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>osCommerce</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>3dcart</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Bags</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Accessories</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Jewellery</label>
                <input type="checkbox" className='checkbox' />
                <label htmlFor="checkbox" className='checkboxLabel'>Watches</label>
            </div>
            <div className="ratings">
            <input type="checkbox" className='rating' />
                <label htmlFor="checkbox" className='ratingLabel'><CiStar/> <CiStar/> <CiStar/> <CiStar/> <CiStar/></label>
            </div>
        </div>
        <div className="col2">
            
        </div>
    </div>
  )
}

export default Shop