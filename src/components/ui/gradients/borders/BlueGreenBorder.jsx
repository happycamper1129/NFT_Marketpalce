import React from 'react';

const BlueGreenBorder = ({children, rounded = '3xl'}) => {
    return (
        <div className={`rounded-${rounded} bg-gradient-to-tr from-blue-300 via-teal-500 to-indigo-500 p-0.5`}>
            <div className={`bg-white rounded-${rounded}`}>
                {children}
            </div>
        </div>
    );
};

export default BlueGreenBorder;