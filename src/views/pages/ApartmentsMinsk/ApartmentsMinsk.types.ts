import { ApartmentCardProps } from "components/ApartmentCard/ApartmentCard.types"; 
import { RecommendationProps } from "./Recommendations/Recommendations.types";

export type ApartmentsMinskProps = {
    apartments: ApartmentCardProps[];
    cardsPerPage: number;
    currentPage: number;
    isListMode?: boolean;
    city?: string;
    metro?: string;
    district?: string;
    rooms?: string;
    priceFrom?: number | string;
    priceTo?: number | string;
    peopleCount?: number | string;
    recommendations?: RecommendationProps[];
    options?: string[];
    listMode?: boolean;
    sortMode?: string;
}