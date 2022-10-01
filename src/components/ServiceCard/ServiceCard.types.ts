import React from "react";
import { ButtonProps } from "components/UI/Button/Button.types";

export type ServiceCardProps = {
    title?: string;
    icon?: React.ReactNode;
    subTitle?: string;
    description?: string;
    btn?: ButtonProps;
    gold?: boolean;
}