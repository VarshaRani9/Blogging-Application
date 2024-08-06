import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import Avatar from "./Avatar"

export const SingleBlog = ({blog} : {blog: Blog}) => {
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 pt-16 px-20 w-full max-w-screen-2xl">
                <div className="col-span-8 px-8 text-justify">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 2nd Dec 2023
                    </div>
                    <div className="text-xl font-medium">
                        {blog.content}
                    </div>
                </div>
                <div className=" col-span-4 px-8 text-justify">
                    <div className="text-2xl font-bold">Author</div>
                    <div className="text-xl flex pt-4 pb-2 ">
                        <Avatar name={blog.author.name || "Anonymous"}/>
                        <div className="pl-4">
                        {blog.author.name || "Anonymous"}
                        </div>
                            </div>
                    <div>
                        A passionate writer and tech enthusiast. With interest in various topics, including web development, programming languages.
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}