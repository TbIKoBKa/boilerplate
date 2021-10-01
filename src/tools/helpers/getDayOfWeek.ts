export const getDayOfWeek = (date: number) => {
    const days = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ];
    const dayNumber = new Date(date).getDay();

    return days[ dayNumber ];
};
