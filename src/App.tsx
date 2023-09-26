import { memo } from 'react';
import {
  Box,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Header from "@components/header";
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from "@components/side-bar"
import { PageRoutes } from "@commons/global";


const App = () => {

  const { onOpen, onClose } = useDisclosure();
  const gb = useColorModeValue('gray.100', 'gray.900');

  return (
    <>
      <BrowserRouter>
        {PageRoutes.map(({ Path, Component }) => {
          return (
            <Route
              exact
              path={Path}
              key={Path.toString()}
            >
              {
                !Array.isArray(Path) ?
                  <>
                    <Box minH="100vh" bg={gb}>
                      <SideBar
                        onClose={() => onClose}
                        display={{ base: 'none', md: 'block' }}
                      />
                      <Header onOpen={onOpen} />
                      <Box ml={{ base: 0, md: 60 }} p="4">
                        <Component />
                      </Box>
                    </Box>
                  </>
                  :
                  <Component />
              }
            </Route>
          );
        })}
      </BrowserRouter>
    </>
  )
}

export default memo(App)