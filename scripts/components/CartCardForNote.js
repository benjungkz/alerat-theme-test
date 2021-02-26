import React, { useState, useEffect } from 'react'
import ItemsRelation from '../static/ItemsRelation';
import parse from 'html-react-parser';

const CART_ARROW_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-arrow-down.png'
const CART_CONNECTER_NOTE_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/cart-connecter-note.png'

const CartCardForNote = ({mainItemHandle}) =>{

    const [hasNote, setHasNote] = useState(false)
    const [ active, setActive ] = useState('')
    

    useEffect(()=>{
        ItemsRelation[mainItemHandle].hasNote ? setHasNote(true) : setHasNote(false)
    },[])

    // Dropdown Handler
    const dropdownHandler = () =>{
        active == '' ? setActive('cart__wrap--active') : setActive('')
    }

    return(
        hasNote ? 
        <div className="cart__card cart__card--note">
            <div className="cart__wrap cart__wrap--first">
                <h3 className="cart__title">{ItemsRelation[mainItemHandle].note.title}</h3>
                {parse(ItemsRelation[mainItemHandle].note.description)}
                {parse(ItemsRelation[mainItemHandle].note.expansion)}

                {/* { ItemsRelation[mainItemHandle].note.hasExpansion ?
                    <img 
                        className="cart__arrow"
                        src={CART_ARROW_ICON_URL}
                        alt="Open Terms and Condition"
                        onClick={dropdownHandler}/>
                    :
                    null    
                } */}
            </div>


            {/* <div className={'cart__wrap cart__wrap--second' + active}>
                {parse(ItemsRelation[mainItemHandle].note.expansion)}
            </div> */}

            <img 
                className="cart__connecter cart__connecter--note"
                src={CART_CONNECTER_NOTE_ICON_URL}
                alt="Subsciption Terms and Condition"/>
        </div>
        :
        null
    )
}

export default CartCardForNote;