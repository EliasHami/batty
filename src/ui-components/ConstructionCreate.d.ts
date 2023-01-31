/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ConstructionCreateInputValues = {
    name?: string;
    description?: string;
    customer?: string;
    address?: string;
    estimate_validity?: number;
};
export declare type ConstructionCreateValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    customer?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    estimate_validity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ConstructionCreateOverridesProps = {
    ConstructionCreateGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    customer?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    estimate_validity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ConstructionCreateProps = React.PropsWithChildren<{
    overrides?: ConstructionCreateOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ConstructionCreateInputValues) => ConstructionCreateInputValues;
    onSuccess?: (fields: ConstructionCreateInputValues) => void;
    onError?: (fields: ConstructionCreateInputValues, errorMessage: string) => void;
    onChange?: (fields: ConstructionCreateInputValues) => ConstructionCreateInputValues;
    onValidate?: ConstructionCreateValidationValues;
} & React.CSSProperties>;
export default function ConstructionCreate(props: ConstructionCreateProps): React.ReactElement;
