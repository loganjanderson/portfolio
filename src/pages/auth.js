import Login from "../compontents/login.js";

// import loginImg from "../../../static/assets/images/auth/login.png";

const Auth = (props) => {
  const handleSuccessfulAuth = () => {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  };

  const handleUnsuccessfulAuth = () => {
    this.props.handleUnsuccessfulLogin();
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="left-column"
        style={
          {
            // backgroundImage: `url(${loginImg})`,
          }
        }
      />

      <div className="right-column">
        <Login
          handleSuccessfulAuth={handleSuccessfulAuth}
          handleUnsuccessfulAuth={handleUnsuccessfulAuth}
        />
      </div>
    </div>
  );
};

export default Auth;
