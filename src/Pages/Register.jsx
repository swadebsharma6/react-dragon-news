import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

      const {createUser} = useContext(AuthContext);

      const handleRegister =(e)=>{
            e.preventDefault();
            // const form = e.target;
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            //Create User
            createUser(email, password)
            .then(result =>{
                  const user = result.user;
                  console.log('create', user)
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }
  return (
    <>
      <Navbar></Navbar>
      <h2 className="text-2xl font-bold text-center p-2 w-1/2 mx-auto border-b-2 border-primary">Register Your Account</h2>
      <div>
        <form onSubmit={handleRegister} className="card-body md:3/4 lg:w-1/2 mx-auto" >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input border-b-2 border-primary"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoUrl</span>
            </label>
            <input
              type="text"
              placeholder="photo"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center p-4">Already have an account? <Link className="text-primary" to='/login'>Login</Link></p>
      </div>
    </>
  );
};

export default Register;
