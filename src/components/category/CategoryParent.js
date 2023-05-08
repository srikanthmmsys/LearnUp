import React from 'react'
import CategoryChild from './CategoryChild'

const CategoryParent = () => {
   
  return (
    <div className='row p-5  comonBack'>
    <div className='col-md-6 col-lg-4 col-sm-12 '>
      <CategoryChild  backcolor="#ed959d" icon={<i className="fa-solid fa-computer fa-2x"></i>} headding="Development" number="23" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="lightgreen" icon={<i class="fa-solid fa-briefcase fa-2x"></i>} headding="Business" number="58" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="lightblue" icon={<i class="fa-solid fa-arrow-up-right-dots fa-2x"></i>} headding="Accounting" number="74" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="orange" icon={<i class="fa-brands fa-python fa-2x"></i>} headding="It&Software" number="65" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="#a395ed" icon={<i class="fa-solid fa-palette fa-2x"></i>} headding="Arts&Design" number="42" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="lightpink" icon={<i class="fa-solid fa-2x fa-camera-retro"></i>} headding="Photography" number="85" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="#6fb5ed" icon={<i class="fa-solid fa-2x fa-bullhorn"></i>} headding="Marketing" number="23" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="#f28a6b" icon={<i class="fa-solid fa-2x fa-hand-holding-heart"></i>} headding="Health&Fitness" number="42" />
    </div>
    <div className='col-md-6 col-lg-4 col-sm-12'>
      <CategoryChild  backcolor="#5acc63" icon={<i class="fa-solid fa-2x fa-person-dots-from-line"></i>} headding="Lifestyle" number="68" />
    </div>
   
    </div>
  )
}

export default CategoryParent
