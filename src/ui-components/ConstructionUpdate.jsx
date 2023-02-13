/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Construction } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ConstructionUpdate(props) {
  const {
    id: idProp,
    construction,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    customer: "",
    address: "",
    estimate_validity: "",
    parts: "",
    number_lot: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [customer, setCustomer] = React.useState(initialValues.customer);
  const [address, setAddress] = React.useState(initialValues.address);
  const [estimate_validity, setEstimate_validity] = React.useState(
    initialValues.estimate_validity
  );
  const [parts, setParts] = React.useState(initialValues.parts);
  const [number_lot, setNumber_lot] = React.useState(initialValues.number_lot);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = constructionRecord
      ? { ...initialValues, ...constructionRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setCustomer(cleanValues.customer);
    setAddress(cleanValues.address);
    setEstimate_validity(cleanValues.estimate_validity);
    setParts(
      typeof cleanValues.parts === "string"
        ? cleanValues.parts
        : JSON.stringify(cleanValues.parts)
    );
    setNumber_lot(cleanValues.number_lot);
    setErrors({});
  };
  const [constructionRecord, setConstructionRecord] =
    React.useState(construction);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Construction, idProp)
        : construction;
      setConstructionRecord(record);
    };
    queryData();
  }, [idProp, construction]);
  React.useEffect(resetStateValues, [constructionRecord]);
  const validations = {
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    customer: [{ type: "Required" }],
    address: [{ type: "Required" }],
    estimate_validity: [],
    parts: [{ type: "JSON" }],
    number_lot: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          customer,
          address,
          estimate_validity,
          parts,
          number_lot,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Construction.copyOf(constructionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ConstructionUpdate")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              customer,
              address,
              estimate_validity,
              parts,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              customer,
              address,
              estimate_validity,
              parts,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Customer"
        isRequired={true}
        isReadOnly={false}
        value={customer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              customer: value,
              address,
              estimate_validity,
              parts,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.customer ?? value;
          }
          if (errors.customer?.hasError) {
            runValidationTasks("customer", value);
          }
          setCustomer(value);
        }}
        onBlur={() => runValidationTasks("customer", customer)}
        errorMessage={errors.customer?.errorMessage}
        hasError={errors.customer?.hasError}
        {...getOverrideProps(overrides, "customer")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              customer,
              address: value,
              estimate_validity,
              parts,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Estimate validity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={estimate_validity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              customer,
              address,
              estimate_validity: value,
              parts,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.estimate_validity ?? value;
          }
          if (errors.estimate_validity?.hasError) {
            runValidationTasks("estimate_validity", value);
          }
          setEstimate_validity(value);
        }}
        onBlur={() =>
          runValidationTasks("estimate_validity", estimate_validity)
        }
        errorMessage={errors.estimate_validity?.errorMessage}
        hasError={errors.estimate_validity?.hasError}
        {...getOverrideProps(overrides, "estimate_validity")}
      ></TextField>
      <TextAreaField
        label="Parts"
        isRequired={false}
        isReadOnly={false}
        value={parts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              customer,
              address,
              estimate_validity,
              parts: value,
              number_lot,
            };
            const result = onChange(modelFields);
            value = result?.parts ?? value;
          }
          if (errors.parts?.hasError) {
            runValidationTasks("parts", value);
          }
          setParts(value);
        }}
        onBlur={() => runValidationTasks("parts", parts)}
        errorMessage={errors.parts?.errorMessage}
        hasError={errors.parts?.hasError}
        {...getOverrideProps(overrides, "parts")}
      ></TextAreaField>
      <TextField
        label="Number lot"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number_lot}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              customer,
              address,
              estimate_validity,
              parts,
              number_lot: value,
            };
            const result = onChange(modelFields);
            value = result?.number_lot ?? value;
          }
          if (errors.number_lot?.hasError) {
            runValidationTasks("number_lot", value);
          }
          setNumber_lot(value);
        }}
        onBlur={() => runValidationTasks("number_lot", number_lot)}
        errorMessage={errors.number_lot?.errorMessage}
        hasError={errors.number_lot?.hasError}
        {...getOverrideProps(overrides, "number_lot")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || construction)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || construction) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
