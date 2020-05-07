export const numberFormat = (value) => {
    // basado en data: 34.37 ó 19,0000 ó 100000
    let temp = value.toString().replace(',', '').replace('.', ',');
    return value ? `${temp.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}` : 0;
};