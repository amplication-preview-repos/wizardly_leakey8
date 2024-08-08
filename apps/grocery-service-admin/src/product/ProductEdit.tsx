import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="productName" source="productName" />
        <NumberInput step={1} label="upc12Number" source="upc12Number" />
      </SimpleForm>
    </Edit>
  );
};
