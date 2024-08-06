import { useEffect, useState} from "react"
import axios from "axios";
import { BLOG_URL } from "../config";

export interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string | null
    }
}

export const useBlog = ({id}: {id:string}) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const getBlog = async() => {
            try {
                const response = await axios.get(`${BLOG_URL}/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBlog(response.data.post); 
                setLoading(false)
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } 
        }
        getBlog();
    }, []);

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const getBlogs = async() => {
            try {
                const response = await axios.get(`${BLOG_URL}/bulk`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBlogs(response.data.posts); 
                setLoading(false)
            } catch (error) {
                console.error("Error fetching blogs:", error);
                if (axios.isAxiosError(error)) {
                    console.error("Axios error:", error.message);
                    if (error.response) {
                        console.error("Data:", error.response.data);
                        console.error("Status:", error.response.status);
                        console.error("Headers:", error.response.headers);
                    } else if (error.request) {
                        console.error("Request:", error.request);
                    } else {
                        console.error("Error Message:", error.message);
                    }
                } else {
                    console.error("Unexpected error:", error);
                }
            } 
        }
        getBlogs();
    }, []);

    return {
        loading,
        blogs
    }

}