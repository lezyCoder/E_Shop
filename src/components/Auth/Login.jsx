
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center h-100 '>
            <fieldset className="fieldset bg-base-200 border-base-400 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <a href="#" className='font-thin text-white hover:underline'>forgot password</a>
                <button className="btn btn-neutral mt-4 bg-purple-500 hover:bg-purple-600">Login</button>
                <button className="btn btn-neutral mt-4 hover:bg-gray-600 transition " onClick={() => navigate("/registration")}>Create Account</button>
            </fieldset>
        </div>
    )
}

export default Login