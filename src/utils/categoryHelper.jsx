// src/utils/categoryHelper.js

import i18n from "../locales/i18n";

/**
 * Find category ID from slug by searching through all categories
 * @param {Array} categories - Array of categories from useCategories hook
 * @param {string} slug - Category slug from URL
 * @returns {string|null} - Category ID or null if not found
 */
export const getCategoryIdFromSlug = (categories, slug) => {
  if (!categories || !slug) return null;

  // Recursive function to search through nested categories
  const searchCategories = (categoriesList) => {
    for (const category of categoriesList) {
      // Check current category
      if (category.slug === slug) {
        return category.id.toString();
      }
      
      // Check children if they exist
      if (category.children && category.children.length > 0) {
        const found = searchCategories(category.children);
        if (found) return found;
      }
    }
    return null;
  };

  return searchCategories(categories);
};

/**
 * Get full category path (for breadcrumbs)
 * @param {Array} categories - Array of categories
 * @param {string} slug - Category slug
 * @returns {Array} - Array of category objects in path
 */
export const getCategoryPath = (categories, slug) => {
  if (!categories || !slug) return [];

  const path = [];

  const findPath = (categoriesList, targetSlug, currentPath = []) => {
    for (const category of categoriesList) {
      const newPath = [...currentPath, category];
      
      if (category.slug === targetSlug) {
        path.push(...newPath);
        return true;
      }
      
      if (category.children && category.children.length > 0) {
        if (findPath(category.children, targetSlug, newPath)) {
          return true;
        }
      }
    }
    return false;
  };

  findPath(categories, slug);
  return path;
};

/**
 * Find category object by ID
 * @param {Array} categories - Array of categories
 * @param {string|number} categoryId - Category ID
 * @returns {Object|null} - Category object or null
 */
export const findCategoryById = (categories, categoryId) => {
  if (!categories || !categoryId) return null;

  const searchById = (categoriesList) => {
    for (const category of categoriesList) {
      if (category.id.toString() === categoryId.toString()) {
        return category;
      }
      
      if (category.children && category.children.length > 0) {
        const found = searchById(category.children);
        if (found) return found;
      }
    }
    return null;
  };

  return searchById(categories);
};

export const getCategoryName = (category) => {
  if (!category) return "";
  return i18n.language === "ar" ? category.name_l1 || category.name : category.name;
};