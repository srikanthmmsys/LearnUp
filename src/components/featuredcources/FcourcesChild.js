import React from "react";
import '../../App.css'
const FcourcesChild = (props) => {
  return (
    <>
          <div className="row p-3  fcource-background-child">
            <img
              alt="noimg"
              src={props.mainImage}
              className="fcource-img col-sm-12 col-md-6 col-lg-3 "
            />
            <div className="d-flex flex-column jusctfy-content-center p-3 col-sm-12 col-md-5 col-lg-9 ">
              <h1 style={{ fontSize: "20px" }}>
                {props.MainHeadding}
              </h1>
              <div>
                <i className="fa fa-star text-warning filled"></i>
                <i className="fa fa-star text-warning filled"></i>
                <i className="fa fa-star text-warning filled"></i>
                <i className="fa fa-star text-warning filled"></i>
                <i className="fa fa-star filled"></i>
                <strong>
                  <span className="text-success" style={{ fontWeight: "Bold" }}>
                    {props.rating}
                  </span>
                </strong>
                <span> ({props.reviews} Reviews)</span>
              </div>
              <div>
                <strong>
                  <span
                    className="pr-2 text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    ${props.price}{" "}
                  </span>
                </strong>
                <span className="text-secondary">
                  <del>{props.deleted}</del>
                </span>
              </div>
              <div className="d-flex flex-row justify-content-between">
                 <div className="d-flex flex-row mt-3">
                  <div className="d-flex flex-row justify-content-between">
                    <img
                      src={props.CircleImage}
                      className="image-circle d-flex flex-column justify-content-center mt-a"
                      alt="noimg"
                    />
                    <div
                      className="d-flex flex column justify-content-center pl-2 mt-au"
                      style={{ fontWeight: "Bold" }}
                    >
                      {props.name}
                    </div>
                  </div>
                </div>
                  <ul style={{"listStyleType":"none"}} className="text-success  play-next">
                   <li><div className="foot_lecture "><i className="fa-solid fa-forward-step text-success mr-2"></i>{props.lectures} lectures</div></li>
                 </ul>
              </div>
            </div>
        </div>

    </>
  );
};

export default FcourcesChild;
