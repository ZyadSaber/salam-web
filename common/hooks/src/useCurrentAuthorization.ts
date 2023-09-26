import useLocalStorage from "./useLocalStorage";

const useCurrentAuthorization = () => {
  const { authorization } = useLocalStorage();
  return authorization;
};

export default useCurrentAuthorization;
