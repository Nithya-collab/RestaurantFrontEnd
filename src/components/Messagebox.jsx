import React, { useEffect } from "react";

const MessageBox = ({ message, progress, color = "green", onHide }) => {
    useEffect(() => {
        if (progress <= 0) {
            onHide(); // Call parent function to hide the message
        }
    }, [progress, onHide]);

    return (
        <div
            className={`fixed top-[60px] right-0 p-4 bg-white text-${color}-600 text-center shadow-lg rounded-md border border-${color}-600 w-64 transition-all duration-300 ease-in-out z-50`}
        >
            <p>{message}</p>
            <div className={`w-full h-2 bg-${color}-200 mt-2`}>
                <div
                    className={`h-full bg-${color}-600`}
                    style={{ width: `${progress}%`, transition: "width 0.1s ease-out" }}
                ></div>
            </div>
        </div>
    );
};

export default MessageBox;
