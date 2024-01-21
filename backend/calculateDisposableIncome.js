const calculateDisposableIncome = (income, spending) => {
    const disposableIncome = income - spending;
    return disposableIncome < 0 ? 0 : disposableIncome;
};

export default calculateDisposableIncome;
