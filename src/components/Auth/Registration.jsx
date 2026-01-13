import { useNavigate } from "react-router-dom"

const Registration = () => {

  const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-100 '>
      <fieldset className="fieldset bg-base-200 border-base-400 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />
        <button className="btn btn-neutral mt-4 hover:bg-gray-700 transition " onClick={() => navigate("/login")}>Create Account</button>
      </fieldset>
    </div>
  )
}

export default Registration