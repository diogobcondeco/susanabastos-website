import React from "react";
import './Button.scss';

interface Message {
    message: string;
}

const Button: React.FC<Message> = ({message}) => {
    return (
        <>
            <button className="messageButton">{message}</button>
        </>
    );
};

export default Button;
