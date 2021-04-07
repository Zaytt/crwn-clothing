import styled, { css } from 'styled-components';

const shrink = css`
  top: -24px;
  font-size: 14px;
  color: black;
`;

export const FormInputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const shrinkCheck = (props) => {
  return props.shrink ? shrink : null;
};

export const FormInputLabel = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${shrinkCheck}
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: gray;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ${FormInputLabel} {
    ${shrink}
  }
`;
