/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent } from "react"

interface InputType {
    type: "name" | "password" | "email",
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({type, onChange} : InputType) => {

    return (
        <div className="flex flex-col gap-1">
            <div className="font-bold">
                {type == "name"? "Name": type== "email" ? "Email": "Password"}
            </div>
            <input onChange={onChange}
            type={type=="password"?"password": "text"} 
            placeholder={type == "name"? "Enter name": type== "email" ? "xyz@gmail.com": "********"} 
            className="px-3 py-1 border border-gray-200"
            />
            <br />
        </div>
    )
}