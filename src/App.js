import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
// import './App.css'
import About from './components/About'
import CategoryParent from './components/category/CategoryParent'
import FinstructorSlik from './components/famousinstructor/FinstructorSlik'
import FcourcesParent from './components/featuredcources/FcourcesParent'
import HotandtrendParent from './components/headdingcomponents/HotandtrendParent'
import MeetInstructor from './components/headdingcomponents/MeetInstructor'
import PopularCategoryParent from './components/headdingcomponents/PopularCategoryParent'
import Homesearch from './components/Homesearch'
import LearnupNavbar from './components/LearupNavbar'
import QuickinfoParent from './components/quickinfo/QuickinfoParent'
import OurStoryParent from "./components/headdingcomponents/OurStoryParent";
import RecentArticalsParent from "./components/articals/RecentArticalsParent";
// import React from 'react'
// import './App.css';
import Formvalidation from './Formvalidation';

const App = () => {
  return (
    <>
      <LearnupNavbar/>
        <Homesearch/>
        <QuickinfoParent/>
        <PopularCategoryParent/>
        <CategoryParent/>
        <HotandtrendParent/>
        <FcourcesParent/>
      <About/>
      <MeetInstructor/>
      <FinstructorSlik/>
      <OurStoryParent/>
      <RecentArticalsParent/>
      {/* <Formvalidation/> */}
    </>
  )
}
export default App;
