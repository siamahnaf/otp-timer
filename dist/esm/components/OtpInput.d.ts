import React from "react";
type AllowedInputTypes = "password" | "text" | "number" | "tel";
type InputProps = Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "onFocus" | "onBlur" | "onKeyDown" | "onPaste" | "aria-label" | "autoComplete" | "style" | "inputMode" | "onInput"> & {
    ref: React.RefCallback<HTMLInputElement>;
    placeholder: string | undefined;
    className: string | undefined;
    type: AllowedInputTypes;
}>;
interface OTPInputProps {
    value?: string;
    numInputs?: number;
    onChange: (otp: string) => void;
    onPaste?: (event: React.ClipboardEvent<HTMLDivElement>) => void;
    renderInput: (inputProps: InputProps, index: number) => React.ReactNode;
    shouldAutoFocus?: boolean;
    placeholder?: string;
    renderSeparator?: ((index: number) => React.ReactNode) | React.ReactNode;
    containerStyle?: React.CSSProperties | string;
    inputStyle?: React.CSSProperties | string;
    inputType?: AllowedInputTypes;
    skipDefaultStyles?: boolean;
}
declare const OtpInput: ({ value, numInputs, onChange, onPaste, renderInput, shouldAutoFocus, inputType, renderSeparator, placeholder, containerStyle, inputStyle, skipDefaultStyles, }: OTPInputProps) => import("react/jsx-runtime").JSX.Element;
export type { OTPInputProps, InputProps, AllowedInputTypes };
export default OtpInput;
