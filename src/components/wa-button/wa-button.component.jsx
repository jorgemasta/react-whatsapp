import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChatContext } from '../../contexts/chat.context';
import styles from './wa-button.module.css';

const WaButton = () => {
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);

    const handleOpen = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className={styles.root} onClick={handleOpen}>
            <span className={styles.hidden}>Chat</span>
            <span className={styles.bubble}></span>
            <FaWhatsapp />
        </div>
    );
};

export default WaButton;
