import React, { useEffect } from 'react'
import CartCardForItem from '../components/CartCardForItem';
import ItemsRelation from '../static/ItemsRelation';
import CartCardForNote from '../components/CartCardForNote';
import { connect } from "react-redux"

const CartCardList = ({cartItem}) => {

    useEffect(()=>{
        
        //getItems(cartCardList)
        console.log(cartItem)
    },[])
    return(
        
        cartItem.map( (item, index) => {
            console.log(item);
            return(
                // Need flag for <CartCardForItem>
                <div key={index} className="cart__group">
                    <CartCardForItem item={item}/>            
                      
                    {/* {
                        ItemsRelation[item.handle].hasExtraItem ?
                        <CartCardForExtraItem 
                            mainItemHandle={item.handle}
                            extraItemHandle={ItemsRelation[item.handle].extraItem.handle} />
                        :
                        null
                    }    */}
                    {
                        ItemsRelation[item.handle].hasNote ?
                        <CartCardForNote
                            mainItemHandle={item.handle}/>
                        :
                        null
                        
                    }
                       
                    
                </div>
            )
        })        
    )
}


// // Map redux state to componet props
const mapStateToProps = state =>( { cartItem : state.cartItem } )


// // Map 'new redux state by dispath' to componet props 
// const mapDispatchToProps = dispatch => ({
//     getItems: (items)=>dispatch(get(items))
// })

export default connect(mapStateToProps,null)(CartCardList);
//export default CartCardList
