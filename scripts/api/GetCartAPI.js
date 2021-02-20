import React, { useEffect } from 'react'
import CartCardList from '../components/CartCardList';
import { connect } from "react-redux"
import { get } from '../store/CartStore';


const GET_URL = "/cart.js"

const GetCartAPI = ({ cartCardList, getItems }) => {
   
    // Fetch Handler
    const getCartHandler = () =>{
        fetch(GET_URL)
            .then( res => res.json())
            .then(
                (result)=>{
                    console.log(result.items);
                    // State(redux)
                    getItems(result.items)

                },
                (error)=>{
                    console.log(error)
                }
            )
    }

    //componenDidMount (one-time)
    useEffect(()=>{
        getCartHandler();
    }, [])
    
    return(
        <CartCardList 
            cartCardList={cartCardList}/>
    )
}

// Map redux state to componet props
const mapStateToProps = state =>( { cartCardList: state } )


// Map 'new redux state by dispath' to componet props 
const mapDispatchToProps = dispatch => ({
    getItems: (items)=>dispatch(get(items))
})

export default connect( mapStateToProps, mapDispatchToProps ) (GetCartAPI);