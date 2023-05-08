import React from 'react'
import FcourcesChild from './FcourcesChild';
import '../../App.css' 
const FcourcesParent = () => {
  return (
    <div className='row bg-light comonBack'>
      <div className='col-lg-6 fcourse-padding pr-lg-4'>
      <FcourcesChild mainImage="../../../images/1.jpg" MainHeadding="Learn Photoshop Cource CS6" rating="4.7" reviews="2,420" price="520" deleted="720" CircleImage="../../../images/user-1.jpg" name="Robort Wilson" lectures="54"  />
      </div>
      <div className='col-lg-6 fcourse-padding pl-lg-4'>
      <FcourcesChild mainImage="../../../images/2.jpg" MainHeadding="Full Webdesigning Course" rating="4.8" reviews="2,300" price="220" deleted="499" CircleImage="../../../images/user-2.jpg" name="Rita Robort" lectures="14"  />
      </div>
      <div className='col-lg-6 fcourse-padding pr-lg-4'>
      <FcourcesChild mainImage="../../../images/3.jpg" MainHeadding="Adobe Dreamware Flash coad" rating="4.2" reviews="810" price="400" deleted="500" CircleImage="../../../images/user-3.jpg" name="Adam Robort" lectures="25"  />
      </div>
      <div className='col-lg-6 fcourse-padding pl-lg-4'>
      <FcourcesChild mainImage="../../../images/4.jpg" MainHeadding="Learn Full photoshop Cource CS6" rating="4.3" reviews="3,122" price="599" deleted="799" CircleImage="../../../images/user-4.jpg" name="Silpha Singh" lectures="54"  />
      </div>
      <div className='col-lg-6 fcourse-padding pr-lg-4'>
      <FcourcesChild mainImage="../../../images/5.jpg" MainHeadding="Business Analysis full Course" rating="4.5" reviews="3,543" price="399" deleted="699" CircleImage="../../../images/user-5.jpg" name="Adam wilsion" lectures="70"  />
      </div>
      <div className='col-lg-6 fcourse-padding pl-lg-4 pb-5'>
      <FcourcesChild mainImage="../../../images/6.jpg" MainHeadding="Learn to create WP Theem" rating="4.7" reviews="3,712" price="799" deleted="1200" CircleImage="../../../images/user-6.jpg" name="Priya Singh" lectures="26"  />
    </div>
  </div>
  )
}

export default FcourcesParent;
