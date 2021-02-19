// It's updated by 02/09/2021

const ItemsRelation = {
    'get-started-kit': 
    {
        isSubscription: false,
        subscriptionType: null,
        hasExtraItem: false,
        hasMessage: false,
        message: null,
        extraItem : {
            id: null,
            priceSuffix: null
        },
        hasNote: false,
        note : {
            title: null,
            description: null,
            hasExpansion: null,
            expansion: null,
        },
        priceSuffix: null
    },
    'alerta-find-subscription':
    {
        isSubscription: true,
        subscriptionType: 'normal',
        priceSuffix: '/month',
        hasMessage: true,
        message : "This is for the next 23 months.  No charge first month.",
        hasExtraItem: true,
        extraItem : {
            handle: 'alerta-find-montnly-fee',
            priceSuffix: '(one-time charge)'
        },
        hasNote: true,
        note : {
            title: "Terms and Conditions",
            description: "Customer acknowledges and agrees to enter into a binding 24-month agreement, where a payment will be paid each month for twenty-four months. This plan is NOT Month-to-Month.",
            hasExpansion: true,
            expansion: "expansion"
        },
        
    }

}


export default ItemsRelation;