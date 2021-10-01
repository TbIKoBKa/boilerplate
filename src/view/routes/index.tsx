// Core
import React, { FC, Suspense } from 'react';

import { Public } from './Public';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => (
    <Suspense fallback = { <Spinner /> }>
        <Public />
    </Suspense>
);
