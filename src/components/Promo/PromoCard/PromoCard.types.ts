type TagProps = {
    label: string;
    link: string;
}

export type PromoCardProps = {
    title: string;
    description: string;
    mode?: 'wide' | 'normal';
    img: string;
    tags?: TagProps[];
    iconLink?: string;
}