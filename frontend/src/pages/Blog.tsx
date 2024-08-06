import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { SingleBlog } from "../components/SingleBlog";

const Blog = () => {

    const {id} = useParams()
    const {loading, blog} = useBlog({id : id || ""});

    if(loading)return <div className="flex justify-center text-2xl">Loading data ...</div>
    return(
        <div>
            <SingleBlog blog={blog}/>
        </div>
    )
}
export default Blog