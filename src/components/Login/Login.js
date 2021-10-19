import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const { setIsLoading, signInUsingGoogle } = useAuth();


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="register w-50 mx-auto mt-5">
            <div>
                <h2>Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.Email?.type === 'required' && <span className="text-danger">Email is required</span>}

                    <input type="password" placeholder="Your Password" {...register("Password", { required: true, maxLength: 20 })} />
                    {errors.Password?.type === 'required' && <span className="text-danger">Password is required</span>}

                    <input type="submit" className="btn-regular" value="Create an account" />
                </form>
                <Link to="/register" className="text-danger" style={{ textDecoration: "none" }}>Need An Account?</Link>
                <hr width="300px" />
                <button className="google-btn" onClick={handleGoogleLogin}><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;