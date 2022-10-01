type PopularItemProps = {
    label: string;
    link: string;
    count?: number;
}

export type PopularListProps = {
    title: string;
    list: PopularItemProps[];
    limit: number;
}