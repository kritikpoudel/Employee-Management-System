import { useState } from "react";

const Login = ({handleLogin}) => {
    const[email,setEmail]=useState('')
    const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)

          }}
          autoComplete="off"
            required
            className="border-2 outline-none bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-none mt-5 outline-none bg-emerald-600 rounded-full py-2 px-8 text-xl">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
