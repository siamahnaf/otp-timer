import React from "react";
interface OtpTimerProps {
    minutes?: number;
    seconds?: number;
    onResend: () => void;
    renderText: (props: {
        minutes: number;
        seconds: number;
    }) => React.ReactNode;
    renderButton: (props: {
        onClick: () => void;
    }) => React.ReactElement<HTMLButtonElement>;
}
declare const OtpTimer: ({ minutes: initialMinutes, seconds: initialSeconds, onResend, renderText, renderButton, }: OtpTimerProps) => import("react/jsx-runtime").JSX.Element;
export default OtpTimer;
