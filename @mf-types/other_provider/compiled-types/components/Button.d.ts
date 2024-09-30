import React, { FC } from 'react';
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'rounded' | 'circle' | 'none';
};
declare const Button: FC<ButtonProps>;
export default Button;
