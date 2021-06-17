import React from 'react';

function ResetMapButton(props) {
    return (
        <button
            onClick={ () => (props.panTo(props.center)) }
        >
            Reset Location
        </button>
    );
}

export default ResetMapButton