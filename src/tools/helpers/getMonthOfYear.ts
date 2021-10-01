export const getMonthOfYear = (date: number) => {
    const months = [ 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря' ];
    const monthNumber = new Date(date).getMonth();

    return months[ monthNumber ];
};
