import React from 'react'

const HeaddingChild = (props) => {
  return (
    <div className='headding-more pt-5 pb-2'>
        <center>
        <p className='text-secondary'>{props.headding}</p>
        <h3 className='headding-style'><span className='text-danger pr-2'>{props.spanhead}</span>{props.mainHead} </h3>
        </center>
    </div>
  )
}

export default HeaddingChild;
