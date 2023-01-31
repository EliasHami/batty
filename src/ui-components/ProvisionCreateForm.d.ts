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
export declare type ProvisionCreateFormInputValues = {
    name?: string;
    service?: string;
};
export declare type ProvisionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    service?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProvisionCreateFormOverridesProps = {
    ProvisionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProvisionCreateFormProps = React.PropsWithChildren<{
    overrides?: ProvisionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProvisionCreateFormInputValues) => ProvisionCreateFormInputValues;
    onSuccess?: (fields: ProvisionCreateFormInputValues) => void;
    onError?: (fields: ProvisionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProvisionCreateFormInputValues) => ProvisionCreateFormInputValues;
    onValidate?: ProvisionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProvisionCreateForm(props: ProvisionCreateFormProps): React.ReactElement;
