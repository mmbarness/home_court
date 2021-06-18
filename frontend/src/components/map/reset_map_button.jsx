import React from 'react';

function ResetMapButton(props) {
    return (
        <button
            onClick={ () => (props.panTo(props.center)) }
        >
            {props.text}
        </button>
    );
}

export default ResetMapButton