export default function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        image: '',
        inStock: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product)

    }

    function handleChange(e) {
        setProduct({
             ...product,
             [e.target.name]: e.target.value
             }
        )
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleChange} type="text" placeholder="Product Name" />
                <input name="price" onChange={handleChange}  type="number" placeholder="Product Price" />
                <input name="image" onChange={handleChange}  type="text" placeholder="inage url" />
                <input name="inStock" onChange={handleChange}  type="checkbox" checked={product.inStock} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}