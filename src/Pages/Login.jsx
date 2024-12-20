import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
      const {loginUser} = useContext(AuthContext);

      const handleLogin =(e)=>{
            e.preventDefault();
            const form = e.target;
            // const form = new FormData(e.currentTarget);
            const email = form.email.value;
            const password = form.password.value;
            //Login User
            loginUser(email, password)
            .then(result =>{
                  const user = result.user;
                  console.log('login user', user)
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-2xl font-bold text-center p-2 w-1/2 mx-auto border-b-2 border-primary">
        Login Your Account
      </h2>
      <div>
        <form onSubmit={handleLogin} className="card-body md:3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
          <p className="text-center p-4">Don't have an account? <Link className="text-primary" to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
