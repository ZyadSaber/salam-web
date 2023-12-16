import useAppConfig from "./useAppConfig";

const useSideBarIndex = () => {
  const {
    state: { sideBlock },
  } = useAppConfig();

  return sideBlock;
};

export default useSideBarIndex;
