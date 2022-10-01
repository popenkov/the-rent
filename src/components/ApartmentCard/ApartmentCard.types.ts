import { UserCardProps } from "components/UserCard/UserCard.types";

export type ApartmentCardProps = {
    id: number;
    title?: string;
    address?: {
        city: string;
        street: string;
        metro?: string;
        district?: string;
    };
    img?: string[];
    status?: string;
    price?: number;
    peopleCount?: number;
    peopleCountByRoom?: string;
    rooms?: string;
    square?: number;
    description?: string;
    options?: string[];
    owner?: UserCardProps;
    like?: boolean;
}