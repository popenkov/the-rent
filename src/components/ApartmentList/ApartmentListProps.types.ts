import { ApartmentCardProps } from "components/ApartmentCard/ApartmentCard.types"; 

export type ApartmentListProps = {
    apartments: ApartmentCardProps[];
    cardsPerPage: number;
    currentPage: number;
    isListMode?: boolean;
}