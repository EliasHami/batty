/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConstructionCreateFormInputValues = {
    name?: string;
    description?: string;
    customer?: string;
    address?: string;
    estimate_validity?: number;
    number_lot?: number;
    customfield?: string;
};
export declare type ConstructionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    customer?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    estimate_validity?: ValidationFunction<number>;
    number_lot?: ValidationFunction<number>;
    customfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConstructionCreateFormOverridesProps = {
    ConstructionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    customer?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    estimate_validity?: PrimitiveOverrideProps<TextFieldProps>;
    number_lot?: PrimitiveOverrideProps<TextFieldProps>;
    customfield?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ConstructionCreateFormProps = React.PropsWithChildren<{
    overrides?: ConstructionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConstructionCreateFormInputValues) => ConstructionCreateFormInputValues;
    onSuccess?: (fields: ConstructionCreateFormInputValues) => void;
    onError?: (fields: ConstructionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ConstructionCreateFormInputValues) => ConstructionCreateFormInputValues;
    onValidate?: ConstructionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ConstructionCreateForm(props: ConstructionCreateFormProps): React.ReactElement;
