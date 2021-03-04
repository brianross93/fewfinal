import React from 'react';
import data from './metal.json'

function Metal() {
    let counter  = Object.keys(data).length;
    return (
        <p>
         Total Bands: {counter}
        </p>
    )

}

export default Metal
