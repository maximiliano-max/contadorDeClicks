import React from 'react';
import '../hojaStyle/contador.css'

function Contador ({ numClicks }) {
    return (
        <div className='contador'>
            { numClicks }
        </div>
    )
}

export default Contador;