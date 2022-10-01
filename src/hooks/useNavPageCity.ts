import { PagesLinks } from "core/constants/pagesLinks.constant"; 

export const useNavPageCity = (city, navigate) => {

    switch (city) {
      case 'Минск':
        navigate(PagesLinks.APARTMENTS_MINSK_PAGE);
        break;
      case 'Гомель':
        navigate(PagesLinks.APARTMENTS_GOMEL_PAGE);
        break;
      case 'Брест':
        navigate(PagesLinks.APARTMENTS_BREST_PAGE);
        break;
      case 'Витебск':
        navigate(PagesLinks.APARTMENTS_VITEBSK_PAGE);
        break;
      case 'Гродно':
        navigate(PagesLinks.APARTMENTS_GRODNO_PAGE);
        break;
      case 'Могилев':
        navigate(PagesLinks.APARTMENTS_MOGILEV_PAGE);
        break;
      default:
        navigate(PagesLinks.APARTMENTS_PAGE);
        break;
    }
  };