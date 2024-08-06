import { MouseEventHandler } from "react";

interface btnInp {
    type: "Signin" | "Signup"
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export const Button = ({type, onClick}: btnInp) =>{
    return (
        <button onClick={onClick} className="text-white font-bold bg-black p-2 rounded-lg">{type == "Signin"? "Signin ":"Signup"}</button>
    )
}