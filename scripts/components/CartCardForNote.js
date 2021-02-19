import React, { useState, useEffect } from 'react'
import ItemsRelation from '../static/ItemsRelation';

const CartCardForNote = ({mainItemHandle}) =>{

    const [hasNote, setHasNote] = useState(false)
    

    useEffect(()=>{
        ItemsRelation[mainItemHandle].hasNote ? setHasNote(true) : setHasNote(false)
    },[])

    return(
        hasNote ? 
        <div className="cart__card cart__card--note">
            <div>
                <h1>{ItemsRelation[mainItemHandle].note.title}</h1>
                <p>{ItemsRelation[mainItemHandle].note.description}</p>
            </div>
            <div>
                <p>{ItemsRelation[mainItemHandle].note.hasExpansion}</p>
                <p>{ItemsRelation[mainItemHandle].note.expansion}</p>
            </div>
        </div>
        :
        null
    )
}

export default CartCardForNote;