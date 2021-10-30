import * as React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Navigation } from '../../components/UI/Navigation/Navigation';
import { Footer } from '../../components/Footer/Footer';

interface StoreProps {
    loading: boolean
};

const Layout = (props: { children?: React.ReactNode }) => {

    const { loading }: StoreProps = useSelector((state: AppState) => ({
        loading: state.common.isLoading
    })); 

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

export default Layout;