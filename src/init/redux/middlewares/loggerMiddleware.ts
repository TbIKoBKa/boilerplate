// Core
import { Middleware } from 'redux';

// Instruments
import { store as rootStore } from '..';

export const loggerMiddleware: Middleware<{}, typeof rootStore> = (store) => (next) => (action) => {
    type logType = {
        before: object,
        action: object,
        after?: object,
    }

    const log: logType = {
        before: store.getState(),
        action: action,
    };

    next(action);
    log.after = store.getState();

    console.groupCollapsed(`%c${action.type}: `, 'color: #32a89d');
    for (let key in log) {
        if (key) {
            switch (key) {
                case 'before':
                    console.log(`%c${key}: `, 'color: #3881ff', log[ key ]);
                    break;
                case 'action':
                    console.log(`%c${key}: `, 'color: green', log[ key ]);
                    break;
                case 'after':
                    console.log(`%c${key}:  `, 'color: red', log[ key ]);
                    break;
                default:
            }
        }
    }
    console.groupEnd();
};

