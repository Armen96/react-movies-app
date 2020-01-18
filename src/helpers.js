export const calcTime = time => {
    const hours = Math.floor(time/60);
    const min = time % 60;
    return `${hours}h ${min}m`;
};

export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 0
    });
    return formatter.format(money);
};
