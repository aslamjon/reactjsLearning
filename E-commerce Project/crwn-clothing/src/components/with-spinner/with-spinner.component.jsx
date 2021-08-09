import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style';

const WithSpinner = WrqppedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrqppedComponent {...otherProps} />
    )
    }
    return Spinner;
}

export default WithSpinner;