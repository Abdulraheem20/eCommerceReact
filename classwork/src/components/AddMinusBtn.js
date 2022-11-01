import React, {useState} from 'react'
import '../components/styles/AddMinusBtn.css'

const AddMinusBtn = () => {
    const [Quantity, SetQuantity] = useState(0);
  return (
    <div className='addmnsbtncontainer'>
        <button className='plsMnsBtn'
                onClick={(e) => {
                  if (Quantity > 0) {
                      e.preventDefault()
                    SetQuantity(Quantity - 1);
                  }
                }}
              >
                -
              </button> 
              <span style={{}} className="qtyDisplay">
                {Quantity}
              </span>
              <button
              className='plsMnsBtn'
                onClick={(e) => {
                    e.preventDefault()
                  SetQuantity(Quantity + 1)
                  console.log(`clicked`)
                }}
              >
                +
              </button>
    </div>
  )
}

export default AddMinusBtn