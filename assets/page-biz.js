$(document).ready(function(){
   
    const INPUT_COMPANY_NAME = "INPUT_COMPANY_NAME";
    const OUPUT_COMPANY_NAME = "OUPUT_COMPANY_NAME";
    const INPUT_FIRST_NAME ="INPUT_FIRST_NAME";
    const INPUT_LAST_NAME ="INPUT_LAST_NAME";
    const INPUT_EMAIL = "INPUT_EMAIL";
    const INPUT_PHONE_NUMBER = "INPUT_PHONE_NUMBER";
    const INPUT_VEHICLES = "INPUT_VEHICLES";

    // Action

    // Reducer
    const reducer = (state = {msg:"Get Estimate", flag: false}, action) =>{
        switch(action.type){
            case INPUT_COMPANY_NAME:
                return Object.assign({}, state, {msg: action.msg, flag: action.flag});
            case INPUT_FIRST_NAME:
                return Object.assign({}, state, {msg: action.msg, flag: action.flag});
            case INPUT_LAST_NAME:
                return Object.assign({}, state, {msg: action.msg, flag: action.flag});
            case INPUT_PHONE_NUMBER:
                return Object.assign({}, state, {msg: action.msg, flag: action.flag});
            case INPUT_VEHICLES:
                return Object.assign({}, state, {msg: action.msg, flag: action.flag});
            default:
                return state;
        }
    }

    // Store
    const store = Redux.createStore(reducer);

   
    // Dispatch
    $('.form__input--vehicles').on('change',(e)=>{
        let option_is_selected = $(this).find(":selected").attr("class");
        let option_msg, option_flag;

        if( option_is_selected === 'option__selected'){
            option_msg = 'See Estimate Immdiately';
            option_flag = true;
        }else{
            option_msg = 'How many vehicles do you have?';
            option_flag = false;
        }
        console.log(option_msg +option_flag );
        
        store.dispatch({
            type: INPUT_VEHICLES,
            msg: option_msg,
            flag: option_flag
        });
        
    }); 

    $('.form__input--firstName').on('change',(e)=>{
        store.dispatch({
            type: INPUT_FIRST_NAME,
            msg: `Great!!!!!`,
            flag: false
        });
    }); 

    $('.form__input--lastName').on('change',(e)=>{
        store.dispatch({
            type: INPUT_LAST_NAME,
            msg: `Good! We need more info!`,
            flag: false
        });
    }); 

    $('.form__input--phone').on('change',(e)=>{
        store.dispatch({
            type: INPUT_PHONE_NUMBER,
            msg: `Almost done! one more step!`,
            flag: false
        });
    }); 

    $('.form__input--companyName').on('change',(e)=>{
        store.dispatch({
            type: INPUT_COMPANY_NAME,
            msg: `How many vehicles do you have?`,
            flag: false
        });
    }); 

    // Subscribe
    store.subscribe(()=>{
        let { msg, flag } = store.getState();
        console.log(flag + msg);
        if(flag){
            $('.form__button--biz').attr("value", msg);
            $('.form__button--biz').removeClass("form__button--secondary"); 
            $('.form__button--biz').addClass("form__button--primary");
            $('.form__button--biz').addClass("animate__animated animate__zoomIn");
            
        }else if(flag == false){
            $('.form__button--biz').attr("value", msg);
            $('.form__button--biz').addClass("form__button--secondary"); 
            $('.form__button--biz').removeClass("form__button--primary");
        }

    });

    
});