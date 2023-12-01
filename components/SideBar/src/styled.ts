import styled from "styled-components";
import { primaryColors } from "@commons/global";

export const Nav = styled.nav<any>`
  min-width: ${({ collapsed }) => (collapsed ? "5%" : "13%")};
  height: 100%;
  transition: all 0.3s ease;
  background-color: ${primaryColors.light};
  border-right: 1px solid ${primaryColors.black};
  text-align: center;
  overflow-x: auto;
`;

export const AccordionItem = styled.div`
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  transition: all 0.3s ease;
  text-align: center;
`;

export const AccordionLabel = styled.div`
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  transition: all 0.3s ease;
`;

export const AccordionPanel = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  margin: 10px 0;
  transition: all 0.3s ease;
`;

export const StyledComponent = styled.div`
  background-color: #eee;
  transition: all 0.3s ease;
`;
