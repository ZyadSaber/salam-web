import React, { memo, useCallback } from "react";
import { BaseTitle } from "@commons/page-title";
import { useLocalStorage } from "@commons/hooks";
import { IconButton } from "@commons/button";
import Flex from "@commons/flex";
import { StyledHeader, LogoImage, LogoContainer, HeaderTitle } from "./styled";

const Header = () => {
  const { buildName, appName, displayName, clearLocalStorage, role } =
    useLocalStorage();
  const handleSignOut = useCallback(() => {
    clearLocalStorage();
    window.location.replace("/");
  }, [clearLocalStorage]);

  return (
    <>
      <StyledHeader>
        <Flex
          width="20%"
          gap="5px"
          justifyContent="center"
          flexDirection="column"
          align="center"
          margin="0 5px"
        >
          <HeaderTitle disableTranslation>{appName}</HeaderTitle>
          <BaseTitle disableTranslation>{buildName}</BaseTitle>
        </Flex>
        <LogoContainer
          to={`/home`}
        >
          <LogoImage
            src="http://144.24.209.19:9090/application_logo/primary_logo"
            alt="company logo"
          />
        </LogoContainer>
        <Flex
          width="20%"
          gap="15px"
          justifyContent="center"
          align="center"
          margin="0 5px"
        >
          <Flex justifyContent="center" flexDirection="column" align="center">
            <HeaderTitle disableTranslation>{displayName}</HeaderTitle>
            <BaseTitle disableTranslation>{`system role ${role}`}</BaseTitle>
          </Flex>
          <IconButton
            iconName="signOut"
            onClick={handleSignOut}
            color="red"
            backGround="transparent"
          />
        </Flex>
      </StyledHeader>
    </>
  );
};

export default memo(Header);
