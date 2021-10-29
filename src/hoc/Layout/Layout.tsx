import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Navigation } from '../../components/UI/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';

interface StoreProps {
    loading: boolean
};

export default (props: { children?: React.ReactNode }) => {

    const { loading }: StoreProps = useSelector((state: AppState) => ({
        loading: state.common.isLoading
    }));

    const [isSideDrawerVisible, setIsSideDrawerVisible] = useState<boolean>(false);
    const toggleSideDrawerHandler = () => {
        setIsSideDrawerVisible(prevIsSideDrawerVisible => !prevIsSideDrawerVisible);
    };

    return (
        <div>
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer />
            {loading && <Spinner />}
        </div>
    );
};
