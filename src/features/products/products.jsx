import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";
function Products() {
    var { isLoading, data } = useGetAllProductsQuery()
    console.log('isLoading ::',isLoading)
    console.log("data ::",data)
    return <div>
        <h2>Products Component</h2>
        {
            isLoading && <div>
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
            </div> 
        }
        {!isLoading &&  <div className="d-flex flex-wrap text-center"> {data?.map((product, i) => {
                return <div key={i} className="border border-1 m-1 p-4">
                    <img src={product.image} alt="" width='100px' />
                    {/* <p>Title : {product.title}</p> */}
                    <p>Category : {product.category}</p>
                    <p>Price : {product.price}</p>
                    <button className="btn btn-warning">Add to cart</button>
                </div>

            })}
            </div>}

    </div>
}
export default Products