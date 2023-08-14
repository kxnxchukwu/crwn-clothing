import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  align-itemes: center;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  color: ${({ theme }) => theme.color}!important;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  color: ${({ theme }) => theme.color}!important;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
