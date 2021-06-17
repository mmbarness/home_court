import React from 'react';

function ResetMapButton(props) {
    return (
        <button
            onClick={ () => (props.panTo(props.center)) }
        >
            <img src="/volleyball.svg" alt="compass" />
        </button>
    );
}

export default ResetMapButton