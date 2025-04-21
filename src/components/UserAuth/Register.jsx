import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";


const Register = () => {

    const { createAccountWithEmailAndPass, setUser, passValidation,
        setPassValidation, showPass, isTrue, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const passRef = useRef();

    const handleRegisterWithEmailAndPass = (e) => {
        e.preventDefault();
        const form = e.target;

        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;     

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (regex.test(password)) {
            setPassValidation(" ");
            createAccountWithEmailAndPass(email, password)
                .then(result => {
                    if (result.user) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Account Registration Successful.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setUser(null);
                        updateUser({ displayName, photoURL })
                            .then(() => navigate('/LogIn'))
                        .catch(error => error
                        )
                    }
                }).catch(error => error);
        } else {
            setPassValidation("Password must be contain 1 UpperCase, 1 LowerCase, 1 special character and at least 6 characters.");
        }
    }


    return (

        <div className="bg-base-200 min-h-screen p-4">
            <div className="flex flex-col justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterWithEmailAndPass} className="card-body pb-0">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter Name" className="input input-bordered" required />
                        </div>
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
                                    {isTrue ? <FaRegEyeSlash/> : <FaRegEye />}
                                </p>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="text-center text-red-500">{passValidation}</div>
                    </form>

                    <div className="mb-2 p-2 text-center">
                        <p>Already have an account.<Link to='/LogIn' className="text-blue-500 underline pl-1">LogIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;