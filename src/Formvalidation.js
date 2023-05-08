import React, { useState } from "react";
import "./App.css";
const Formvalidation = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [textarea, setTextarea] = useState("");
  var msg = "";
  let status_boolean = true;

  const changeHandlerName = (e) => {
    setName(e.target.value);
  };
  const changeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };
  const changeHandlerMail = (e) => {
    setEmail(e.target.value);
  };
  const changeHandlerMobile = (e) => {
    setMobile(e.target.value);
  };
  const changeHandlerArea = (e) => {
    setTextarea(e.target.value);
  };

  const setError = (element, message) => {
    var inputerror = element.parentElement;
    inputerror.querySelector(".error").textContent = message;
    msg += `<div>${message}</div>`;
    document.querySelector(".error-div").innerHTML = msg;
    element.classList.add("invalid");
    element.classList.remove("success");
  };
  const setSuccess = (element) => {
    var inputerror = element.parentElement;
    inputerror.querySelector(".error").textContent = "";
    element.classList.remove("invalid");
    element.classList.add("success");
  };

  const validateInputs = () => {
    var nameCheck = /^([a-zA-Z]{3,16})$/;
    var mobCheck = /^([0-9]{10,12})$/;
    var emailCheck =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var file = document.querySelector("#File");
    var fileName= file.value.split('.').pop().toLowerCase();
    var select = document.querySelector("#select");
    var area = document.querySelector("#textarea");
    //name
    if (name === "") {
      setError(document.querySelector("#name"), "Enter name");
    } else if (name.match(nameCheck) === null) {
      setError(document.querySelector("#name"), "Name is invalid");
    } else {
      setSuccess(document.querySelector("#name"));
    }
    //password
    if (password === "") {
      setError(document.querySelector("#password"), "Enter Password");
    } else if (password.length < 8) {
      setError(
        document.querySelector("#password"),
        "Please Enter valid Password"
      );
    } else {
      setSuccess(document.querySelector("#password"));
    }
    //email
    if (email === "") {
      setError(document.querySelector("#mail"), "Enter Email");
    } else if (email.match(emailCheck) === null) {
      setError(document.querySelector("#mail"), "Please Enter valid Email");
    } else {
      setSuccess(document.querySelector("#mail"));
    }
    //mobile
    if (mobile === "") {
      setError(document.querySelector("#mobileno"), "Enter Mobile number");
    } else if (mobile.match(mobCheck) === null) {
      setError(
        document.querySelector("#mobileno"),
        "Please Enter valid Mobile number"
      );
    } else {
      setSuccess(document.querySelector("#mobileno"));
    }
    //gender
    if (document.querySelector("input[name='gender']:checked") === null) {
      setError(document.querySelector("#checkbox"), "selection is required");
    } else {
      setSuccess(document.querySelector("#checkbox"));
    }
    //vaccine
    if (
      document.querySelector("input[name='inlineRadioOptions']:checked") ===
      null
    ) {
      setError(document.querySelector("#check"), "Selection is required");
    } else {
      setSuccess(document.querySelector("#check"));
    }
    //image
   
    if (file.value === "") {
      setError(file, "file is required");
    } 
    else if (
      fileName==="jpg"|
      fileName==="png" |
      fileName==="JPG" |
      fileName==="PNG"
    ) {
      setSuccess(file);
    } 
    else {
      setError(file, "*file is Invalid use .jpg or .png only");
    }
 
    //select
    

    if (select.value === "null") {
      setError(select, "selection is required");
    } else {
      setSuccess(select);
    }

    //textarea
    

    if (area.value === "") {
      setError(area, "Some text is required");
    } else {
      setSuccess(area);
    }

    if (msg === "") {
      status_boolean = true;
    } else {
      status_boolean = false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    msg = "";
    document.querySelector(".error-div").textContent = "";
    validateInputs();
    if (status_boolean) {
      setTimeout(() => {
        alert("form submitted successfully");
      }, 500);
    } else {
      var error_headding = document.createElement("h3");
      error_headding.textContent = "*Please check Errors amd fill all details";
      document.querySelector(".error-div").prepend(error_headding);
    }
  };

  return (
    <div className="p-5 back">
      {status_boolean && (
        <div className="error-div bg-danger text-light pl-3 mb-5"></div>
      )}
      <div className="bg-light pl-3">
        <form onSubmit={submitHandler}>
          <h3 className="text-center text-danger pb-3 pt-4">Form</h3>
          {/* name,password,email,mobile */}

          <div className="form-group row">
            <label htmlFor="name" className="col-md-2 col-12">
              Name
            </label>

            <input
              placeholder="Name"
              type="text"
              className="form-control col-12 col-md-9"
              id="name"
              onChange={changeHandlerName}
              value={name}
            />
            <div className="error text-danger offset-2"></div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-md-2 col-12">
              Password
            </label>

            <input
              placeholder="Password"
              type="password"
              className="form-control col-12 col-md-9"
              id="password"
              value={password}
              onChange={changeHandlerPassword}
            />
            <div className="error text-danger offset-2"></div>
          </div>
          <div className="form-group row">
            <label htmlFor="mail" className="col-md-2 col-12">
              Email address
            </label>
            <input
              type="text"
              className="form-control col-12 col-md-9"
              id="mail"
              placeholder="name@example.com"
              value={email}
              onChange={changeHandlerMail}
            />
            <div className="error text-danger offset-2"></div>
          </div>

          <div className="form-group row">
            <label htmlFor="mobileno" className="col-md-2 col-12">
              Mobile No
            </label>
            <input
              type="number"
              placeholder="Enter mobile number "
              className="form-control col-12 col-md-9"
              id="mobileno"
              value={mobile}
              onChange={changeHandlerMobile}
            />
            <div className="error text-danger offset-2"></div>
          </div>

          {/* gender */}

          <div className="row">
            <label className="col-md-2 col-12 " id="checkbox">
              Gender
            </label>
            <div className="form-check form-check-inline ">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="exampleCheck1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="exampleCheck2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="exampleCheck3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Other{" "}
              </label>
            </div>
            <div className="error col-12 offset-2 p-0 text-danger"></div>
          </div>
          {/* Vaccine */}

          <div className="row">
            <label className="col-md-2 col-12 " id="check">
              Vaccine
            </label>
            <div className="form-check form-check-inline ">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id="Check1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="check1">
                Dose1
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id="Check2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="check2">
                Dose2
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id="Check3"
                value="option3"
              />
              <label className="form-check-label" htmlFor="check3">
                Booster{" "}
              </label>
            </div>
            <div className="error text-danger offset-2 p-0 col-12"></div>
          </div>

          {/* image */}
          <div className="form-group row">
            <label
              className="form-control-file col-md-2 col-12"
              htmlFor="check3"
            >
              Upload image{" "}
            </label>
            <input className=" col-12 col-md-3 p-0" type="file" id="File" />
            <div className="error col-12 offset-2 p-0 text-danger text-left"></div>
          </div>

          {/* select */}
          <div className="form-group row">
            <label
              htmlFor="exampleFormControlSelect1"
              className=" col-md-2 col-12"
            >
              Qualification
            </label>

            <select className="form-control col-12 col-md-9" id="select">
              <option value="null">-select-</option>
              <option value="inter">inter</option>
              <option value="diploma">diploma</option>
              <option value="b.tech">B.tech</option>
              <option value="degree">degree</option>
            </select>
            <div className="error text-danger offset-2"></div>
          </div>

          {/* textarea */}
          <div className="form-group row">
            <label htmlFor="textarea" className="col-12 col-md-2">
              Textarea
            </label>

            <textarea
              id="textarea"
              rows="5"
              cols="50"
              className="form-control w-100 text-center  col-12 col-md-9"
              value={textarea}
              onChange={changeHandlerArea}
            ></textarea>
            <div className="error text-danger offset-2"></div>
          </div>

          {/* buttons */}
          
            <div className="d-flex flex-row justify-content-between w-75 offset-2 pb-5 pt-5">
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
            </div>
          


        </form>
      </div>
      
    </div>
  );
};

export default Formvalidation;
