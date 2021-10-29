import * as React from "react";
import { FC } from "react";

export const About: FC = () => (
    <div className="container">

        <p className="row">
            <b>
                This project is implemented in the following technologies and frameworks:
            </b>
        </p>

        <ul>
            <li><em>React 17.0.2</em></li>
            <li><em>Axios API for Promise based HTTP client</em></li>
            <li><em>Redux for State Management</em></li>
            <li><em>Redux-Saga a middleware library for efficiently handling asynchronous side effects</em></li>
            <li><em>JavaScript / ES6</em></li>
            <li><em>HTML 5</em></li>
            <li><em>Sass / SCSS</em></li>
            <li><em>Bootstrap 4.6.0</em></li>
        </ul>
        
    </div>
);
