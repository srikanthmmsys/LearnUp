import React from 'react'
import RecentArticalsChild from './RecentArticalsChild'

const RecentArticalsParent = () => {
  return (
    <div className='row bg-light p-5  comonBack'>
    <div className='col-lg-4 col-md-4 col-sm-12 bg-light mb-5'>
      <RecentArticalsChild image="../../../images/b-1.jpg" smallimg="../../../images/user-1.jpg" name="Robort Wilson" />
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12 bg-light mb-5'>
      <RecentArticalsChild image="../../../images/b-2.jpg" smallimg="../../../images/user-2.jpg" name="Rita Robort" />
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12 bg-light mb-5'>
      <RecentArticalsChild image="../../../images/b-3.jpg" smallimg="../../../images/user-3.jpg" name="Adam Robort" />
    </div>
    </div>
  )
}

export default RecentArticalsParent;