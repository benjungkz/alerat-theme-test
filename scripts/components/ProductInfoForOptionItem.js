import React, { useState } from 'react'
import ProductRelation from '../static/ProductRelation'
import MoneyFilter from '../utils/MoneyFilter'

// Needs change
const PRODUCT_URL = 'alerta-find-subscription';
const PRODUCT_PAGE_URL = 'https://benkzdevshop.myshopify.com/products/'


const ProductInfoForOptionItem = ({handle}) =>{
    const [option, setOption ] = useState({})

    // Temp Style
    const style = (optionHandle)=>{
        return(
            handle == optionHandle ?
            {
                border: '1px solid blue'
            }
            :
            null
        )
    }

    return(
        ProductRelation[PRODUCT_URL].options.map((option, index)=>{
            return(
                <a 
                    href={ PRODUCT_PAGE_URL + option.handle}
                    key={index}>
                    <div  
                        className="productOption" 
                        style={style(option.handle)}>

                        <div className="productOption__header">
                            {option.hasIcon ? <img className="productOption__bedge" href="/"/> : null}
                            <h3 className="productOption__name">{option.name}</h3>
                        </div>

                        <div className="productOption__body">
                            <h1 className="productOption__price">{MoneyFilter(option.price)}</h1>
                            <span className="productOption__suffix">{option.priceSuffix}</span>
                            {option.isExtraItem ?
                                <div>
                                    <p className="productOption__extra--name">+{option.extraItem.name}</p>
                                    <p className="productOption__extra--price">{MoneyFilter(option.extraItem.price)}</p>
                                    <p className="productOption__extra--description">{option.extraItem.description}</p>
                                </div>
                                :
                                null
                            }
                            <p className="productOption__description">{option.description}</p>
                        </div>

                        <div className="productOption__footer">
                            {option.isTermAndCondtions?
                                <p className="productOption__term">Term And Conditions</p>
                                :
                                null
                            }
                        </div>
                        
                    </div>
                </a>
            )
        })
    )    
}

export default ProductInfoForOptionItem;