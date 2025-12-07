// src/components/FormComponents.jsx

import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  Box,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import i18n from "../../locales/i18n";
import { getLocalizedValue } from "../../core/helpers/CommonHelpers";

// Global helper function for localization


export const FormInput = (props) => {
  const {
    variant = "outlined",
    onClick,
    onBlur,
    startAdornment,
    endAdornment,
    placeholder,
    onChange,
    helperText,
    type = "text",
    fullWidth = true,
    error,
    size = "small",
    withoutLabel,
    showPasswordToggle = false,
    showClearIcon,
    inputProps,
    className
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type;

  const getEndAdornment = () => {
    if (showPasswordToggle) {
      return (
        <>
          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          {endAdornment}
        </>
      );
    }

    if (showClearIcon && props.value) {
      return (
        <IconButton size="small" onClick={() => onChange("")} edge="end">
          <ClearIcon />
        </IconButton>
      );
    }

    return endAdornment;
  };

  const finalEndAdornment = getEndAdornment();

  return (
    <TextField
      {...props}
      className={props.className}
      fullWidth={fullWidth}
      onClick={onClick}
      onBlur={onBlur}
      value={props.value}
      variant={variant}
      type={inputType}
      placeholder={placeholder}
      error={error}
      onChange={(e) => onChange(e.target.value)}
      label={withoutLabel ? "" : placeholder}
      helperText={helperText}
      disabled={props.disabled}
      inputRef={inputRef}
      inputProps={inputProps}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: finalEndAdornment && (
          <InputAdornment position="end">{finalEndAdornment}</InputAdornment>
        ),
        autoComplete: "new-password",
        form: { autoComplete: "off" },
      }}
      sx={{
        ...props.sx,
        "& .MuiInputLabel-root": {
          color: "#c6c6c6",
          margin: startAdornment ? "4px 0px 0px 30px" : "4px 0px 0px 5px",
          transition: "all 0.2s ease",
          "&.Mui-focused": {
            color: "#c6c6c6",
          },
          "&.MuiFormLabel-filled": {
            color: "#41b8ea",
            margin: "2px 0px 0px 0px",
            zIndex: "5",
          },
          "&.Mui-error": {
            color: "#c6c6c6",
          },
          "&.Mui-error.MuiFormLabel-filled": {
            color: "#41b8ea",
          },
        },
      }}
      InputLabelProps={{
        shrink: props.value ? true : false,
      }}
      size={size}
    />
  );
};

export const FormDropdownList = (props) => {
  const {
    data,
    noOptionsText,
    loading,
    onChange,
    helperText,
    accessName,
    accessValue = "id",
    startAdornment,
    endAdornment,
    withoutLabel,
    sx,
  } = props;
  const { placeholder, variant, disabled, required, value } = props;

  const [val, setVal] = useState(null);

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Autocomplete
      {...props}
      size="small"
      disabled={disabled}
      fullWidth
      disableClearable={required}
      ListboxProps={{
        style: { maxHeight: 200, overflow: "auto" },
      }}
      getOptionLabel={(option) => getLocalizedValue(option, accessName)}
      options={data || []}
      value={val}
      isOptionEqualToValue={(option, value) =>
        option?.[accessValue] == value?.[accessValue]
      }
      sx={{
        ...sx,
        width: {
          xs: "100%",
        },
        background: "transparent",
      }}
      loadingText={"Loading"}
      noOptionsText={noOptionsText || "No options"}
      loading={loading}
      onChange={(event, selected) => {
        !disabled && onChange(selected);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant || "outlined"}
          placeholder={placeholder}
          helperText={helperText}
          disabled={disabled}
          name={props.name}
          label={withoutLabel ? "" : placeholder}
          size="small"
          sx={{
            "& .MuiInputLabel-root": {
              color: "#c6c6c6",
              margin: startAdornment ? "4px 0px 0px 30px" : "4px 0px 0px 5px",
              transition: "all 0.2s ease",
              "&.Mui-focused": {
                color: "#c6c6c6",
              },
              "&.MuiFormLabel-filled": {
                color: "#41b8ea",
                margin: "2px 0px 0px 0px",
                zIndex: "5",
              },
              "&.Mui-error": {
                color: "#c6c6c6",
              },
              "&.Mui-error.MuiFormLabel-filled": {
                color: "#41b8ea",
              },
            },
          }}
          InputLabelProps={{
            shrink: params?.inputProps.value ? true : false,
          }}
          InputProps={{
            ...params.InputProps,
            style: { height: props.height || "auto" },
            autoComplete: "new-password",
            form: {
              autoComplete: "off",
            },
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {endAdornment && (
                  <InputAdornment position="end">{endAdornment}</InputAdornment>
                )}
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export const FormMultiCheckbox = ({ field, value, onChange, error }) => {
  const selectedValues = value || [];

  const handleToggle = (choiceValue) => {
    let newValues;
    if (selectedValues.includes(choiceValue)) {
      newValues = selectedValues.filter((v) => v !== choiceValue);
    } else {
      newValues = [...selectedValues, choiceValue];
    }
    onChange(field.attribute, newValues);
  };

  const fieldName = getLocalizedValue(field, "name");

  return (
    <FormControl error={!!error} fullWidth>
      {fieldName && (
        <FormLabel component="legend" sx={{ mb: 2, color: "#000", fontWeight: 500 }}>
          {fieldName}{" "}
          {field.isMandatory && <span style={{ color: "red" }}>*</span>}
        </FormLabel>
      )}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {field.choices?.map((choice) => (
          <Chip
            key={choice.id}
            label={getLocalizedValue(choice, "label")}
            onClick={() => handleToggle(choice.value)}
            variant={selectedValues.includes(choice.value) ? "filled" : "outlined"}
            sx={{
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              cursor: "pointer",
              fontSize: "0.875rem",
              backgroundColor: selectedValues.includes(choice.value)
                ? "#E0F2FE"
                : "transparent",
              borderColor: selectedValues.includes(choice.value)
                ? "#0EA5E9"
                : "#D1D5DB",
              color: selectedValues.includes(choice.value) ? "#0369A1" : "#6B7280",
              "&:hover": {
                backgroundColor: selectedValues.includes(choice.value)
                  ? "#BAE6FD"
                  : "#F3F4F6",
                borderColor: selectedValues.includes(choice.value)
                  ? "#0EA5E9"
                  : "#9CA3AF",
              },
            }}
          />
        ))}
      </Box>

      {error && <FormHelperText sx={{ mt: 1 }}>{error}</FormHelperText>}
    </FormControl>
  );
};

export const FormChipSelect = ({ field, value, onChange, error }) => {
  const selectedValue = value?.value || value;

  const handleToggle = (choice) => {
    onChange(field.attribute, choice);
  };

  const fieldName = getLocalizedValue(field, "name");

  return (
    <FormControl error={!!error} fullWidth>
      {fieldName && (
        <FormLabel component="legend" sx={{ mb: 2, color: "#000", fontWeight: 500 }}>
          {fieldName}{" "}
          {field.isMandatory && <span style={{ color: "red" }}>*</span>}
        </FormLabel>
      )}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
        {field.choices?.map((choice) => (
          <Chip
            key={choice.id}
            label={getLocalizedValue(choice, "label")}
            onClick={() => handleToggle(choice)}
            variant={selectedValue === choice.value ? "filled" : "outlined"}
            sx={{
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              cursor: "pointer",
              fontSize: "0.875rem",
              backgroundColor: selectedValue === choice.value
                ? "#E0F2FE"
                : "transparent",
              borderColor: selectedValue === choice.value ? "#0EA5E9" : "#D1D5DB",
              color: selectedValue === choice.value ? "#0369A1" : "#6B7280",
              "&:hover": {
                backgroundColor: selectedValue === choice.value
                  ? "#BAE6FD"
                  : "#F3F4F6",
                borderColor: selectedValue === choice.value ? "#0EA5E9" : "#9CA3AF",
              },
            }}
          />
        ))}
      </Box>

      {error && <FormHelperText sx={{ mt: 1 }}>{error}</FormHelperText>}
    </FormControl>
  );
};

export const FormCheckBox = (props) => {
  const { onChange, disabled, label, value } = props;
  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          sx={{
            marginRight:
              localStorage.getItem("i18nextLng") === "ar" ? 0 : undefined,
            alignItems: "flex-start",
          }}
          control={
            <Checkbox
              sx={{
                paddingRight:
                  localStorage.getItem("i18nextLng") === "ar" ? 0 : undefined,
              }}
              value={value}
              checked={value}
              disabled={disabled}
              onChange={(e, value) => onChange(value)}
            />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};