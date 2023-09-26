import useLocalStorage from "./useLocalStorage";

const useCurrentUserName = () => {
  const { user_name } = useLocalStorage();

  return user_name;
};

export default useCurrentUserName;
