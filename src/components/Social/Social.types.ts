import { PlacesOfUse } from "core/constants/social.constant";

type SocialProps = {
    name: string;
    link?: string;
    icon: string;
}

export type SocialBlockProps = {
    title?: string;
    socials: SocialProps[];
    isForSharing?: boolean;
    placeOfUse?: PlacesOfUse.Footer | PlacesOfUse.News | PlacesOfUse.Contacts | PlacesOfUse.ContactsRight |PlacesOfUse.Apartments;
}
