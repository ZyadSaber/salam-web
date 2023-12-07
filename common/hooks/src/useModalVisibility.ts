import { useState, useCallback } from "react";

const useModalVisibility = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => setVisible(false), []);
  const handleOpen = useCallback(() => setVisible(true), []);

  return{
    visible,
    handleClose,
    handleOpen
  }
};

export default useModalVisibility;
