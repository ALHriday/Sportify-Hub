import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const { createGoogleAccount, setUser } = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        createGoogleAccount()
        .then(result => setUser(result.user)
        ).catch(error => console.log(error)
        )
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <h1 className="text-4xl font-bold">LogIn now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">LogIn</button>
                        </div>
                    </form>
                    
                    <div className="text-center">
                        <button onClick={handleSignInWithGoogle} className="btn btn-sm btn-link">
                            <div className="w-8 h-8">
                                <img className="w-full h-full p-1" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                            </div>
                            SignInWithGoogle</button>
                        <div className="text-center my-1">
                            <p>{`Don't have an account`}<Link to='/Register' className="text-blue-500 underline pl-1">Register</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;