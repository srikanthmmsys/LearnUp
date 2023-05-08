import React from 'react'

const FinstructorChild = (props) => {
  return (
    <div className='d-flex flex-column justify-content-center top-no-shadow m-2'>
        <center>
        <div>
            <img src={props.image} className='image-circle-big mb-5' alt='noimg'/>
            <h5>{props.name}</h5>
            <p>{props.work}</p>
        </div>
        <div className='d-flex flex-row justify-content-center'>
        <i className="fa-brands text-primary fa-facebook fa-2x"></i>
        <i className="fa-brands text-danger fa-google-plus fa-2x"></i>
        <i className="fa-solid text-primary fa-2x fa-circle-info"></i>
        </div>
        <div>
            <ul className='d-flex flex-row justify-content-around pt-3 pl-0'>
                <li className=' width d-flex flex-column justify-content-center'><span><i className="fa-regular fa-user"></i>{props.students}k </span><span>Students</span></li>
                <li className='width d-flex flex-column justify-content-center ml-3 '><span><i className="fa-solid fa-book-open"></i>{props.cources}</span><span> Courses</span></li>
            </ul>
        </div>
        </center>
    </div>
  )
}

export default FinstructorChild;
