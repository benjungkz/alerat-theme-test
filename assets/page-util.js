$(document).ready(function(){

    //Chatbox Animation
    animateChatbox();
    openChatbox();

    // Set policy index
    setPolicyClass();
    setPolicyIndexList();

    // Smooth Scrolling init
    //var scroll = new SmoothScroll('a[href*="#"]',{});

    // Set FAQ questions list
    openQusetionList();

    // Set Business Page Animation
    businessPageAnimation();

});



// faqList Util
function openQusetionList(){
    // Set FAQ Acoordion
    var faq_accordion = $('.accordion-returning').length;

    if(faq_accordion){
        new Accordion(['.accordion-find','.accordion-kit','.accordion-returning','.accordion-subscription'],{
            duration: 100
        });  
    }
    
    $('.FaqList__menu').on('click', function(e){
        console.log('click menu')
        // Privious button
        $('.FaqList__menu').removeClass('FaqList__menu--selected');
        $('.FaqList__title').removeClass("FaqList__title--selected");

        // selected button
        $(this).addClass("FaqList__menu--selected");
        $(this).find('.FaqList__title').addClass("FaqList__title--selected");

        // set List
        var current_menu = $(this).text().trim().toLowerCase();
        if(current_menu.includes('kit')){
            current_menu = "kit"
        }
        console.log(current_menu);

        $('.FaqList__init').addClass("FaqList__init--deactivate");
        $('.FaqList__list').removeClass("FaqList__list--activate");
        $('.accordion-'+ current_menu).addClass("FaqList__list--activate");
        //$('.FaqList__solution').addClass("FaqList__solution--activate");
    })
}
function setPolicyClass(){
    var policy = $('.policy');
    policy.each(function(index, item){   
        $(item).find('.policy__content h3').addClass("policy__index");
        $(item).find('.policy__content h6').addClass("policy__desc");
         
    });
}
function setPolicyIndexList(){
    var policy = $('.policy');
    
    
    policy.each(function(index, item){
        
        var policy_title = $(item).find('.policy__title').first().text().replace(/ /gi, "");
        var policy_index = $(item).find('.policy__index');
        var currnet_policy_url = window.location.href;
        var policy_list = "";

        policy_index.each(function(index, item){
            // Set id
            var policy_index_id = policy_title + '-' + (index + 1);
            $(item).attr('id', policy_index_id);

            // Set index list
            policy_list = policy_list +
                            `<li>
                                <a href="${currnet_policy_url}#${policy_index_id}">
                                    <h6>${$(item).text()}</h6>   
                                </a>
                            </li>`;           
        });
        
        $(item).find('.policy__list').html(policy_list);
        
        policy_list = "";

    });
    
    // // Set box position
    // var policy_row = policy.find('.grid__row').last();
    // var policy_row_offset_top = policy_row.offset().top;    
    // $('.policy__box').css('top', policy_row_offset_top);

}

// Chatbox Util
function openChatbox(){
    $('.tagline__btn--chat').on('click', function(e){
        console.log("Open the chatbox");
        e.preventDefault();
        $('.bcFloat a').trigger('click');
    })
}
function animateChatbox(){
    setTimeout(function(){
        $('.bcFloat').addClass('bc-active');
    }, 10000);

    setTimeout(function(){
        $('.bcFloat').removeClass('bc-active');
    }, 18000);
}

// Develop
function productPageCouponPirceHandler(){
    // console.log("handelr activate");
    // $('.product__price--normal').addClass('product__price--activate');

    // $('.product__bedge--checkbox').change(function(){
    //     if(this.checked){
    //         $('.product__price--normal').removeClass('product__price--activate');
    //         $('.product__price--discount').addClass('product__price--activate');
    //         $('.product__price--retail').addClass('product__price--activate');
    //     }else{
    //         $('.product__price--normal').addClass('product__price--activate');
    //         $('.product__price--discount').removeClass('product__price--activate');
    //         $('.product__price--retail').removeClass('product__price--activate');
    //     }
    // })
}
function businessPageAnimation(){
    $('.feature--business').hover(
    function(e){
        $(e.target).find('.feature__icon').addClass('animate__animated animate__flipInY animate__fast');
    },
    function(e){
        $(this).find('.feature__icon').removeClass('animate__animated animate__flipInY animate__fast');
    })
}
