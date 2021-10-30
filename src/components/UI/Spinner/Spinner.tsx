import * as React from 'react';
import { FC } from 'react';

import * as classes from './Spinner.module.scss';

const Spinner: FC = () => (
    <div className={classes.Loader}>
        Loading ...
    </div>
);

export default Spinner;
