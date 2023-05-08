import React from 'react'
import '../../App.css'
const QuickinfoChild = (props) => {
  return (
          <div className=' quick-info-background'>
                <div className='p-2 d-flex flex-row justify-content-center flex-warp'>
                  <div className='p-2 pr-4 d-flex flex-column justify-content-center'>{props.icon}
                  </div>
                  <div>
                    <h1 className='quick-info-headding text-light'>{props.headding}</h1>
                    <p className='text-light'>{props.info}</p>
                  </div>
                </div>
          </div>
  )
}

export default QuickinfoChild
