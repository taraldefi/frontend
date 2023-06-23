import React from "react";
export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
}
