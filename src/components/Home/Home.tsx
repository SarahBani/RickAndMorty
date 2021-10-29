import * as React from "react";
import { FC } from "react";

import { CharacterList } from "../Characters/CharacterList/CharacterList";

export const Home: FC = () => (
    <div className="container">
       <CharacterList />
    </div>
);
