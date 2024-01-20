import React from 'react'
import '../styles/starProduct.css'


const StarProduct = ({starProduct}) => {
  const nothing="Image";
  return (
    <div className='starProduct'>
        <div>
            <a href={starProduct[0].url}><img src={starProduct[0].image}/></a>
        </div>
        <div>
            <a href={starProduct[1].url}><img src={starProduct[1].image} alt={nothing}/></a>
            <a href={starProduct[2].url}><img src={starProduct[2].image} alt={nothing}/></a>
            <a href={starProduct[3].url}><img src={starProduct[3].image} alt={nothing}/></a>
            
        </div>
    </div>
  )
}

export default StarProduct
