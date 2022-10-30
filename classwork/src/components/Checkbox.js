import React from 'react'

const Checkbox = (props) => {
  return (
    <div>
        <div className={props.className} onClick={props.onClick} style={{display: 'flex', gap: '15px'}}>
            <input type="checkbox" className={props.className} onClick={props.onClick} />
            <label htmlFor="checkbox" className={props.className} onClick={props.onClick} style={{color: '#7E81A2'}}>
            {props.name}
            </label>
          </div>
    </div>
  )
}

export default Checkbox