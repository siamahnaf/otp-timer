"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const OtpTimer = ({ minutes: initialMinutes = 0, seconds: initialSeconds = 30, onResend, renderText, renderButton, }) => {
    //Error Throwing
    if (initialSeconds > 59)
        throw new Error("Seconds cannot be greater than 59");
    if (initialMinutes > 59)
        throw new Error("Minutes cannot be greater than 59");
    //State
    const [minutes, setMinutes] = (0, react_1.useState)(initialMinutes);
    const [seconds, setSeconds] = (0, react_1.useState)(initialSeconds);
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: minutes === 0 && seconds === 0
            ? renderButton({ onClick: handleResend })
            : renderText({ minutes, seconds }) }));
};
exports.default = OtpTimer;
//# sourceMappingURL=OtpTimers.js.map