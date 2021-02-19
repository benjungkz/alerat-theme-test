const MoneyFilter = (price) => {
    return '$' + (price / 100).toFixed(2);
}

export default MoneyFilter;