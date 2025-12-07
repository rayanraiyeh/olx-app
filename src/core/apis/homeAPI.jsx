import axios from "axios";
import { GET_ALL_CATEGORIES ,GET_CATEORY_FIELDS} from "./API";

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get(GET_ALL_CATEGORIES);
    return data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
};

export const fetchCategoryFields = async (currentSlug) => {
  try {
    const { data } = await axios.get(
        GET_CATEORY_FIELDS
   ,
      {
        params: {
          categorySlugs: currentSlug,
          includeChildCategories: true,
          splitByCategoryIDs: true,
          flatChoices: true,
          groupChoicesBySection: true,
          flat: true,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch category fields:", error);
    throw error;
  }
};
