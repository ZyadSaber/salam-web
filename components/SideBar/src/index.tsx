import React, { memo, useState, useCallback } from "react";
import { LinkButton, IconButton } from "@commons/button";
import { useFetch, useCurrentUserName } from "@commons/hooks";
import { primaryColors } from "@commons/global";
import Flex from "@commons/flex";
import {
  Nav,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
  StyledComponent,
} from "./styled";

const SideBar = () => {
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);
  const user_name = useCurrentUserName();
  const{ lightSky, black } = primaryColors;
  const { data } = useFetch({
    link: "QUERY_SIDE_PAGES_DATA",
    fetchOnFirstRun: true,
    params: {
      user_name,
    },
  });

  const handleToggle = useCallback(
    (index: number) => {
      if (index === activeIndex) {
        setActiveIndex(undefined);
      } else {
        setActiveIndex(index);
      }
    },
    [activeIndex]
  );

  const handleMenuButton = useCallback(() => setVisible(!visible), [visible]);

  return (
    <Nav collapsed={!visible}>
      <IconButton
        width="90%"
        label={visible ? "menu" : undefined}
        onClick={handleMenuButton}
        borderRadius="5px"
        iconName="menu"
        margin="10px"
      />
      {data?.map(
        ({ page_parent_id, page_parent_name, app_pages, page_icon }: any, index: any) => {
          return(
            <AccordionItem key={page_parent_id}>
              <AccordionLabel>
                <IconButton
                  margin="0"
                  width="100%"
                  label={visible ? page_parent_name : undefined}
                  onClick={() => handleToggle(index)}
                  borderRadius="5px"
                  iconName={page_icon}
                />
              </AccordionLabel>
              <AccordionPanel visible={activeIndex === index}>
                <Flex width="100%" flexDirection="column" gap="10px" padding="0">
                  {app_pages.map((page: any) => {
                    return page.run_in_modal === "N" ? (
                      <StyledComponent>
                        <LinkButton
                          key={page.page_id}
                          label={visible ? page.page_name : undefined}
                          pathTo={page.page_link}
                          iconName={page.page_icon}
                          width="100%"
                          type="primary"
                          backGround={lightSky}
                          color={black}
                        />
                      </StyledComponent>
                    ) : (
                      <></>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          )
        }
      )}
    </Nav>
  );
};

export default memo(SideBar);
export * from "./interface";
