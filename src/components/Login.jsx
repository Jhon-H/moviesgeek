import React from 'react';

class Login extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
          ...this.state.form,
          [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form) //imprimir todo el estado 
  }

  render() {
    return (
      <div>
        <form className="form-signin">
          <h1 className="h4 mb-3 font-weight-normal">
            Inicio de sesión
          </h1>

          <input
            type="email"
            id="inputEmail"
            className="form-control mt-1"
            placeholder="Email"
            onChange = {this.handleChange}
            name = "username"
            required=""
          />

          <input
            type="Password"
            id="inputPassword"
            className="form-control mt-1"
            placeholder="Contraseña"
            onChange = {this.handleChange}
            name = "password"
            required=""
          />

          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login
          </button>

          <div className="">
            <p>Login with social networks</p>

            <div className="google-btn btn-primary">
              <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                <b> Sign in with google </b>
              </p>
            </div>
          </div>
          <a
            to=""
            className="Link"
          >
            Create new account
          </a>
        </form>
      </div>
    )
  }
}

export default Login;