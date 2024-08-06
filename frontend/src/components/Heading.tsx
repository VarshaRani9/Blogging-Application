import { Link } from "react-router-dom"

export const Heading = ({type}: {type:"Signin" | "Signup"}) => {
    return (
        <>
        <div className="font-bold text-3xl text-center">
            {type == "Signin"? "Signin to your Account":"Create an account"}
        </div>
        <div className="text-slate-400 text-center">
            {type == "Signin"? 
                (<>Don't have Account? <Link to={"/signup"} className="pl-2 underline">Signup</Link></>):
                (<>Already have an account? <Link to={"/signin"} className="pl-2 underline">Login</Link></>)}
        </div>
        <br />
        </>
    )
}