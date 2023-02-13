/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Construction } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConstructionUpdateInputValues = {
    name?: string;
    description?: string;
    customer?: string;
    address?: string;
    estimate_validity?: number;
    parts?: string;
    number_lot?: number;
};
export declare type ConstructionUpdateValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    customer?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    estimate_validity?: ValidationFunction<number>;
    parts?: ValidationFunction<string>;
    number_lot?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConstructionUpdateOverridesProps = {
    ConstructionUpdateGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    customer?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    estimate_validity?: PrimitiveOverrideProps<TextFieldProps>;
    parts?: PrimitiveOverrideProps<TextAreaFieldProps>;
    number_lot?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConstructionUpdateProps = React.PropsWithChildren<{
    overrides?: ConstructionUpdateOverridesProps | undefined | null;
} & {
    id?: string;
    construction?: Construction;
    onSubmit?: (fields: ConstructionUpdateInputValues) => ConstructionUpdateInputValues;
    onSuccess?: (fields: ConstructionUpdateInputValues) => void;
    onError?: (fields: ConstructionUpdateInputValues, errorMessage: string) => void;
    onChange?: (fields: ConstructionUpdateInputValues) => ConstructionUpdateInputValues;
    onValidate?: ConstructionUpdateValidationValues;
} & React.CSSProperties>;
export default function ConstructionUpdate(props: ConstructionUpdateProps): React.ReactElement;
