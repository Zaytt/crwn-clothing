import React from 'react';

import { FormInputGroupContainer, FormInputLabel, FormInput } from './form-input.styles';

const FormInputGroup = ({ handleChange, label, ...otherProps }) => (
  <FormInputGroupContainer>
    <FormInput type="text" onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel shrink={otherProps.value.length ? true : false}>{label}</FormInputLabel>
    ) : null}
  </FormInputGroupContainer>
);

export default FormInputGroup;
