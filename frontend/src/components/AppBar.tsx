import { Link, useNavigate } from "react-router-dom"
import Avatar from "./Avatar"
import axios from "axios";
import { BLOG_URL } from "../config";


interface AppBarProps {
    btn?: "Write" | "Publish";
    title?: string,
    content?: string
}

export const AppBar = ({ btn = "Write", title="", content="" }: AppBarProps) =>{
    
    const navigate = useNavigate()

    return(
        <div className="border-b shadow-md px-10 py-3 flex justify-between">
            <div className="font-bold text-xl p-1">
                <Link to={'/blogs'}>MEDIUM</Link>
            </div>
            <div className="p-1 flex gap-5">
                {btn === "Write" ? (
                <Link to="/publish" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-xl">
                    {btn}
                </Link>
            ) : (
                <button onClick={async() => {
                    try{
                        const res = await axios.post(BLOG_URL, {
                            title,
                            content
                        },{
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        })
                        console.log(res.data.id);
                        
                        navigate(`/blog/${res.data.id}`)
                    }catch(e){
                        console.log("Error : "+e)
                        console.log("in catch");
                        
                    }
                }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-xl">
                    {btn}
                </button>
            )}
                <Avatar name="b"/>
            </div>
        </div>
    )
}