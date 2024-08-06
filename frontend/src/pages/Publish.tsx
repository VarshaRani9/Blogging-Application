import { useState } from "react"
import { AppBar } from "../components/AppBar"

export const Publish = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return(
        <div>
            <AppBar btn="Publish" title={title} content={content}/>
            <div className="w-2/3 m-auto pt-5">
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-2 text-2xl font-bold">Title</label>
                    <input onChange={(e) =>{
                        setTitle(e.target.value)
                    }} type="text" id="title" className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <label htmlFor="content" className="block mb-2 text-xl font-bold ">Content of Blog</label>
                <textarea onChange={(e) =>{
                        setContent(e.target.value)
                    }} id="content" rows={10} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
        </div>
    )
}