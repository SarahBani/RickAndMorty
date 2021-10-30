import * as React from "react";
import { FC } from "react";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { CharacterList } from "../Characters/CharacterList/CharacterList";

const Home: FC = () => (
    <div className="container">
       <CharacterList />
    </div>
);

export default withErrorHandler(Home);
