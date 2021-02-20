import React, { useState, useEffect } from 'react'
import ProductRelation from '../static/ProductRelation';

import MoneyFilter from '../utils/MoneyFilter'

// Needs change
const PRODUCT_URL = 'alerta-find-subscription';


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
            
                <div key={index} 
                    className="productOption" 
                    style={style(option.handle)}>

                    <div className="productOption__header">
                        {option.hasIcon ? <h3>STAR</h3> : null}
                        <h3>{option.name}</h3>
                    </div>

                    <div className="productOption__body">
                        <h1>{MoneyFilter(option.price)}</h1>
                        <span>{option.priceSuffix}</span>
                        {option.isExtraItem ?
                            <div>
                                <p>+{option.extraItem.name}</p>
                                <p>{MoneyFilter(option.extraItem.price)}</p>
                                <p>{option.extraItem.description}</p>
                            </div>
                            :
                            null
                        }
                        <p>{option.description}</p>
                    </div>

                    <div className="productOption__footer">
                        {option.isTermAndCondtions?
                            <p>Term And Conditions</p>
                            :
                            null
                        }
                    </div>
                    
                </div>

               
                
                
            )
        })
    )    
}

export default ProductInfoForOptionItem;