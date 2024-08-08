import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="productName" source="productName" />
        <NumberInput step={1} label="upc12Number" source="upc12Number" />
      </SimpleForm>
    </Create>
  );
};
