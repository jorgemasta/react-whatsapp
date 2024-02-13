import React, { useState } from 'react';
import styles from './send-button.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const defaultProps = {
    sendButtonText: 'Start Chat',
    inputPlaceHolder: 'Type a message',
};

const SendButton = ({
    phoneNumber,
    inputPlaceHolder = defaultProps.inputPlaceHolder,
    sendButtonText = defaultProps.sendButtonText,
}) => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        if (!phoneNumber) {
            window.alert('Invalid Phone Number');
            return false;
        }
        window.open(`https://wa.me/${phoneNumber}?text=${message}`);
        setMessage('');
    };

    return (
        <div className={styles.root}>
            <button className={styles.button} onClick={handleClick}>
                <FaWhatsapp />
                {sendButtonText}
            </button>
        </div>
    );
};

export default SendButton;
