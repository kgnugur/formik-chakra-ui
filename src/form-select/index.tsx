import { Select, SelectProps } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { FC } from 'react';
import { BaseProps } from '../base-props';
import { FormControl } from '../form-control';

export type FormSelectProps = BaseProps & SelectProps;

export const FormSelect: FC<FormSelectProps> = (props: FormSelectProps) => {
  const { name, label, my, children, ...rest } = props;
  const [field] = useField(name);

  return (
    <FormControl name={name} label={label} my={my}>
      <Select id={name} {...field} {...rest}>
        {children}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
