import React from "react";
import './style.scss';

interface IScreenWrapperProps {
    children: React.ReactNode;
}

const ScreenWrapper = ({ children }: IScreenWrapperProps) => {
    return (
        <div className="screen-wrapper">
            {children}
        </div>
    )
}

export default ScreenWrapper;