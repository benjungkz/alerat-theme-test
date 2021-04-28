import React from 'react'
import moment from 'moment';

const CartCardForRecurringDate = ({isSubscription, subscriptionDuration}) => {
    return(
        isSubscription?
            <p className="cart__date">
                {  
                    'The next billing date is ' + 

                    moment()
                    .add(subscriptionDuration,'months')
                    .format("MMM D, YYYY.")
                }
            </p>
        :
            null
    )
}

export default CartCardForRecurringDate;