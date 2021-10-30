import * as React  from 'react';
import { FC } from 'react';

import * as classes from './NoCharacter.module.scss';

export const NoCharacter: FC = () => (
    <p className={classes.NoCharacter}>
        There is no Character!
    </p>
);