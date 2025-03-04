/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Provision } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProvisionUpdateFormInputValues = {
    name?: string;
    service?: string;
};
export declare type ProvisionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    service?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProvisionUpdateFormOverridesProps = {
    ProvisionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    service?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProvisionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProvisionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    provision?: Provision;
    onSubmit?: (fields: ProvisionUpdateFormInputValues) => ProvisionUpdateFormInputValues;
    onSuccess?: (fields: ProvisionUpdateFormInputValues) => void;
    onError?: (fields: ProvisionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProvisionUpdateFormInputValues) => ProvisionUpdateFormInputValues;
    onValidate?: ProvisionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProvisionUpdateForm(props: ProvisionUpdateFormProps): React.ReactElement;
