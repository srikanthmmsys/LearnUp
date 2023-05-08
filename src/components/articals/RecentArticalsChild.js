import React from 'react'
import '../../App.css'
const RecentArticalsChild = (props) => {
  return (
      <div class="d-flex flex-column justify-content-center width bg-white border-circle">
								<div class="d-flex flex-row justify-content-center  p-0">
									<img src={props.image} class="img-fluid border-circle-top" alt=""/>
								</div>
								
								<div class=" p-4">
									<h5>The National Minimum wage is an important part</h5>
									<div class="d-flex flex-row justify-content-between pt-2">
										<div class=""><img src={props.smallimg} class="img-fluid image-circle" alt=""/></div>
										<p className='text-secondary d-flex-flex-column-justify-content-center mr-auto pl-2'>{props.name}</p>
									</div>
								</div>
    </div>
  )
}

export default RecentArticalsChild
