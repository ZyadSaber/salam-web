import styled from "@emotion/styled";
import { Checkbox } from 'antd';
import {primaryColors} from "@commons/global"
import { CheckBoxProps } from "./interface";

export const StyledCheckBox = styled(Checkbox)<CheckBoxProps>`
    width: ${({width})=>width};
    padding: ${({padding})=>padding};
    height: ${({height})=>height};
    margin: ${({margin})=>margin};
   ${({required})=>required && `background-color: ${primaryColors.danger};`}
`