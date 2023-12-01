import React, { memo, useCallback, useEffect } from "react";
import { Button } from "@commons/button";
import { InputText } from "@commons/input-text";
import { primaryColors } from "@commons/global";
import { useLocalStorage, useMutation, useFormManager } from "@commons/hooks";
import Flex from "@commons/flex";

const SignInPage = () => {
  const { setRow, success } = useMutation({
    link: "USER_LOG_IN",
    noAuthorization: true,
  });
  const {
    state: { user_name, password },
    onChange,
  } = useFormManager({
    initialValues: {
      user_name: "",
      password: "",
    },
  });
  const { changeLocalStorage } = useLocalStorage();

  const { lightGrey1 } = primaryColors;

  if (success) {
    changeLocalStorage([
      {
        name: "salam",
        //@ts-ignore
        data: { ...success },
      },
    ]);
  }

  useEffect(() => {
    if (success && success.response === "success") {
      window.location.assign("/home");
    }
  }, [success]);

  const handleLogIn = useCallback(() => {
    setRow({ user_name, password });
  }, [password, setRow, user_name]);

  return (
    <Flex minHeight="100vh" padding="0" margin="0" borderRadius="0" gap="0">
      <Flex
        width="50%"
        minHeight="100%"
        align="center"
        justifyContent="center"
        backgroundColor={lightGrey1}
      >
        <Flex
          width="100%"
          wrap
          flexDirection="column"
          gap="5px"
          align="left"
          margin="0 20%"
          justifyContent="center"
        >
          <InputText
            width="60%"
            onChange={onChange}
            value={user_name}
            name="user_name"
            label="usrnm"
          />
          <InputText
            width="60%"
            onChange={onChange}
            value={password}
            name="password"
            type="password"
            label="pswrd"
          />
          <Button width="20%" label="login" onClick={handleLogIn} />
        </Flex>
      </Flex>
      <Flex
        width="50%"
        minHeight="100%"
        backgroundColor={lightGrey1}
        align="center"
        justifyContent="center"
      >
        <img
          src="http://144.24.209.19:9090/application_logo/primary_logo"
          alt="logo"
        />
      </Flex>
    </Flex>
  );
};

export default memo(SignInPage);
