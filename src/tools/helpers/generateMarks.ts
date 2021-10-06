// Types
import { Mark } from '@mui/material';

export const generateMarks = (min: number, max: number, step: number) => {
    const marks: Mark[] = [];

    for (let i = min; i <= max; i += step) {
        marks.push({ value: i, label: `${i}°C` });
    }

    return marks;
};
