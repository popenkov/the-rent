export type SButtonIconProps = {
    type?: 'button' | 'submit';
    children: React.ReactNode;
    className?: string;
    btnOnClick?: () => void;
    forwardRef?: any
}
