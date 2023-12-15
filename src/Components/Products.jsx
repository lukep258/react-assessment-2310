const Products = (props) => {
    // Instructions:
    //     1. Import the products state as props
    //     2. Loop over useing #map 
    //     3. Show the product name in an h1, and the product price in a p tag

    return (
        props.products.map((product)=>(
            <div key={product.id}>
                <h1>product.productData.name</h1>
                <p>product.productData.pricing</p>
            </div>
        ))
    )
}

export default Products