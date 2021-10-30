import * as React from 'react';
import { FC } from "react";

import * as classes from './NotFound.module.scss';

export const NotFound: FC = () => (
    <h2 className={classes.NotFound}>
        Page Not Found!
    </h2>
);