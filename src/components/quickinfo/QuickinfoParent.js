import React from 'react'
import QuickinfoChild from './QuickinfoChild'

const QuickinfoParent = () => {
  return (
<div className='row pl-3 pr-3 d-flex justify-content-center comonBack marginauto'>
      <div className='col-12 col-md-4 p-0'>
        <QuickinfoChild icon={<i className="fa-solid fa-circle-play fa-2x text-danger"></i>} headding="Online Cources" info="Nor again is there anyone who loves or pursues or desires." />
      </div>
      <div className='col-12 col-md-4 p-0'>
        <QuickinfoChild icon={<i className="fa-solid fa-award fa-2x text-danger"></i>} headding="Export Instruction" info="Nam libero tempore, cum soluta and nobis est eligendi optio"/>
      </div>
      <div className='col-md-4 col-12 p-0'>
        <QuickinfoChild icon={<i className="fa-solid fa-infinity fa-2x text-danger"></i>} headding="Lifetime Access" info="These cases are perfectly simple simple and easy to distinguish"/>
    </div>
</div>
  )
}

export default QuickinfoParent
