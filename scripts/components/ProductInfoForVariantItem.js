import React, { useState, useEffect } from 'react'
import MoneyFilter from '../utils/MoneyFilter'
import ProductRelation from '../static/ProductRelation'
import { selectVriantItem, addItem, changeItem } from '../store/CartStore'
import { connect } from "react-redux"

const GET_PRODUCT_URL = '/products/'
const PRODUCT_OPTION_BEDGE_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/alerta-best-seller-bedge.png'

const ProductInfoForVariantItem = ({handle, selectedVariantItemId, setSelectedVariantItemId, addItem, changeItem}) =>{
    const [ variants, setVariants ] = useState([])
    
    // Temp Style
    const style = (variantId)=>{
        return(
            selectedVariantItemId == variantId ?
            {
                boxShadow: '0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
                opacity: '1.0',
                border: '3px solid #D12220'
                
            }
            :
            {
                opacity: '0.6'
            }
        )
    }

    useEffect(()=>{
        getProductHandler(handle)     
    },[handle])
   
    // Handler
    const variantHandler = (variantId) =>{
        setSelectedVariantItemId(variantId);

        // Change intial value on state
        changeItem(variantId);
    }
    const getProductHandler = (handle) =>{

        fetch( GET_PRODUCT_URL + handle + '.js' )
            .then( res => res.json())
            .then(
                (result)=>{
                    // Log
                    console.log(result.variants);

                    // Add initial value to the stage
                    addInitialVariantItemToCartHandelr(result.variants[0].id)
                    
                    // Update state for changing css
                    setSelectedVariantItemId(result.variants[0].id);

                    // Set variants data
                    setVariants(result.variants)
                },
                (error)=>{
                    console.log(error)
                }
            )
    }
    const addInitialVariantItemToCartHandelr = (initialVariantID) => {        
            let productStage;
            ProductRelation[handle].options[0].isSubscription ?
                productStage = 
                {
                    id: initialVariantID,
                    quantity: 1
                }
            :
                productStage = 
                {
                    id: initialVariantID,
                    quantity: 1,
                    properties: ProductRelation[handle].options[0].properties
                }
    
            addItem(productStage)
    }


    return(
        variants.length > 0 ?
            variants.map((variant, index)=>{
                return(
                
                    <div  
                        className="productOption" 
                        style={style(variant.id)}
                        key={index}
                        onClick={
                            ()=>{ 
                                    variant.inventory_quantity > 0 ?
                                        variantHandler(variant.id)
                                    :
                                        null
                                } 
                        }>

                        <div className="productOption__header">
                            <div className="productOption__wrap productOption__wrap--option">
                                { index == 0 && ProductRelation[handle].options[0].hasIcon ? <img className="productOption__bedge" src={PRODUCT_OPTION_BEDGE_ICON_URL}/> : null}
                                <h3 className="productOption__name">{variant.title}</h3>
                            </div>
                        </div>

                        <div className="productOption__body"> 
                            <div className="productOption__wrap productOption__wrap--image">
                                <img 
                                        className="productOption__image" 
                                        src={variant.featured_image.src} alt={variant.title} />
                            </div>
                            <div className="productOption__wrap productOption__wrap--price">
                                    {
                                        variant.inventory_quantity > 0 ?
                                                <h1 className="productOption__price">
                                                    {MoneyFilter(variant.price)}
                                                </h1>
                                            :
                                                <p className="productOption__price productOption__price--outofstock">
                                                    Currently Unavailable
                                                </p>
                                    
                                    }
                            </div>
                            
                        </div>
                    </div>
                )
            })   
        :
            null
    )    
}

const mapStateToProps = state => ({ 
    selectedVariantItemId : state.variantItem
})

function mapDispatchToProps( dispatch ){
    return{
        setSelectedVariantItemId: (id)=>dispatch(selectVriantItem(id)),
        addItem: (item)=>dispatch(addItem(item)),
        changeItem: (id)=>dispatch(changeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductInfoForVariantItem)
