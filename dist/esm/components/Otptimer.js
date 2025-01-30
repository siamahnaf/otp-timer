import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const Otptimer = (props) => {
    //From props
    const { text = "Resend otp in", containerClass = "otp-timer-container", buttonText = "Resend", textClass = "otp-text", buttonContainerClass = "button-container", timerClass = "otp-timer", buttonStyle, buttonContainerStyle, timerStyle, textStyle, textContainerStyle, onResend, fetching = false, buttonClass, showSpinner = false, spinnerComponent } = props;
    //State
    const [minutes, setMinutes] = React.useState(props.minutes ? props.minutes : 0);
    const [seconds, setSeconds] = React.useState(props.seconds ? props.seconds : 30);
    //Handler
    let myInterval;
    const onTimeHandler = () => {
        myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                }
                else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
    };
    //Effect
    React.useEffect(() => {
        onTimeHandler();
        return () => clearInterval(myInterval);
    });
    //Handler
    const resendHandler = () => {
        setSeconds(props.seconds ? props.seconds : 30);
        setMinutes(props.minutes ? props.minutes : 0);
        onTimeHandler();
        onResend();
    };
    //Styling
    const ButtonStyles = Object.assign({ border: "none", background: "none", cursor: "pointer", padding: 0, margin: 0 }, buttonStyle);
    const textContainerStyles = Object.assign({ fontSize: "15px" }, textContainerStyle);
    return (_jsx("div", { children: minutes === 0 && seconds === 0 ? (_jsx("div", { className: buttonContainerClass, style: buttonContainerStyle, children: _jsxs("button", { onClick: resendHandler, className: buttonClass, style: ButtonStyles, children: [_jsx("span", { children: buttonText }), showSpinner && fetching &&
                        spinnerComponent] }) })) : (_jsxs("div", { className: containerClass, style: textContainerStyles, children: [_jsx("span", { className: textClass, style: textStyle, children: text }), " ", _jsxs("span", { className: timerClass, style: timerStyle, children: [_jsx("span", { children: minutes < 10 ? `0${minutes}` : minutes }), ":", _jsx("span", { children: seconds < 10 ? `0${seconds}` : seconds })] })] })) }));
};
export default Otptimer;
//# sourceMappingURL=Otptimer.js.map