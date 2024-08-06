/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { Button } from "./Button"
import { Heading } from "./Heading"
import { Input } from "./Input"
import { SignupType } from "varsha_9-blogging-common"
import axios from "axios"
import {USER_URL } from "../config"
import { useNavigate } from "react-router-dom"


export const Auth = ({type}: {type: "Signup" | "Signin"}) =>{
    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    async function sendRequest(){
        try{
            const res = await axios.post(`${USER_URL}${type=="Signup"? "signup": "signin"}`, postInputs)
            const jwt = await res.data.jwt
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center mx-auto max-w-md gap-3">
            <Heading type={type}/>
            {type=="Signup" ? <Input type="name" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                })
            }}/> : null }
            <Input type="email" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                })
            }}/>
            <Input type="password" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password:e.target.value
                })
            }}/>
            <Button onClick={sendRequest} type={type}/>
        </div>
    )
}