"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Otptimer = (props) => {
    //From props
    const { text = "Resend otp in", containerClass = "otp-timer-container", buttonText = "Resend", textClass = "otp-text", buttonContainerClass = "button-container", timerClass = "otp-timer", buttonStyle, buttonContainerStyle, timerStyle, textStyle, textContainerStyle, onResend, fetching = false, buttonClass, showSpinner = false, spinnerComponent } = props;
    //State
    const [minutes, setMinutes] = react_1.default.useState(props.minutes ? props.minutes : 0);
    const [seconds, setSeconds] = react_1.default.useState(props.seconds ? props.seconds : 30);
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
    react_1.default.useEffect(() => {
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
    return ((0, jsx_runtime_1.jsx)("div", { children: minutes === 0 && seconds === 0 ? ((0, jsx_runtime_1.jsx)("div", { className: buttonContainerClass, style: buttonContainerStyle, children: (0, jsx_runtime_1.jsxs)("button", { onClick: resendHandler, className: buttonClass, style: ButtonStyles, children: [(0, jsx_runtime_1.jsx)("span", { children: buttonText }), showSpinner && fetching &&
                        spinnerComponent] }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: containerClass, style: textContainerStyles, children: [(0, jsx_runtime_1.jsx)("span", { className: textClass, style: textStyle, children: text }), " ", (0, jsx_runtime_1.jsxs)("span", { className: timerClass, style: timerStyle, children: [(0, jsx_runtime_1.jsx)("span", { children: minutes < 10 ? `0${minutes}` : minutes }), ":", (0, jsx_runtime_1.jsx)("span", { children: seconds < 10 ? `0${seconds}` : seconds })] })] })) }));
};
exports.default = Otptimer;
//# sourceMappingURL=Otptimer.js.map