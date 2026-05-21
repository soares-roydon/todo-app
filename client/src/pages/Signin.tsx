import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import { useState } from "react";

function Signin() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate();



  async function handleSignin() {
    const response = await fetch("https://todo-app-backend-sigma-rosy.vercel.app/api/v1/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    if(!response.ok) {
      return
    }

    const data = await response.json()
    localStorage.setItem("token", data.token)
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center h-screen border">
      <div className="flex flex-col gap-5 w-sm">
        <div className="flex justify-center items-center gap-2 border-y border-zinc-300 hover:shadow-lg hover:border-orange-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f97316"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M13 5h8" />
            <path d="M13 12h8" />
            <path d="M13 19h8" />
            <path d="m3 17 2 2 4-4" />
            <rect x="3" y="4" width="6" height="6" rx="1" />
          </svg>
          <div className="flex justify-center text-3xl font-semibold text-zinc-700">
            Todo
          </div>
        </div>
        <div className="border rounded-2xl border-zinc-200 shadow-md px-6 py-5 text-zinc-900 hover:border-orange-200">
          <div className="flex justify-center mb-5 text-xl font-medium">
            Sign in
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>Email</Label>
            <Input type={"email"} placeholder={"walter@gmail.com"} onChange={(e: any) => {setEmail(e.target.value)}}/>
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>Password</Label>
            <Input type={"password"} placeholder={"******"} onChange={(e: any) => {setPassword(e.target.value)}}/>
          </div>
          <div className="mt-4">
            <Button onClick={handleSignin}>Sign in</Button>
          </div>
          <div className="flex gap-1 justify-center text-sm text-zinc-500 mt-5">
            <div>Don't have an account?</div>
            <div
              className="underline text-orange-600 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
