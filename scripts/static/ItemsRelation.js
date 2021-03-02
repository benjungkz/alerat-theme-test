// It's updated by 02/09/2021

const ItemsRelation = {
    'get-started-kit': 
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem: false,
        hasExtraItem: false,
        hasMessage: false,
        message: null,
        priceSuffix: null,
        extraItem : {
            id: null,
            priceSuffix: null
        },
        hasNote: false,
        note : {
            title: "Terms and Conditions",
            description: '<p class="cart__description">Customer acknowledges and agrees to enter into a binding <span class="cart__red">24-month agreement</span>,' 
                         + ' where a payment will be paid each month for twenty-four months.</p><br>'
                         + '<p class="cart__description cart__red">This plan is NOT Month-to-Month.</p><br>',
            hasExpansion: true,
            expansion: '<p class="cart__description"> Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due.</p><br>'
                        + '<p class="cart__description cart__red">PREPAID CARDS ARE NOT ACCEPTED.</p><br>'
                        +'<p class="cart__description">If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.</p><br>'
                        +'<p class="cart__description">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>'
        }
    },
    'alerta-find-subscription':
    {
        isSubscription: true,
        isExtraItem:false,
        subscriptionType: 'normal',
        priceSuffix: '/month',
        hasMessage: true,
        message :   '<p class="cart__description cart__description--msg">This is for the next 23 months.</p>'
                    +'<p class="cart__description cart__description--msg cart__red">Frist monthly fee is free!</p>',
        hasExtraItem: true,
        extraItem : {
            variantId : 34444280889484,
            handle: 'alerta-find-montnly-fee',
            priceSuffix: '(one-time charge)'
        },
        hasNote: true,
        note : {
            title: "Terms and Conditions",
            description: '<p class="cart__description">Customer acknowledges and agrees to enter into a binding <span class="cart__red">24-month agreement</span>,' 
                         + ' where a payment will be paid each month for twenty-four months.</p><br>'
                         + '<p class="cart__description cart__red">This plan is NOT Month-to-Month.</p><br>',
            hasExpansion: true,
            expansion: '<p class="cart__description"> Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due.</p><br>'
                        + '<p class="cart__description cart__red">PREPAID CARDS ARE NOT ACCEPTED.</p><br>'
                        +'<p class="cart__description">If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.</p><br>'
                        +'<p class="cart__description">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>'
        },
        
    },
    'find-activation-fee': 
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:true,
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
    'alerta-chime': 
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:false,
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
    'battery-replacement': 
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:false,
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
    'alerta-patch': 
    {
        isSubscription: true,
        subscriptionType: 'normal',
        isExtraItem:false,
        hasExtraItem: false,
        hasMessage: false,
        message: null,
        extraItem : {
            id: null,
            priceSuffix: null
        },
        hasNote: true,
        note : {
            title: "Terms and Conditions",
            description: '<p class="cart__description">Customer acknowledges and agrees to enter into a binding <span class="cart__red">24-month agreement</span>,' 
                         + ' where a payment will be paid each month for twenty-four months.</p><br>'
                         + '<p class="cart__description cart__red">This plan is NOT Month-to-Month.</p><br>',
            hasExpansion: true,
            expansion: '<p class="cart__description"> Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due.</p><br>'
                        + '<p class="cart__description cart__red">PREPAID CARDS ARE NOT ACCEPTED.</p><br>'
                        +'<p class="cart__description">If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.</p><br>'
                        +'<p class="cart__description">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>'
        },
        priceSuffix: '/3 months'
    },
    'copy-of-alerta-patch-refill-kit-subscription-1-months': 
    {
        isSubscription: true,
        subscriptionType: 'normal',
        isExtraItem:false,
        hasExtraItem: false,
        hasMessage: false,
        message: null,
        extraItem : {
            id: null,
            priceSuffix: null
        },
        hasNote: true,
        note : {
            title: "Terms and Conditions",
            description: '<p class="cart__description">Customer acknowledges and agrees to enter into a binding <span class="cart__red">24-month agreement</span>,' 
                         + ' where a payment will be paid each month for twenty-four months.</p><br>'
                         + '<p class="cart__description cart__red">This plan is NOT Month-to-Month.</p><br>',
            hasExpansion: true,
            expansion: '<p class="cart__description"> Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due.</p><br>'
                        + '<p class="cart__description cart__red">PREPAID CARDS ARE NOT ACCEPTED.</p><br>'
                        +'<p class="cart__description">If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.</p><br>'
                        +'<p class="cart__description">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>'
        },
        priceSuffix: '/month'
    },
    'copy-of-alerta-patch-9': 
    {
        isSubscription: true,
        subscriptionType: 'normal',
        isExtraItem:false,
        hasExtraItem: false,
        hasMessage: false,
        message: null,
        extraItem : {
            id: null,
            priceSuffix: null
        },
        hasNote: true,
        note : {
            title: "Terms and Conditions",
            description: '<p class="cart__description">Customer acknowledges and agrees to enter into a binding <span class="cart__red">24-month agreement</span>,' 
                         + ' where a payment will be paid each month for twenty-four months.</p><br>'
                         + '<p class="cart__description cart__red">This plan is NOT Month-to-Month.</p><br>',
            hasExpansion: true,
            expansion: '<p class="cart__description"> Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due.</p><br>'
                        + '<p class="cart__description cart__red">PREPAID CARDS ARE NOT ACCEPTED.</p><br>'
                        +'<p class="cart__description">If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.</p><br>'
                        +'<p class="cart__description">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>'
        },
        priceSuffix: '/6 months'
    },
    '1-year-service-renewal':
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:false,
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
    '1-year-service-renewal-battery-replacement':
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:false,
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
    'alerta-find': 
    {
        isSubscription: false,
        subscriptionType: null,
        isExtraItem:false,
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



}


export default ItemsRelation;