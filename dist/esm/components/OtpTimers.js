import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, Fragment } from "react";
const OtpTimer = ({ minutes: initialMinutes = 0, seconds: initialSeconds = 30, onResend, renderText, renderButton, }) => {
    //Error Throwing
    if (initialSeconds > 59)
        throw new Error("Seconds cannot be greater than 59");
    if (initialMinutes > 59)
        throw new Error("Minutes cannot be greater than 59");
    //State
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        if (minutes === 0 && seconds === 0)
            return;
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            }
            else if (minutes > 0) {
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
    return (_jsx(Fragment, { children: minutes === 0 && seconds === 0
            ? renderButton({ onClick: handleResend })
            : renderText({ minutes, seconds }) }));
};
export default OtpTimer;
//# sourceMappingURL=OtpTimers.js.map