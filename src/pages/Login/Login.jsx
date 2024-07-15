import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from 'react-hot-toast'

const Login = () => {


  const { signIn, googleLogin, setUser } = useContext(AuthContext);


  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;

    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Successfully logged in with'+ ' '+ result?.user?.email)
        navigate('/')
      })
      .catch(error => console.log(error))
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success(`Signed in to ${result?.user?.displayName} via Google`)
        navigate('/')
      })
      .catch(err =>{
        toast.error(err?.message)
      })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required
                name="email" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required
                name="password" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>

          <button onClick={handleGoogleLogin} className="btn btn-primary">Google login</button>
          <p>New to Verse Voyage?
            <Link to='/sign-up'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;