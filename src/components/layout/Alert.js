import React from 'react';

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`qlert alert-${alert.type}`}>
                <i className="fas fa-info-circle"/> {alert.msg}
            </div>
        )
    );
};

export default Alert;
