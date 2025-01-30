import React from 'react';
interface Props {
    seconds?: number;
    minutes?: number;
    text?: string;
    buttonText?: string;
    containerClass?: string;
    buttonContainerClass?: string;
    textClass?: string;
    timerClass?: string;
    buttonStyle?: React.CSSProperties;
    buttonClass?: string;
    textStyle?: React.CSSProperties;
    timerStyle?: React.CSSProperties;
    buttonContainerStyle?: React.CSSProperties;
    textContainerStyle?: React.CSSProperties;
    onResend: () => void;
    fetching?: boolean;
    showSpinner?: boolean;
    spinnerComponent?: React.ReactNode;
}
declare const Otptimer: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default Otptimer;
