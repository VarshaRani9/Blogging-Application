import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if(loading) <BlogSkeleton/>
    return(
            <div>
                <AppBar />
            <div className="flex justify-center">
            <div className="max-w-2xl">
                {blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} publishedDate="3-01-99"/>)}
            </div>
            </div>
        </div>
    )
}
export default Blogs