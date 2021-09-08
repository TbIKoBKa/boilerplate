// Core
import React, { FC, DetailedHTMLProps, Ref } from 'react';

interface DListProps extends DetailedHTMLProps<React.OlHTMLAttributes<HTMLDListElement>, HTMLDListElement> {
    ref?: Ref<HTMLDListElement>;
    main?: boolean;
}

export const DList: FC<DListProps> = ({ children, ...otherProps }) => {
    return (
        <dl { ...otherProps }>
            {children}
        </dl>
    );
};
