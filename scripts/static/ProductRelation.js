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
                variantId: 34238005379212,
                handle: 'alerta-find-subscription',
                properties:{
                    'frequency_num': 1,
                    'frequency_type': 3,
                    'frequency_type_text': 'Month(s)',
                    'group_id': 167286
                },
                name: 'Monthly',
                price: 999,
                priceSuffix: '/month',
                description :'<p class="productOption__description">Find Device and Mobile App</p>'
                            +'<p class="productOption__description">Activation Service 7/24</p>'
                            +'<p class="productOption__description">Customer Center Access</p>'
                            +'<p class="productOption__description">24 months contract</p>',
                extraItem: {
                    variantId: 34444280889484,
                    name: 'Activation Fee',
                    price: 9900,
                    description: '(one-time)'
                },
                additionalItems:[
                    {
                        variantId: 34452252754060,
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
                variantId: 34209197031564,
                handle: 'alerta-find',
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

        
    },
    'get-started-kit':
    {
        optionType: 'normal',
    }
}

export default ProductRelation;