import React, { Fragment, useState } from "react";

const Login = () => {
  const [alertStatue, setAlertStatue] = useState("hidden");

  const [beEmail, setBeEmail] = useState("");
  const [bePassword, setBePassword] = useState("");

  const onSubmitLogin = e => {
    e.preventDefault();
    if (beEmail === "" || bePassword === "") {
      // console.log("Email or password is incorrect. ");
      setAlertStatue("visible");

      //   set alert to invisible
      setTimeout(() => {
        setAlertStatue("hidden");
      }, 3000);
    }
  };

  return (
    <Fragment>
      <div className="login-page card p-4" style={loginStyle}>
        <form action="!#" onSubmit={onSubmitLogin}>
          {/* Alert block */}

          <div
            className=" btn red lighten-1 white-text mb-2"
            style={{
              visibility: alertStatue,
              display: "block"
            }}
          >
            {alertStatue === "visible" ? "Email or password is incorrect." : ""}
          </div>

          <div className="row">
            <div className="input-field col s12 mb-4">
              <input
                placeholder="Someone@example.com"
                id="email"
                type="email"
                className="validate"
                autoComplete="off"
                name="email"
                onChange={e => setBeEmail(e.target.value)}
              />
              <label htmlFor="email" className="active">
                Email
              </label>
            </div>

            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                placeholder=""
                onChange={e => setBePassword(e.target.value)}
              />
              <label htmlFor="password" className="active">
                Password
              </label>
            </div>

            <div className="input-field col s12">
              <a
                href="!#"
                className="waves-effect waves-light btn"
                onClick={onSubmitLogin}
                style={{ display: "block" }}
              >
                Submit
              </a>
            </div>
          </div>
        </form>

        {/* Forgot password */}
        <div>
          Forgot password ? <a href="!#">Click Here</a>
        </div>
      </div>
    </Fragment>
  );
};

const loginStyle = {
  width: "50%",
  textAlign: "center",
  margin: "0 auto"
};

export default Login;
