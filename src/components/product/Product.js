import Image from "../ui/Image";

const Product = ( {product: { name, imageUrls}}  ) =>{
    return (
        <li>
            <h2>{name}</h2>
            <Image  url={imageUrls} alt={name}/>
        </li>
    )
}

export default Product