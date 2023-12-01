import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import {primaryColors} from "@commons/global"
import { BaseTitle } from "@commons/page-title";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${primaryColors.light};
  height: 10%;
  flex-wrap: wrap;
  border-bottom: 1px solid ${primaryColors.black};
`;

export const LogoContainer = styled(NavLink)`
  height: 7vh;
  max-width: 80%;
  margin : 0;
  padding: 0;
`;

export const LogoImage = styled.img`
width: 100%;
height: 100%;
`

export const HeaderTitle = styled(BaseTitle)`
  font-weight: 600;
  font-size: 24px;
`