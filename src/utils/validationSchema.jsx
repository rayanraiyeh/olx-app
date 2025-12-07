// src/utils/validationSchema.js

import * as yup from "yup";

/**
 * Generate Yup validation schema dynamically from API fields + static form fields
 * @param {Array} fields - Array of field objects from API
 * @returns {Object} - Yup schema object
 */
export const generateValidationSchema = (fields) => {
  const schemaFields = {};

  fields?.forEach((field) => {
    let fieldSchema;

    // STRING VALIDATION
    if (field.valueType === "string") {
      fieldSchema = yup.string();

      if (field.minLength !== null) {
        fieldSchema = fieldSchema.min(
          field.minLength,
          `${field.name} must be at least ${field.minLength} characters`
        );
      }

      if (field.maxLength !== null) {
        fieldSchema = fieldSchema.max(
          field.maxLength,
          `${field.name} must be at most ${field.maxLength} characters`
        );
      }

      if (field.isMandatory) {
        fieldSchema = fieldSchema.required(`${field.name} is required`);
      } else {
        fieldSchema = fieldSchema.nullable().transform((value, originalValue) => {
          return originalValue === "" ? null : value;
        });
      }
    }

    // NUMBER VALIDATION (float and integer)
    else if (field.valueType === "float" || field.valueType === "integer") {
      fieldSchema = yup
        .number()
        .nullable()
        .transform((value, originalValue) => {
          return originalValue === "" || originalValue === null ? null : value;
        })
        .typeError(`${field.name} must be a valid number`);

      if (field.valueType === "integer") {
        fieldSchema = fieldSchema.integer(`${field.name} must be a whole number`);
      }

      if (field.minValue !== null) {
        fieldSchema = fieldSchema.min(
          field.minValue,
          `${field.name} must be at least ${field.minValue}`
        );
      }

      if (field.maxValue !== null) {
        fieldSchema = fieldSchema.max(
          field.maxValue,
          `${field.name} must be at most ${field.maxValue}`
        );
      }

      if (field.isMandatory) {
        fieldSchema = fieldSchema.required(`${field.name} is required`);
      }
    }

    // ENUM VALIDATION (single select)
    else if (field.valueType === "enum") {
      fieldSchema = yup.mixed().nullable();

      if (field.isMandatory) {
        fieldSchema = fieldSchema.test(
          "is-not-empty",
          `${field.name} is required`,
          (value) => {
            return value !== null && value !== undefined && value !== "";
          }
        );
      }
    }

    // ENUM MULTIPLE VALIDATION (multi select)
    else if (field.valueType === "enum_multiple") {
      fieldSchema = yup.array();

      if (field.isMandatory) {
        fieldSchema = fieldSchema
          .min(1, `At least one ${field.name} must be selected`)
          .required(`${field.name} is required`);
      } else {
        fieldSchema = fieldSchema.nullable();
      }
    }

    // Add field to schema if validation was defined
    if (fieldSchema) {
      schemaFields[field.attribute] = fieldSchema;
  
    }
  });

  // ========================================
  // STATIC FIELDS (Always Present)
  // ========================================

  // Ad Title - Required, 1-70 characters
  schemaFields.title = yup
    .string()
    .required("Ad title is required")
    .min(1, "Ad title must be at least 1 character")
    .max(70, "Ad title must be at most 70 characters");

  // Description - Required, 1-4096 characters
  schemaFields.description = yup
    .string()
    .required("Description is required")
    .min(1, "Description must be at least 1 character")
    .max(4096, "Description must be at most 4096 characters");

  // Location - Required
  schemaFields.location = yup.string().required("Location is required");

  // Name - Required
  schemaFields.name = yup.string().required("Name is required");

  // Mobile Phone - Required, Lebanese phone number format
  schemaFields.mobilePhone = yup
    .string()
    .required("Mobile phone number is required")
    .matches(
      /^[0-9]{8}$/,
      "Mobile phone must be 8 digits"
    );

  // Country Code - Required (but disabled in UI)
  schemaFields.countryCode = yup.string().required();

  // Contact Method - Required
  schemaFields.contactMethod = yup
    .string()
    .oneOf(["phone", "chat", "both"], "Invalid contact method")
    .required("Contact method is required");


  return yup.object().shape(schemaFields);
};