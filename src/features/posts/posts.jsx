import React from "react";
import { useGetAllPostsQuery } from "../../services/postApi";
function Posts() {
    var { isLoading, data } = useGetAllPostsQuery();
    console.log('isloading ::', isLoading)
    console.log('Posts data ::', data)

    return <div className="border border-2 border-primary p-2">
        <h2>Posts Component</h2>
        {
            isLoading ? <div>
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>  : data?.map((p,i) => {
                return <li key={i}>{p.title}</li>
            })
        }
    </div>
}
export default Posts