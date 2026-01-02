import React, { useEffect, useState, Fragment } from "react";

interface OtpTimerProps {
    minutes?: number;
    seconds?: number;
    onResend: () => void;
    renderText: (props: { minutes: number; seconds: number }) => React.ReactNode;
    renderButton: (props: { onClick: () => void }) => React.ReactElement<HTMLButtonElement>;
}

const OtpTimer = ({ minutes: initialMinutes = 0, seconds: initialSeconds = 30, onResend, renderText, renderButton, }: OtpTimerProps) => {
    //Error Throwing
    if (initialSeconds > 59) throw new Error("Seconds cannot be greater than 59");
    if (initialMinutes > 59) throw new Error("Minutes cannot be greater than 59");

    //State
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (minutes === 0 && seconds === 0) return;

        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            } else if (minutes > 0) {
                setMinutes((prev) => prev - 1);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    const handleResend = () => {
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
        onResend();
    };

    return (
        <Fragment>
            {minutes === 0 && seconds === 0
                ? renderButton({ onClick: handleResend })
                : renderText({ minutes, seconds })}
        </Fragment>
    );
};

export default OtpTimer;