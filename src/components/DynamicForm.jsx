
import { yupResolver } from "@hookform/resolvers/yup";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { processFieldsData } from "../utils/fieldProcessor";
import { generateValidationSchema } from "../utils/validationSchema";
import {
  FormChipSelect,
  FormDropdownList,
  FormInput,
  FormMultiCheckbox,
} from "./FormComponents/FormComponents";

export const DynamicForm = ({ categoryId, fieldsData, onSubmit, t }) => {
  const [fields, setFields] = useState([]);

  // Generate validation schema from fields (includes both dynamic and static fields)
  const validationSchema = useMemo(() => {
    return generateValidationSchema(fields);
  }, [fields]);

  // Initialize React Hook Form with Yup resolver
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      // Dynamic fields will be added by processFieldsData
      // Static fields defaults
      title: "",
      description: "",
      location: "",
      name: "",
      mobilePhone: "",
      countryCode: "+961",
      contactMethod: "both",
    },
  });

  // Watch field values for character count
  const titleValue = watch("title");
  const descriptionValue = watch("description");

  // Process fields when category changes
  useEffect(() => {
    if (fieldsData && categoryId) {
      const processedFields = processFieldsData(fieldsData, categoryId);

      setFields(processedFields);
      reset(); // Reset form when category changes
    }
  }, [categoryId, fieldsData, reset]);

  // Handle form submission
  const onSubmitForm = (data) => {
    console.log("📤 Complete Form Data Submitted:", data);
    onSubmit(data);
  };

  // Helper to get placeholder text
  const getPlaceholderText = (field) => {
    if (field.valueType === "float" || field.valueType === "integer") {
      if (field.minValue !== null && field.maxValue !== null) {
        return `${field.minValue} - ${field.maxValue}`;
      } else if (field.minValue !== null) {
        return `Min: ${field.minValue}`;
      } else if (field.maxValue !== null) {
        return `Max: ${field.maxValue}`;
      }
    }
    return `Enter ${field.name.toLowerCase()}`;
  };

  // Render dynamic field based on type
  const renderDynamicField = (field) => {
    return (
      <Controller
        name={field.attribute}
        control={control}
        defaultValue={
          field.valueType === "enum_multiple"
            ? []
            : field.valueType === "enum"
            ? null
            : ""
        }
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
          const errorMessage = error?.message;

          // STRING FIELD
          if (field.valueType === "string") {
            return (
              <Box>
                <FormInput
                  placeholder={getPlaceholderText(field)}
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  helperText=""
                  error={!!errorMessage}
                  withoutLabel
                  inputProps={{
                    minLength: field.minLength,
                    maxLength: field.maxLength,
                  }}
                />
                {errorMessage && (
                  <Typography
                    variant="errorText"
                  >
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            );
          }

          // NUMBER FIELDS (float and integer)
          if (field.valueType === "float" || field.valueType === "integer") {
            return (
              <Box>
                <FormInput
                  type="number"
                  placeholder={getPlaceholderText(field)}
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  helperText=""
                  error={!!errorMessage}
                  withoutLabel
                  startAdornment={
                    field.attribute === "price"
                      ? "$"
                      : field.attribute === "ft"
                      ? "m²"
                      : null
                  }
                  inputProps={{
                    min: field.minValue,
                    max: field.maxValue,
                    step: field.valueType === "integer" ? 1 : "any",
                  }}
                />
                {errorMessage && (
                  <Typography
                    variant="errorText"
                  >
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            );
          }

          // SINGLE SELECT (enum)
          if (field.valueType === "enum") {
            const chipFields = [
              "ownership",
              "furnished",
              "condition",
              "property_age",
              "payment_option",
              "price_type",
            ];

            if (
              chipFields.includes(field.attribute) ||
              (field.choices && field.choices.length <= 5)
            ) {
              return (
                <Box>
                  <FormChipSelect
                    field={{ ...field, name: "" }}
                    value={value}
                    onChange={(attr, val) => {
                      onChange(val);
                      if (isSubmitted) {
                        setTimeout(() => onBlur(), 0);
                      }
                    }}
                    error={null}
                  />
                  {errorMessage && (
                    <Typography
                      variant="errorText"
                    >
                      {errorMessage}
                    </Typography>
                  )}
                </Box>
              );
            }

            return (
              <Box>
                <FormDropdownList
                  placeholder={`Select ${field.name.toLowerCase()}`}
                  data={field.choices || []}
                  value={value || null}
                  onChange={(val) => {
                    onChange(val);
                    if (isSubmitted) {
                      setTimeout(() => onBlur(), 0);
                    }
                  }}
                  accessName="label"
                  accessValue="value"
                  helperText=""
                  required={field.isMandatory}
                  variant="outlined"
                  withoutLabel
                />
                {errorMessage && (
                  <Typography
                    variant="errorText"
                  >
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            );
          }

          // MULTIPLE SELECT (enum_multiple)
          if (field.valueType === "enum_multiple") {
            return (
              <Box>
                <FormMultiCheckbox
                  field={{ ...field, name: "" }}
                  value={value || []}
                  onChange={(attr, val) => {
                    onChange(val);
                    if (isSubmitted) {
                      setTimeout(() => onBlur(), 0);
                    }
                  }}
                  error={null}
                />
                {errorMessage && (
                  <Typography
                    variant="errorText"
                    
                  >
                    {errorMessage}
                  </Typography>
                )}
              </Box>
            );
          }

          return (
            <Typography variant="caption" color="error">
              Unknown field type: {field.valueType}
            </Typography>
          );
        }}
      />
    );
  };

  return (
    <Paper elevation={2} className="p-8 mt-6">
      <Box component="form" onSubmit={handleSubmit(onSubmitForm)} noValidate>
        {fields.length > 0 && (
          <>
            <Typography variant="h5" gutterBottom className="mb-6">
              {t("Property Details")}
            </Typography>

            <Box className="flex flex-col gap-6">
              {fields.map((field) => (
                <Grid container spacing={2} key={field.id} alignItems="flex-start">
                  <Grid item size={{xs:12,sm:3}}>
                    <Typography
                      variant="body1"
                      className={`font-medium ${errors[field.attribute] ? 'text-red-600' : 'text-black'} ${field.valueType === 'enum_multiple' || (field.valueType === 'enum' && field.choices?.length <= 5) ? '' : 'pt-2'}`}
                    >
                      {field.name}
                      {field.isMandatory && <span className="text-red-600">*</span>}
                    </Typography>
                  </Grid>
                  <Grid item size={{xs:12,sm:9}} >
                    {renderDynamicField(field)}
                  </Grid>
                </Grid>
              ))}
            </Box>
          </>
        )}

        {/* Static Fields Section */}
        <Box className={fields.length > 0 ? 'mt-8' : ''}>
          <Typography variant="h5" gutterBottom className="mb-6">
            {t("Additional Details")}
          </Typography>

          <Box className="flex flex-col gap-6">
            {/* Ad Title */}
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography
                  variant="body1"
                  className={`font-medium pt-2 ${errors.title ? 'text-red-600' : 'text-black'}`}
                >
                  {t("Ad title")}
                  <span className="text-red-600">*</span>
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Controller
                  name="title"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box>
                      <FormInput
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        placeholder={t("Enter title")}
                        error={!!error}
                        withoutLabel
                        inputProps={{ maxLength: 70 }}
                      />
                      <Typography
                        variant="caption"
                        className={`block mt-1 ${error ? 'text-red-600' : 'text-gray-500'}`}
                      >
                        {error?.message ||
                          `${titleValue?.length || 0}/70 - ${t(
                            "Mention the key features of your item (e.g. brand, model, age, type)"
                          )}`}
                      </Typography>
                    </Box>
                  )}
                />
              </Grid>
            </Grid>

            {/* Description */}
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography
                  variant="body1"
                  className={`font-medium pt-2 ${errors.description ? 'text-red-600' : 'text-black'}`}
                >
                  {t("Description")}
                  <span className="text-red-600">*</span>
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Controller
                  name="description"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box>
                      <FormInput
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        placeholder={t("Describe the item you're selling")}
                        error={!!error}
                        withoutLabel
                        multiline
                        rows={4}
                        inputProps={{ maxLength: 4096 }}
                      />
                      <Typography
                        variant="caption"
                        className={`block mt-1 ${error ? 'text-red-600' : 'text-gray-500'}`}
                      >
                        {error?.message ||
                          `${descriptionValue?.length || 0}/4096 - ${t(
                            "Include condition, features and reason for selling"
                          )}`}
                      </Typography>
                    </Box>
                  )}
                />
              </Grid>
            </Grid>

            {/* Location */}
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography
                  variant="body1"
                  className={`font-medium pt-2 ${errors.location ? 'text-red-600' : 'text-black'}`}
                >
                  {t("Location")}
                  <span className="text-red-600">*</span>
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Controller
                  name="location"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box>
                      <FormInput
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        placeholder={t("Select Location")}
                        error={!!error}
                        withoutLabel
                        startAdornment={<SearchIcon />}
                      />
                      {error && (
                        <Typography
                          variant="caption"
                          className="text-red-600 mt-1 block"
                        >
                          {error.message}
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Grid>
            </Grid>

            {/* Name */}
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography
                  variant="body1"
                  className={`font-medium pt-2 ${errors.name ? 'text-red-600' : 'text-black'}`}
                >
                  {t("Name")}
                  <span className="text-red-600">*</span>
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Box>
                      <FormInput
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        placeholder={t("Enter your name")}
                        error={!!error}
                        withoutLabel
                      />
                      {error && (
                        <Typography
                          variant="caption"
                          className="text-red-600 mt-1 block"
                        >
                          {error.message}
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography
                  variant="body1"
                  className={`font-medium pt-2 ${errors.mobilePhone ? 'text-red-600' : 'text-black'}`}
                >
                  {t("Mobile Phone Number")}
                  <span className="text-red-600">*</span>
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Box className="flex gap-2">
                  <Controller
                    name="countryCode"
                    control={control}
                    render={({ field }) => (
                      <FormInput
                        value={field.value}
                        onChange={field.onChange}
                        disabled
                        sx={{width:"100px"}}
                        withoutLabel
                      />
                    )}
                  />
                  <Controller
                    name="mobilePhone"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box className="flex-1">
                        <FormInput
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          placeholder=""
                          error={!!error}
                          withoutLabel
                        />
                        {error && (
                          <Typography
                            variant="caption"
                            className="text-red-600 mt-1 block"
                          >
                            {error.message}
                          </Typography>
                        )}
                      </Box>
                    )}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Contact Method */}
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item size={{xs:12,sm:3}}>
                <Typography variant="body1" className="font-medium pt-2">
                  {t("Contact Method")}
                </Typography>
              </Grid>
              <Grid item size={{xs:12,sm:9}} >
                <Controller
                  name="contactMethod"
                  control={control}
                  render={({ field }) => (
                    <Box className="flex gap-2 flex-wrap">
                      <Chip
                        label={t("Phone Number")}
                        onClick={() => field.onChange("phone")}
                        color={field.value === "phone" ? "primary" : "default"}
                        variant={field.value === "phone" ? "filled" : "outlined"}
                      />
                      <Chip
                        label={t("OLX Chat")}
                        onClick={() => field.onChange("chat")}
                        color={field.value === "chat" ? "primary" : "default"}
                        variant={field.value === "chat" ? "filled" : "outlined"}
                      />
                      <Chip
                        label={t("Both")}
                        onClick={() => field.onChange("both")}
                        color={field.value === "both" ? "primary" : "default"}
                        variant={field.value === "both" ? "filled" : "outlined"}
                      />
                    </Box>
                  )}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <Button type="submit" variant="postButton"  className="w-fit">
            {t("Post Now")}
          </Button>
        </div>
      </Box>
    </Paper>
  );
};