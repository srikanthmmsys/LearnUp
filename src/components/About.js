import React from 'react'
import homeimg from "../img/edu_2.png";
import Container from "react-bootstrap/Container";
import "../App.css";
const About = () => {
  return (
      <div className="bg-white  comonBack fullpad">
      <Container>
        <div className="row">
          <div className="col-md-6 col-12 pt-5">
          <h2 className='headding-style'>Know about <span className="text-danger">e-Learn</span> learning platform</h2>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et voluptatem.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut</p>
        
            <ul className='d-flex flex-row justify-content-around'>
                <li><span className="headding-style text-danger headding-size d-flex flex-column">7m</span>Active Cources</li>
                <li><span className="headding-style text-danger headding-size d-flex flex-column">77k</span>Student Learning</li>
                <li><span className="headding-style text-danger headding-size d-flex flex-column">84+</span>Free Cources</li>
			</ul>
            <button className="btn btn-modern mt-5 bg-lightdanger">Know More<span><i className="fa-solid fa-1x text-danger pl-2 fa-square-arrow-up-right"></i></span></button>
          </div>
          <div className="col-md-6 col-12 pt-3">
            <img src={homeimg} className="home-img" alt="homeimage" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
