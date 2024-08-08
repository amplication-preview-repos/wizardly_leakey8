import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SearchHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="productName" source="productName" />
      </SimpleForm>
    </Edit>
  );
};
