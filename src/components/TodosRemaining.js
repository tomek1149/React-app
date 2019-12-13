import React from 'react';
import propTypes from 'prop-types';

const TodosRemaining = (props) => {
    return (
        <div>
            {props.remaining} items left
        </div>
    );
};

TodosRemaining.propTypes = {
    remaining: propTypes.number.isRequired,
}



export default TodosRemaining;




