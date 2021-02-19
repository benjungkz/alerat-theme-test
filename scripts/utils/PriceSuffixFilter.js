import React, { useState, useEffect } from 'react'

const PriceSuffixFilter = (priceSuffix) => {
    return priceSuffix != null ? <span className="cart__suffix">{priceSuffix}</span> : null
}

export default PriceSuffixFilter;