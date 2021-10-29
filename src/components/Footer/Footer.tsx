import * as React from "react";
import { FC } from "react";

import * as classes from './Footer.module.scss';

export const Footer: FC = () => (   
    <div className={["text-center", classes.Footer].join(' ')}>
        © 2020 Copyright: <em> Sarah Banieghbal</em>
    </div>
);
