import React from "react";
import { useHistory } from "react-router-dom";
import LEFT_ELLIPSE from "../../assets/left_circle.svg";
import RIGHT_ELLIPSE from "../../assets/right_circle.svg";
import LEFT_B_ELLIPSE from "../../assets/left_b_circle.svg";
import RIGHT_B_ELLIPSE from "../../assets/right_b_circle.svg";
import REGISTER_IMAGE from "../../assets/reg_img.svg";
import NAME_ICON from "../../assets/name_icon.svg";
import GENDER_ICON from "../../assets/gender_icon.svg";
import EMAIL_ICON from "../../assets/email_icon.svg";
import PASS_ICON from "../../assets/pass_icon.svg";
import "./registration.css";
import { Button, Form } from "react-bootstrap";

const Registration = () => {
  const history = useHistory();
  const handleRegister = () => {
    history.push("/dashboard");
  };
  return (
    <div>
      <div className="bg-contains">
        <img src={LEFT_ELLIPSE} alt="ellipse" className="ellipse-left" />
        <img src={RIGHT_ELLIPSE} alt="ellipse" className="ellipse-right" />
        <img src={LEFT_B_ELLIPSE} alt="ellipse" className="ellipse-bleft" />
        <img src={RIGHT_B_ELLIPSE} alt="ellipse" className="ellipse-bright" />
      </div>
      <div className="register-content">
        <div className="d-flex justify-content-between align-items-center reg-padding">
          <div className="image-content">
            <img src={REGISTER_IMAGE} alt="register-img" />
          </div>
          <div className="form-content">
            <div className="reg-acc-label">Registration Account</div>
            <p className="acc-head">
              Don't have an account? Create your account, it takes less then a
              minute
            </p>
            <Form>
              <div id="reg_form">
                <div className="position-relative mb-4">
                  <input placeholder="Full Name" />
                  <img src={NAME_ICON} alt="name-img" />
                </div>
                <div className="position-relative mb-4">
                  <input placeholder="Gender" />
                  <img src={GENDER_ICON} alt="gender-img" />
                </div>
                <div className="position-relative mb-4">
                  <input placeholder="Email Address" />
                  <img src={EMAIL_ICON} alt="email-img" />
                </div>
                <div className="position-relative mb-4">
                  <input placeholder="Password" />
                  <img src={PASS_ICON} alt="pass-img" />
                </div>
              </div>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I accept terms and conditions & Privacy Policy"
                  style={{
                    color: "#A5B9D5",
                  }}
                  className="custom-checkbox"
                />
              </Form.Group>
              <Button
                as="input"
                type="button"
                value="Register"
                className="w-100 submit-btn mt-4"
                onClick={handleRegister}
              />{" "}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
