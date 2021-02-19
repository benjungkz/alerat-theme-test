import React, { useState, useEffect } from 'react'
import CartQty from './CartQty';
import ItemsRelation from '../static/ItemsRelation';
import MoneyFilter from '../utils/MoneyFilter';
import PriceSuffixFilter from '../utils/PriceSuffixFilter';
import UpdateCartAPI from '../api/UpdateCartAPI'
import { connect } from "react-redux";
import { remove } from '../store/CartStore';

const CardCardForItem = ({item, onRemoveBtnClick}) => {
    const [ update, setUpdate ] = useState(false)


    // Delete Handler
    const DeleteCartItemHandler = () => {
       
        setUpdate(true)    
        //console.log("update : " + update)    

    } 

    return(
        <>
        <div className="cart__card">
            <div>
                <img src={item.image} alt={item.title}/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <h3>
                    {MoneyFilter(item.price)}
                    {PriceSuffixFilter(ItemsRelation[item.handle].priceSuffix)}
                </h3>
                {
                    ItemsRelation[item.handle].hasMessage?
                    <p>{ItemsRelation[item.handle].message}</p>
                    :
                    null
                }
                <CartQty 
                    quantity={item.quantity}
                    id = {item.id}
                />
                <button onClick={ ()=>{ DeleteCartItemHandler() } }>[Delete]</button>
                

            </div>
        </div>
    
        { update? 
                <UpdateCartAPI 
                    id={item.id} 
                    qty={0} 
                            /> 
                : null }
    
        </>
        
    )
}

// // It's not neceesary to have state on redux
// function mapDispatchToProps( dispath, ownProps){
//     return{
//         onRemoveBtnClick : () => dispath(remove(ownProps.item.id))
//     }
// }

//export default connect(null, mapDispatchToProps) (CardCardForItem);

export default CardCardForItem