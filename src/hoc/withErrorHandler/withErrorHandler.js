import React from 'react';
import useHttpErrorHandler from '../../hooks/http-err-handler';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Au/Au';



const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
      const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);

        return (
            <Aux>
                <Modal show={error}
                    modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </Aux>

        );
    }

}

export default withErrorHandler;