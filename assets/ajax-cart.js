$(document).ready(function(){
    
    // Ajax Cart
    var config = {
        shopifyGetCartURL: '/cart.js',
        ShopifyAddCartURL: '/cart/add.js',
        ShopifyChangeCartURL: '/cart/change.js',
        ShopifyUpdateCartURL: '/cart/update.js'
    }  

    var ALERTA_FIND_HANDLE_NAME = 'alerta-find';
    
    //BOLD CART
    const bold_cart =  BoldSubscriptions.cart;
    console.log(BoldSubscriptions.cart);
   

    // Fetch Data
    function fetchAjaxCart(){
    
        $.getJSON(config.shopifyGetCartURL, function(cart){
        
            // Delete previous Cart
            $('.ajax-cart-drawer__body').empty();
            
            // Empty Cart
            if(cart.item_count !=0 ){
                $('.ajax-cart-drawer__button--checkout').removeClass('ajax-cart-deactivate');
                renderAjaxCart(cart);
            }else{
                // Empty Cart
                var empty_template = `
                <div class="card card--cart">
                    <div class="card__container card__container--cart">
                        <div class="card__body card__body--cart">
                        <h5 class="card__title card__title--cart">Cart is empty</h5>
                        </div>
                    </div>
                </div>`;
                
                // Upsell Cart
                // var upsell_template = `
                // <div class="card card--cart">
                //     <div class="card__container card__container--cart">
                //         <div class="card__header card__header--cart">
                //          <h5 class="card__title card__title--cart">More items to explore</h5>
                //         </div>
                //         <div class="card__body card__body--cart">
                //             <div class="card__video">
                //                 <video class="card__video--upsell" autoplay loop muted playsinline>
                //                     <source src="https://cdn.shopify.com/s/files/1/1661/6207/files/alerta-kit-video.mp4?36487" type="video/mp4">
                //                 </video>
                //             </div>
                //             <h4 class="card__title">Alerta Patch & Wedge</h4>
                //             <h6 class="card__subtitle">Wearable Proximity Monitor</h6>
                //         </div>
                //         <div class="card__footer card__footer--cart">
                //             <a class="btn btn--upsell" href="/products/get-started-kit"><h5 class="btn--cart">Leran More</h5></a>
                //         </div>
                //     </div>
                // </div>`;
                
                $('.ajax-cart-drawer__body').html(empty_template);
                
                // Promotion Cart
                
                // Disable checkout button
                $('.ajax-cart-drawer__button--checkout').addClass('ajax-cart-deactivate');
            }
              
        });
    }                
    
    // Render Cart
    function renderAjaxCart(cart){

        var productTitle, productDesc, productOriginalPrice, productRetailPrice,
            productCouponName, productCouponPrice, productQty, productMsg ;
        
        var original_cart_total = cart.total_price;
        var discounted_total = 0;

        var cart_status = [];
        cart_status['length'] = 0;

        // Product handle
        const imgURL = {
            'alerta-find' : 'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-find-new-collection.png?30161)',
            'get-started-kit'  : 'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-kit-ver1_62fd75a6-6d69-420a-8184-0b781c04f9e5.png?v=1568401124)',
            'alerta-patch-refill-kit-subscription-1-months' :  'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-patches.png?26132)',
            'alerta-patch-refill-kit-subscription-3-months' :  'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-patches.png?26132)',
            'alerta-patch-refill-kit-subscription-6-months' :  'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-patches.png?26132)',
            'alerta-find-corporate': 'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-find-new-collection.png?30161)',
            'alerta-find-subscription': 'url(//cdn.shopify.com/s/files/1/1661/6207/files/alerta-find-new-collection.png?30161)',
            'replacement-alerta-wedge-battery':'url(https://cdn.shopify.com/s/files/1/1661/6207/files/cart-thumbnail-bettary.jpg?v=1602120498)'
        }

        console.log(cart.items);

        // Iiterate
        cart.items.forEach(function(item){     
            
            // Config
            var product = {
                title: item.product_title,
                description : item.product_description,
                originalPrice : item.original_line_price,
                // couponName : item.properties._coupon_name,
                // couponPrice : item.properties._coupon_amount,
                variantName: item.variant_title,
                qty : item.quantity,
                imgURL : item.featured_image.url,
                //imgAlt : item.featured_image.alt,
                id : item.variant_id,
                handle: item.handle,
                variant: item.variant
            }    
                        
            // Template
            var template = {
                item : $('<div class="ajax-cart-drawer__item" product-id=""></div>'),
                button: $('<div class="ajax-cart-drawer__button ajax-cart-drawer__button--cancel"><span>&#10006;<span></div>'),
                img : $('<div class="ajax-cart-drawer__img"></div>'),
                content: {
                            wrap :  $('<div class="ajax-cart-drawer__content"></div>'),
                            product: $('<div class="ajax-cart-drawer__product"></div>'),
                            order: {
                                        wrap : $('<div class="ajax-cart-drawer__order"></div>'),
                                        price: $('<div class="ajax-cart-drawer__price"></div>'),
                                        qty: $('<div class="ajax-cart-drawer__qty"></div>')
                                    },
                            msg: $('<div class="ajax-cart-drawer__msg"></div>')
                            },
                // coupon: $('<div class="ajax-cart-drawer__coupon flex-row"></div>'),
                paypal: $('<div class="ajax-cart-drawer__paypal flex-row box-shadow"></div>')
            }
            
            // Elements
            var product_title="";
            if(product.variantName != null){
                product_title = product.title +' (' + product.variantName + ")";
            }else{
                product_title = product.title;
            }

            productTitle = '<h6 class="ajax-cart-drawer__title">' + product_title + '</h6>';           
            productDesc = '<p class="ajax-cart-drawer__desc">' + descFilter(product.description) + '</p>';
            productRetailPrice = '<h6 class="ajax-cart-drawer__price--retail">' + 
                                     moneyFilter(product.originalPrice) + 
                                  '</h6>';
                                  
            // productCouponName  = '<span class="ajax-cart-drawer__desc--couponName">' + product.couponName + ' - </span>';
            // productCouponPrice = '<span class="ajax-cart-drawer__desc--couponprice">&nbsp;'+ moneyFilter(product.couponPrice) + ' OFF (each) </span>';      
            productQty = '<div class="ajax-cart-drawer__down">-</div>' +
                         '<p class="ajax-cart-drawer__desc ajax-cart-drawer__count">'+ product.qty + '</p>' +
                         '<div class="ajax-cart-drawer__up">+</div>';
            //productImg = '<img class="ajax-cart-drawer__thumnail" src="'+ product.imgURL +'" alt="' + product.imgAlt + '"></div>';
            
            productMsg =    
            '<h6 class="ajax-cart-drawer__msg--title">Terms and Condition (Subscription)</h6>' +
            '<p class="ajax-cart-drawer__msg--desc">Customer acknowledges and agrees to enter into a binding <strong>24-month agreement</strong>, where a payment will be paid each month for twenty-four months (<strong>This is not a month-to-month agreement</strong>).' +
            '<p class="ajax-cart-drawer__msg--desc">Per this agreement, Customer authorizes Track Patch 1 Corporation to charge customer’s credit card each month for the amount due. <strong>PREPAID CARDS ARE NOT ACCEPTED</strong>. If a prepaid card payment is processed, the purchase amount will be refunded minus an 8% processing fee.'+
            '<p class="ajax-cart-drawer__msg--desc">Purchaser may cancel the agreement before the 24-month period ends, after having paid a $40.00 cancellation fee and returned the product with a return material authorization number, which number can be obtained by calling Track Patch 1 customer service at 1-833-325-3782. Monthly charges will stop during the billing period which follows receipt of returned product.</p>';
            // Render
            var drawerItem = template.item.attr('product-id',product.id);
            var drawerbutton = template.button;
            var drawerImg = '';

            if(item.handle == 'get-started-kit'){
                drawerImg = template.img.css('background',imgURL['get-started-kit'] );
            }else{
                drawerImg = template.img.css('background', `url(${product.imgURL})`);
    
            }
            
            var drawerContent = template.content.wrap;
            var drawerProduct = template.content.product.html(productTitle);
            var drawerMsg = template.content.msg.html(productMsg);
        
            var drawerOrder = template.content.order.wrap;
                var drawerPrice = template.content.order.price.html(productRetailPrice);
                var drawerQty = template.content.order.qty.html(productQty);

            // var drawerCoupon = template.coupon.html(productCouponName + productCouponPrice);
        
             

            // Order
            drawerPrice.appendTo(drawerOrder);
            drawerQty.appendTo(drawerOrder);

            // Content
            drawerbutton.appendTo(drawerContent);
            drawerProduct.appendTo(drawerContent);            
            drawerOrder.appendTo(drawerContent);

            
            // Item
            drawerImg.appendTo(drawerItem);
            drawerContent.appendTo(drawerItem);
            if(product.handle.includes('subscription')) {
                drawerMsg.appendTo(drawerItem);
            }
        
            
            // Fecth drawer body
            drawerItem.appendTo('.ajax-cart-drawer__body');    
            
            // Calc Subtotal
            // discounted_total = discounted_total + (product.originalPrice - (product.couponPrice * product.qty));

            // // Update cart status
            // cart_status[product.handle] = product.qty;
            // cart_status['length'] = cart_status['length'] + 1;
            // cart_status['paypal'] = calculateMonthlyPrice( product.originalPrice, product.couponPrice, product.qty); 
                    
        });
        
        // Fetch drawer on footer
        $('.ajax-cart-drawer-footer .ajax-cart-drawer__checkout').attr('value','Checkout - ' + moneyFilter(original_cart_total));

    }
    

    // Money String Filter
    function moneyFilter(price){
        return '$' + (price / 100).toFixed(2);
    }

    // Description Filter
    function descFilter(desc){
        var endPoint = desc.indexOf(".");
        return desc.substring(0, endPoint + 1);

    }
   

    // Clear cart
    function clearAjaxCart(){
        $('.ajax-cart-drawer__body').empty();
    }

    // Change Cart
    function changeAjaxCart(id, qty){
        console.log(id);
        console.log(qty);
        jQuery.post(config.ShopifyChangeCartURL, {  'id': id, 'quantity': qty, 'line': 1 }, function(data){

            // Delete previous Cart
            clearAjaxCart();

            // Rander
            fetchAjaxCart();
            
        });
    }

    // Update Cart
    function updateAjaxCart(id, qty){
       

        jQuery.post(config.ShopifyUpdateCartURL, "updates["+id+"]="+qty, function(data){
            
              // Delete previous Cart
              clearAjaxCart();    
             
              // Rander
              fetchAjaxCart();
          });
    }

    // Add Cart
    function addAjaxCart( datas ){

        console.log(datas);

        jQuery.post('/cart/add.js',datas)
        .then(function(){
             //Delete previous Cart
             clearAjaxCart();
    
             // Rander
             fetchAjaxCart();

             // Open Drawer
             openCartDrawer();
        });
    }



    // Update Cart Handler (+)
    $(document).on('click', '.ajax-cart-drawer__up', function(event){
        
        // Retrive current qty, variant id
        var currentQty = parseInt($(this).parent().children('.ajax-cart-drawer__desc').text());
        console.log("current QTY (before): " + currentQty);
        currentQty = currentQty + 1;

        console.log("current QTY (after): " + currentQty);
        var currentProductId = parseInt($(this).parents('.ajax-cart-drawer__item').attr('product-id'));

        console.log(currentProductId);
        console.log(currentQty);

                                    
        // Request
        updateAjaxCart(currentProductId, currentQty);        
    });

    // Update Cart Handler (-)
    $(document).on('click', '.ajax-cart-drawer__down', function(event){
        
        // Retrive current qty, variant id
        var currentQty = parseInt($(this).parent().children('.ajax-cart-drawer__desc').text());
        console.log("current QTY (before): " + currentQty);
        var currentProductId = parseInt($(this).parents('.ajax-cart-drawer__item').attr('product-id'));

        // Request compare!!
        if(currentQty == 1){
            updateAjaxCart( currentProductId, 0 );
        }else{
            currentQty--;
            console.log("current QTY (after): " + currentQty);
            updateAjaxCart(currentProductId, currentQty);        
        }

    });

    // Cancel Handler
    $(document).on('click', '.ajax-cart-drawer__button--cancel span', function(event){

        // Retrive variant id
        var currentProductId = parseInt($(this).parents('.ajax-cart-drawer__item').attr('product-id'));

        //request
        updateAjaxCart( currentProductId, 0 );

    });


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Add Handler
    $(document).on('click', '.btn--pricing', function(event){
        event.preventDefault();

        var datas = {
            items:[]
        };
        
        // Single
        var single_options = $('.product__variant');

        single_options.each((index, item)=>{
            var option = $(item);    

            // Normal variants product
            if(option.attr('option') == 'true' && option.attr('group') == undefined){

                var id = parseInt(option.attr('value'));
                var qty = parseInt($('.qty__number').text());
                
                datas.items.push({
                    quantity: qty,
                    id: id
                });
            
            }else if(option.attr('option') == 'true' && option.attr('group') == ""){

                var id = parseInt(option.attr('value'));
                var qty = parseInt($('.qty__number').text());
                
                datas.items.push({
                    quantity: qty,
                    id: id
                });
                
            // Subscription variants product
            }else if(option.attr('option') == 'true' && option.attr('group') != ''){
                var id = parseInt(option.attr('value'));
                var qty = parseInt($('.qty__number').text());
                var group = parseInt(option.attr('group'));
                var frequency_number = parseInt(option.attr('number'));
                
                // Add
                datas.items.push({
                    
                    id: id,
                    quantity: qty,
    
                    properties: {
                        'frequency_num': frequency_number,
                        'frequency_type': 3,
                        'frequency_type_text': 'Month(s)',
                        'group_id': group
                    }
                });
                
            }
        });
       
        //Kit Radio
        var option_radio_buttons = $('input[name=kit-option]');
        var selceted_option_product_id = option_radio_buttons.filter(':checked').val();
        if(selceted_option_product_id != undefined){
            
            datas.items.push({
                quantity: 1,
                id: parseInt(selceted_option_product_id)
            })

            console.log(datas);

           
        }
        
        //Battery Options
        var battery_option_radio_buttons = $('input[name=kit-battery]');       
        var battery_product_id = battery_option_radio_buttons.filter(':checked').val();
        if(battery_product_id != undefined ){
            datas.items.push({
                quantity: 1,
                id: parseInt(battery_product_id)
            })
        }

                
        // Subscription Options
        var subscription_option_radio_buttons = $('input[name=kit-prk]');

        var product_id = subscription_option_radio_buttons.filter(':checked').val();
        var group_id = subscription_option_radio_buttons.filter(':checked').attr('group');
        var frequency_num = subscription_option_radio_buttons.filter(':checked').attr('number');

        if(product_id !=undefined && group_id !=undefined){
            datas.items.push({
                
                id: parseInt(product_id),
                quantity: 1,

                properties: {
                    'frequency_num': parseInt(frequency_num),
                    'frequency_type': 3,
                    'frequency_type_text': 'Month(s)',
                    'group_id': parseInt(group_id)
                }
            });
        }

        var json_datas = JSON.stringify(datas);

        addAjaxCart(datas);
      
    })

    //Radio Button Handler (Only Kit)
    $(document).on('click', '.pricing__radio--kit', function(event){
        // Checking
        radioCheckHandler(this);

        // Change Image
        changeImage(this);

        // Chagne summary and total
        changeSummaryAndTotal();

    });

    //Radio Button Handler (All)
    $(document).on('click', '.pricing__radio', function(event){

        // Chagne summary and total
        changeSummaryAndTotal();
    });

    function radioCheckHandler(el){
        var el_checked = $(el).hasClass('checked');
        var el_name = $(el).attr('name');
        
        if ( el_name != 'kit-option' && el_checked ){
            $(el).prop("checked", false);
            $(el).removeClass('checked');

        }else if(el_name != 'kit-option' && !el_checked){
            $(el).prop("checked", true);
            $(el).addClass('checked');
        }
    }
    const images_url = [
        'https://cdn.shopify.com/s/files/1/0303/7033/2812/files/kit-none-option.png?v=1601517741',
        'https://cdn.shopify.com/s/files/1/0303/7033/2812/files/kit-2-months-supply-option.png?v=1601517988',
        'https://cdn.shopify.com/s/files/1/0303/7033/2812/files/kit-5-months-supply-option.png?v=1601517988'
    ]
    function changeImage(el){
        var el_name = $(el).attr('name');
        var el_radio_index = $(el).attr('index');
        var el_image = $('.pricing__image--kit > img');

        console.log(el_name);
        console.log(el_radio_index)
        console.log(el_image)

      

        if (el_name == 'kit-option'){
            console.log(el_radio_index);
            switch(el_radio_index){
                case '1':

                    el_image.attr('src',images_url[0]);
                    break;
                case '2':
                    console.log("case2");
                    el_image.attr('src',images_url[1]);
                    break;
                case '3':
                    el_image.attr('src',images_url[2]);
                    break;
                default:
                    el_image.attr('src',images_url[0]);
            }
        }else{
            console.log("not");
        }
       
    }

    function changeSummaryAndTotal(el){
        var checked_buttons =  $('.pricing__radio:checked');
        var total = 0;
        var summary = "";

        const FIND_SKU_PREFIX = 'AFD';
        const KIT_SKU_PREIFIX = 'GSK';
        const KIT_BASE_NAME = 'Get Started Kit';
        const FIND_BASE_NAME = 'Alerta Find';

        // Change Total
        $.each(checked_buttons, (index, item)=>{
                var item_price = parseInt($(item).attr('price'));
                console.log(total);
                total = total + item_price;
        });   
        $('.js-pricing__label--total').text(moneyFilter(total));

        
        // Change summary
        $.each(checked_buttons, (index, item)=>{
            
            
            var name = $(item).attr('product-name');
            var sku = $(item).attr('sku');
            var subscirption = $(item).attr('subscription');
            var price =  moneyFilter(parseInt($(item).attr('price')));
            
        
            
            
            
            // For Kit
            if(sku != undefined && sku.search(KIT_SKU_PREIFIX) != -1){
                var month = parseInt(sku.substring(12,14)) / 3;
                var tag_name = `${KIT_BASE_NAME} (${month}-Month supply)`;
                
                summary = createTagOnPricingPage(summary, tag_name, price);
            }else if(sku != undefined && sku.search(FIND_SKU_PREFIX) != -1 && subscirption == "true"){
                console.log("for find");
                for(var i=2; i<=2; i++){
                   var tag = $(item).attr('tag'+ i); 
                   var divider = tag.indexOf('-');
                   var tag_name = `${FIND_BASE_NAME}${tag.substring(0, divider)}`;
                   var tag_price = tag.substring(divider + 1, tag.length + 1 );
                   summary = createTagOnPricingPage(summary, tag_name, tag_price);
                }
            }else{
                console.log("normal");
                summary = createTagOnPricingPage(summary, name, price);
            }

            
            
          
        
        })  

        //console.log(tag);
        //summary = tag;
        $('.js-pricing__tags').html(summary);

    }

    function createTagOnPricingPage( summary, name, price ){
        console.log(`${name} // ${price} // ${summary}`);
        return summary + `<div class="pricing__tag">
            <h4 class="pricing__label pricing__label--tag">${name}</h4>
            <h4 class="pricing__label pricing__label--tag">${price}</h4>
         </div>
        `;
    }

    // Fetch Handler
    function closeCartDrawer(){
        // Close cart
        $('.ajax-cart-drawer').removeClass('ajax-cart-drawer--active');
        $('.ajax-cart-drawer').addClass('ajax-cart-drawer--deactive');
        
        // Delete overlay
        $('.ajax-cart__overlay').removeClass('ajax-cart-activate');

    }     
    
    function openCartDrawer(){
        // Open cart
        $('.ajax-cart-drawer').removeClass('ajax-cart-drawer--deactive');
        $('.ajax-cart-drawer').addClass('ajax-cart-drawer--active');

        // Draw Overlay
        $('.ajax-cart__overlay').addClass('ajax-cart-activate');

        // Scroll top
        $(document).scrollTop(0);
    }

    // Open cart on click
    $('.header__menu--cart').on('click', function(event){
        console.log("cart click");
        openCartDrawer();
    });

    $('.icon__cart').on('click', function(event){
        console.log("cart click");
        openCartDrawer();
    });
    

    // Close cart when back button is clicked
    $(document).on('click', '.ajax-cart-drawer__header', function(event){
        closeCartDrawer();
    });

    // Close cart when space is clicked
    $('.ajax-cart__overlay').click(function(event){
    
        // Get Drawer
        var ajax_cart = $('.ajax-cart-drawer--active');
        
        // Drawer is open
        if(ajax_cart.length > 0){
            var box_height = ajax_cart.css("height");
            var x = ajax_cart.offset().left;
            var top_y = ajax_cart.offset().top;
            var bottom_y = Number(box_height.replace('px', ''));
        
            //Close Drawer
            if(event.pageX < x || event.pageY < top_y || event.pageY > bottom_y){
                closeCartDrawer();
            }
        }
    
    });

    // Close the cart when checkout button is clicked
    $('.ajax-cart-drawer__checkout').click(function(event){
        closeCartDrawer();
    })

    // Open Modal
    $('.ajax-cart__subscripit').hover(function(){ 
        $('.ajax-cart-drawer__modal').addClass('ajax-cart-activate');
    });

    // Close Modal
    $('.icon-exit').click(function(){
        $('.ajax-cart-drawer__modal').removeClass('ajax-cart-activate');
    })

    
    // Init
    console.log("ajax-cart");
    
    fetchAjaxCart();

    

});





