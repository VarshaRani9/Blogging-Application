import { Link } from "react-router-dom"
import Avatar from "./Avatar"

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string, 
    content: string, 
    publishedDate: string
}

export const BlogCard = ({id, authorName,title, content, publishedDate} : BlogCardProps) => {

    return(
        <Link to={`/blog/${id}`}>
        <div className="my-4 py-5 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center">
                    <Avatar name={authorName}/>
                </div>
                <div className=" pl-4 font-extralight text-lg">
                    {authorName} . 
                </div>
                <div className="pl-2 font-thin text-slate-500 text-lg">
                {publishedDate}
                </div>
            </div>
            <div className="text-lg font-bold">
                {title}
            </div>
            <div className="text-base">
                {content.slice(0,100)+ "..."}
            </div>
            <div className="text-sm pb-3">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
            <div className="bg-slate-100 h-1 w-full"></div>
        </div>
        </Link>
    )
} 