import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {

    const { createGoogleAccount, setUser, signInAccountWithEmailAndPass, passValidation, setPassValidation, showPass, isTrue } = useContext(AuthContext);

    const navigate = useNavigate();
    const passRef = useRef();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInAccountWithEmailAndPass(email, password)
            .then(result => {
                if (result.user) {
                    setPassValidation('');
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "LogIn Successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setUser(result.user);
                    navigate('/');
                }
            }).catch(() => setPassValidation('Invalid Email or Password.'))
    }


    const handleSignInWithGoogle = () => {
        createGoogleAccount()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "LogIn Successful.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setUser(result.user);
                    navigate('/');
                }

            }).catch(() => setPassValidation('Invalid! Please try again.'))
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <div className="flex flex-col justify-center items-center p-4">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body">
                        <h1 className="text-4xl font-bold">LogIn now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input ref={passRef} type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                                <p onClick={() => showPass(passRef)} className="absolute top-[30%] right-[6%]">
                                    {isTrue ? <FaRegEyeSlash /> : <FaRegEye />}
                                </p>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">LogIn</button>
                        </div>
                        <div className=" text-red-500">{passValidation}</div>
                        <div className=" p-2">
                            <p>{`Don't have an account`}<Link to='/Register' className="text-blue-500 underline pl-1">Register</Link></p>
                        </div>
                    </form>

                    <div className="card-body py-0 mb-4">
                        <div className="flex justify-center items-center btn btn-primary">
                            <div className="w-8 h-8">
                                <img className="w-full h-full p-1" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />
                            </div>
                            <button onClick={handleSignInWithGoogle} >SignInWithGoogle</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;