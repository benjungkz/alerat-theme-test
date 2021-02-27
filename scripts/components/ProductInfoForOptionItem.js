import React, { useState } from 'react'
import ProductRelation from '../static/ProductRelation'
import MoneyFilter from '../utils/MoneyFilter'
import parse from 'html-react-parser';


// Needs to make dynamic change/////////////////
const PRODUCT_URL = 'alerta-find-subscription';
///////////////////////////////////////////////

const PRODUCT_PAGE_URL = 'https://benkzdevshop.myshopify.com/products/'
const PRODUCT_OPTION_BEDGE_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/productinfo-star-bedge.png'

const ProductInfoForOptionItem = ({handle}) =>{
    const [option, setOption ] = useState({})

    // Temp Style
    const style = (optionHandle)=>{
        return(
            handle == optionHandle ?
            {
                boxShadow: '0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
                opacity: '1.0',
                border: '3px solid #D12220'
                
            }
            :
            {
                opacity: '0.7'
            }
        )
    }

    return(
        ProductRelation[PRODUCT_URL].options.map((option, index)=>{
            return(
                //if custome
                <a 
                    href={ PRODUCT_PAGE_URL + option.handle}
                    key={index}
                    className="productOption__link">
                    <div  
                        className="productOption" 
                        style={style(option.handle)}>

                        <div className="productOption__header">
                            <div className="productOption__wrap productOption__wrap--option">
                                {option.hasIcon ? <img className="productOption__bedge" src={PRODUCT_OPTION_BEDGE_ICON_URL}/> : null}
                                <h3 className="productOption__name">{option.name}</h3>
                            </div>
                            <div className="productOption__wrap productOption__wrap--price">
                                <h1 className="productOption__price">
                                    {MoneyFilter(option.price)}
                                    <span className="productOption__suffix">{option.priceSuffix}</span>
                                </h1>
                                
                                {option.isExtraItem ?
                                <>
                                <p className="productOption__extra">
                                        + {option.extraItem.name} : {MoneyFilter(option.extraItem.price)} 
                                </p>
                                <p className="productOption__extra">{option.extraItem.description}</p>
                                </>  
                                :
                                null
                                }
                            </div>
                        </div>

                        <div className="productOption__body">
                            
                            <div className="productOption__wrap productOption__wrap--image">
                                <img className="productOption__image" src="" alt=""/>
                            </div>

                            <div className="productOption__wrap productOption__wrap--description">
                                {parse(option.description)}
                                {option.isTermAndCondtions?
                                    <p className="productOption__term">Term And Conditions</p>
                                    :
                                    null
                                }
                            </div>
                        </div>

                        
                        
                    </div>
                </a>
            )
        })
    )    
}

export default ProductInfoForOptionItem;