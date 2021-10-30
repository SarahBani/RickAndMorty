import * as React from 'react';
import { Fragment, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import * as actions from '../../store/actions/commonActions';
import { ModalTypeEnum } from '../../shared/enums';
import { AppState } from '../../store';

interface StoreProps {
    error: string
};

const withErrorHandler = (WrappedComponent: FC<any>) => {

    return (props: any) => {

        const { error }: StoreProps = useSelector((state: AppState) => ({
            error: state.common.error
        }));
        const dispatch = useDispatch();

        const onHideErrorHandler = useCallback(() => {
            dispatch(actions.clearError());
        }, [dispatch]);

        return (
            <Fragment>
                <Modal type={ModalTypeEnum.Warning} isShown={!!error} onHide={onHideErrorHandler} >
                    {error}
                </Modal>
                <WrappedComponent {...props} />
            </Fragment>
        );

    };
};

const withErrorHandlerWrapper = (WrappedComponent: FC<any>) => withErrorHandler(WrappedComponent);
export default withErrorHandlerWrapper;