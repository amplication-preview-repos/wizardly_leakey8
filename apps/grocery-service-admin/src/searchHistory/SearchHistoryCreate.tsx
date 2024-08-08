import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SearchHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="productName" source="productName" />
      </SimpleForm>
    </Create>
  );
};
