import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';

const CLOSE_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/icon-modal-close.png?v=1617503896';
const RETURN_POLICY_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/icon-return-policy_1_3x_8b5e1395-51fe-484b-8722-8cdbccd0e6e8.png?v=1617508381'
const SHIPPING_POLICY_ICON_URL = 'https://cdn.shopify.com/s/files/1/1661/6207/files/icon-shipping-policy_3x_7a6431dd-8611-44f8-a3a7-1cadd2bca02d.png?v=1617508381'


const ProductInfoPolicy = () =>{

    const [ isOpenShippingModal, setIsOpenShippingModal ] = useState(false)
    const [ isOpenReturnModal, setisOpenReturnModal] = useState(false)

    const openShippingModal = () => setIsOpenShippingModal(true)
    const closeShippingModal= () => setIsOpenShippingModal(false)

    const openReturnModal = () => setisOpenReturnModal(true)
    const closeReturnModal= () => setisOpenReturnModal(false)
    
    return (
        <div className="ProductPolicy">
            <div className="ProductPolicy__card">
                <img
                    className="ProductPolicy__icon" 
                    src={SHIPPING_POLICY_ICON_URL} 
                    alt="Shipping Policy"/>
                <p 
                    className="ProductPolicy__description"
                    onClick={openShippingModal}>
                    Shipping Policy
                </p>
                <Modal
                    isOpen={isOpenShippingModal}    
                >
                    <div className="ProductModal">
                        <div className="ProductModal__header">
                            <h1 className="ProductModal__title">Shipping Policy</h1>
                            <img
                                className="ProductModal__icon" 
                                src={CLOSE_ICON_URL} 
                                alt="Close the modal"
                                onClick={closeShippingModal}
                            />
                        </div>

                        <div className="ProductModal__body">
                            <div className="ProductModal__row">
                                <p className="ProductModal__desc ProductModal__desc--title">Shipping Carrier</p>
                                <p className="ProductModal__desc ProductModal__desc--content">UPS Standard (2-3 Days)</p>
                            </div>
                            <div className="ProductModal__row">
                                <p className="ProductModal__desc ProductModal__desc--title">Shipment</p>
                                <p className="ProductModal__desc ProductModal__desc--content">Orders received before 4:00 PM(CST) from Monday through Friday will be shipped the same business day. After that, the orders will be shipped next business day. 
                                If the day is a Saturday, Sunday, or holiday, in which case they will be shipped on the next business day.</p>
                            </div>
                            <div className="ProductModal__row">
                                <p className="ProductModal__desc ProductModal__desc--title">Shipping From</p>
                                <p className="ProductModal__desc ProductModal__desc--content">TX, the United States</p>
                            </div>
                        </div>
                        
                        <div className="ProductModal__footer">
                            <p className="ProductModal__note">If you have question, Please contact our customer service center, &nbsp;
                                <span>
                                    <a
                                    className="ProductModal__link" 
                                    href="tel:1-833-325-3782">
                                    1-833-325-3782
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    
                </Modal>


            </div>
            <div className="ProductPolicy__card">
                <img
                    className="ProductPolicy__icon" 
                    src={RETURN_POLICY_ICON_URL}
                    alt='Return Policy'/>
                <p 
                    className="ProductPolicy__description"
                    onClick={openReturnModal}
                    >
                    Return Policy
                </p>
                <Modal
                    isOpen={isOpenReturnModal}    
                >
                    <div className="ProductModal">
                        <div className="ProductModal__header">
                            <h1 className="ProductModal__title">Return Policy</h1>
                            <img
                                className="ProductModal__icon" 
                                src={CLOSE_ICON_URL} 
                                alt="Close the modal"
                                onClick={closeReturnModal}
                            />
                        </div>

                        <div className="ProductModal__body">
                            <div className="ProductModal__row">
                                <p className="ProductModal__desc ProductModal__desc--title">Return Within</p>
                                <p className="ProductModal__desc ProductModal__desc--content">First 30 days</p>
                            </div>
                            <div className="ProductModal__row">
                                <p className="ProductModal__desc ProductModal__desc--title">Special Instruction</p>
                                <p className="ProductModal__desc ProductModal__desc--content">To return the device, call customer service <strong>1-833-325-3782</strong> and ask for a return material authorization 
                                number and instructions on where and how to return the product for a full refund.</p>
                            </div>
                        </div>
                        
                        <div className="ProductModal__footer">
                            <p className="ProductModal__note">If you want to see the retrun policy section on Terms and Conditions, &nbsp;
                                <span>
                                    <a
                                    className="ProductModal__link" 
                                    href="#">
                                    Please click here
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    
                </Modal>

            </div>
        </div>
    )
}

export default ProductInfoPolicy;