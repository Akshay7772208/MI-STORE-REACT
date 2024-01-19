import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewCard = ({name,image,review,index,price}) => {
  return (
    <div className="ProductReviewCard">
        <img src={image} alt={`${index} review`}/>
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard