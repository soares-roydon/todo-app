import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

function Signup() {
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
            Sign up
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>First name</Label>
            <Input type={"text"} placeholder={"Walter"} />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>Last name</Label>
            <Input type={"text"} placeholder={"White"} />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>Email</Label>
            <Input type={"email"} placeholder={"walter@gmail.com"} />
          </div>
          <div className="flex flex-col gap-1 mb-3">
            <Label>Password</Label>
            <Input type={"password"} placeholder={"******"} />
          </div>
          <div className="mt-4">
            <Button>Sign up</Button>
          </div>
          <div className="flex gap-1 justify-center text-sm text-zinc-500 mt-5">
            <div>Already have an account?</div>
            <div className="underline text-orange-600 cursor-pointer">
              sign in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
