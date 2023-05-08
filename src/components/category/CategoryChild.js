import React from 'react'
import '../../App.css'
const CategoryChild = (props) => {
  return (
    <div className='mb-4 d-flex flex-row justify-content-around p-3 curvededge' style={{backgroundColor:props.backcolor}} >
      <div className='d-flex flex-column justify-content-center bg-light icon-padding'>
      {props.icon}
      </div>
      <div>
        <h1 className='category-headding'>{props.headding}</h1>
        <li type="none"><i class="fa-solid fa-film"></i> {props.number} classes</li>
      </div>
    </div>
  )
}

export default CategoryChild
