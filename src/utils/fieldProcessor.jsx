// src/utils/fieldProcessor.js

/**
 * Process API response to get fields for a specific category
 * @param {Object} apiResponse - Full API response with all categories
 * @param {string} categoryId - Category ID (e.g., "60", "62", "63")
 * @returns {Array} - Array of field objects ready to render
 */
export const processFieldsData = (apiResponse, categoryId) => {
  if (!apiResponse || !categoryId) {
    console.warn("Missing apiResponse or categoryId");
    return [];
  }

  const category = apiResponse[categoryId];
  
  if (!category) {
    console.warn(`Category ${categoryId} not found in API response`);
    return [];
  }


  // Filter and sort fields
  const formFields = (category.flatFields || [])
    .filter(field => {
      // Only show active fields
      if (field.state !== 'active') return false;
      
      // Don't show system-only fields (badges, special filters, etc.)
      if (field.roles.includes('exclude_from_post_an_ad')) return false;
      
      return true;
    })
    // Sort by displayPriority (lower number = shows first)
    .sort((a, b) => a.displayPriority - b.displayPriority);

  
  return formFields;
};
