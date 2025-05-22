"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const isStyleObject = (obj) => typeof obj === "object" && obj !== null;
const OtpInput = ({ value = "", numInputs = 4, onChange, onPaste, renderInput, shouldAutoFocus = false, inputType = "text", renderSeparator, placeholder, containerStyle, inputStyle, skipDefaultStyles = false, }) => {
    const [activeInput, setActiveInput] = react_1.default.useState(0);
    const inputRefs = react_1.default.useRef([]);
    const getOTPValue = () => (value ? value.toString().split("") : []);
    const isInputNum = inputType === "number" || inputType === "tel";
    react_1.default.useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, numInputs);
    }, [numInputs]);
    react_1.default.useEffect(() => {
        var _a;
        if (shouldAutoFocus) {
            (_a = inputRefs.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [shouldAutoFocus]);
    const getPlaceholderValue = () => {
        if (typeof placeholder === "string") {
            if (placeholder.length === numInputs) {
                return placeholder;
            }
            if (placeholder.length > 0) {
                console.error("Length of the placeholder should be equal to the number of inputs.");
            }
        }
        return undefined;
    };
    const isInputValueValid = (value) => {
        const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === "string";
        return isTypeValid && value.trim().length === 1;
    };
    const handleChange = (event) => {
        const { value } = event.target;
        if (isInputValueValid(value)) {
            changeCodeAtFocus(value);
            focusInput(activeInput + 1);
        }
    };
    const handleInputChange = (event) => {
        const { nativeEvent } = event;
        const value = event.target.value;
        if (!isInputValueValid(value)) {
            if (value.length === numInputs) {
                const hasInvalidInput = value.split("").some((cellInput) => !isInputValueValid(cellInput));
                if (!hasInvalidInput) {
                    handleOTPChange(value.split(""));
                    focusInput(numInputs - 1);
                }
            }
            // @ts-expect-error - This was added previously to handle and edge case
            // for dealing with keyCode "229 Unidentified" on Android. Check if this is
            // still needed.
            if (nativeEvent.data === null && nativeEvent.inputType === "deleteContentBackward") {
                event.preventDefault();
                changeCodeAtFocus("");
                focusInput(activeInput - 1);
            }
            event.target.value = "";
        }
    };
    const handleFocus = (event) => (index) => {
        setActiveInput(index);
        event.target.select();
    };
    const handleBlur = () => {
        setActiveInput(activeInput - 1);
    };
    const handleKeyDown = (event) => {
        const otp = getOTPValue();
        if ([event.code, event.key].includes("Backspace")) {
            event.preventDefault();
            changeCodeAtFocus("");
            focusInput(activeInput - 1);
        }
        else if (event.code === "Delete") {
            event.preventDefault();
            changeCodeAtFocus("");
        }
        else if (event.code === "ArrowLeft") {
            event.preventDefault();
            focusInput(activeInput - 1);
        }
        else if (event.code === "ArrowRight") {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        else if (event.key === otp[activeInput]) {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        else if (event.code === "Spacebar" ||
            event.code === "Space" ||
            event.code === "ArrowUp" ||
            event.code === "ArrowDown") {
            event.preventDefault();
        }
    };
    const focusInput = (index) => {
        var _a, _b;
        const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
        if (inputRefs.current[activeInput]) {
            (_a = inputRefs.current[activeInput]) === null || _a === void 0 ? void 0 : _a.focus();
            (_b = inputRefs.current[activeInput]) === null || _b === void 0 ? void 0 : _b.select();
            setActiveInput(activeInput);
        }
    };
    const changeCodeAtFocus = (value) => {
        const otp = getOTPValue();
        otp[activeInput] = value[0];
        handleOTPChange(otp);
    };
    const handleOTPChange = (otp) => {
        const otpValue = otp.join("");
        onChange(otpValue);
    };
    const handlePaste = (event) => {
        var _a;
        event.preventDefault();
        const otp = getOTPValue();
        let nextActiveInput = activeInput;
        const pastedData = event.clipboardData
            .getData("text/plain")
            .slice(0, numInputs - activeInput)
            .split("");
        if (isInputNum && pastedData.some((value) => isNaN(Number(value)))) {
            return;
        }
        for (let pos = 0; pos < numInputs; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
                otp[pos] = (_a = pastedData.shift()) !== null && _a !== void 0 ? _a : "";
                nextActiveInput++;
            }
        }
        focusInput(nextActiveInput);
        handleOTPChange(otp);
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: Object.assign({ display: "flex", alignItems: "center" }, isStyleObject(containerStyle) && containerStyle), className: typeof containerStyle === "string" ? containerStyle : undefined, onPaste: onPaste, children: Array.from({ length: numInputs }, (_, index) => index).map((index) => {
            var _a, _b, _c;
            return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [renderInput({
                        value: (_a = getOTPValue()[index]) !== null && _a !== void 0 ? _a : "",
                        placeholder: (_c = (_b = getPlaceholderValue()) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : undefined,
                        ref: (element) => {
                            inputRefs.current[index] = element;
                        },
                        onChange: handleChange,
                        onFocus: (event) => handleFocus(event)(index),
                        onBlur: handleBlur,
                        onKeyDown: handleKeyDown,
                        onPaste: handlePaste,
                        autoComplete: "off",
                        "aria-label": `Please enter OTP character ${index + 1}`,
                        style: Object.assign(!skipDefaultStyles ? { width: "1em", textAlign: "center" } : {}, isStyleObject(inputStyle) ? inputStyle : {}),
                        className: typeof inputStyle === "string" ? inputStyle : undefined,
                        type: inputType,
                        inputMode: isInputNum ? "numeric" : "text",
                        onInput: handleInputChange,
                    }, index), index < numInputs - 1 && (typeof renderSeparator === "function" ? renderSeparator(index) : renderSeparator)] }, index));
        }) }));
};
exports.default = OtpInput;
//# sourceMappingURL=OtpInput.js.map