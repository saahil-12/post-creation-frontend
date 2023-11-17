
import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";


export default function PostsList(){
    const posts = useLoaderData();
    
    return (
    <>
        {posts.length>0 && (
        <ul className={classes.posts}>
            {posts.map((post) =>  (
            <Post key={post.body} author={post.author} body={post.body} />
            ))}
        </ul>
        )}
        {posts.length===0 && (
            <div style={{textAlign:"center" , color:"black"}}>
                <h2>There are no posts yet.</h2>
                <p>start adding some!</p>
            </div>
        )}
    </>
    );
}