const ProductRelation = {
    'alerta-find-subscription':
    {
        optionType: 'custom',
        options: [
            {
                isSubscription: true,
                isTermAndCondtions: true,
                isExtraItem: true,
                isAdditionalItmes: true,
                hasIcon: true,
                variantId: null,
                handle: 'alerta-find-subscription',
                properties:{
                    'frequency_num': null,
                    'frequency_type': 3,
                    'frequency_type_text': 'Month(s)',
                    'group_id': null
                },
                name: 'Monthly',
                price: 999,
                priceSuffix: '/mo',
                description :'Find Device + Mobile App Activation Service 7/24 Customer Center Access 24 months contract',
                extraItem: {
                    variantId: null,
                    name: 'Activation Fee',
                    price: 9900,
                    description: '(one-time)'
                },
                additionalItems:[
                    {
                        variantId: "gid://shopify/ProductVariant/34452252754060",
                        name: 'Battery Replacement',
                        price: 25999,
                        handle: 'battery-replacement'
                    },
                ]
            },
            {
                isSubscription: false,
                isTermAndCondtions: false,
                isExtraItem: false,
                isAdditionalItmes: true,
                hasIcon: false,
                variantId: null,
                handle: '',
                properties: null,
                name: '2-Year Service',
                price: 25900,
                priceSuffix: '',
                description :'',
                extraItem: null,
                additionalItems:[
                    {
                        variantId: 'gid://shopify/ProductVariant/34452248133772',
                        name: '1-Year Service Renewal',
                        handle: '1-year-service-renewal',
                        price: 25999
                    },
                    {
                        variantId: 'gid://shopify/ProductVariant/34452252754060',
                        name: 'Battery Replacement',
                        handle: 'battery-replacement',
                        price: 10900

                    },
                    {
                        variantId: 'gid://shopify/ProductVariant/34452256161932',
                        name: '1-Year Service Renewal + Battery Replacement',
                        handle: '1-year-service-renewal-battery-replacement',
                        price: 17900
                    }
                ]
            },
        ],

        
    }
}

export default ProductRelation;