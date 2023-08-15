import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

interface OptionLinkProps {
  active?: string;
  onClick?: () => void;
}

export const OptionLink = styled(Link)<OptionLinkProps>`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  margin: 0.6rem;
  ${OptionContainerStyles}
  ${({ active }) =>
    active &&
    css`
      border: 1px solid rgb(119, 119, 119);
    `}
  }
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
