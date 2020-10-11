import { useCallback, useState } from 'react';

const useToggle = (state: any) => {
  const [isVisible, setIsVisible] = useState(state);

  const onOpen = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return [isVisible, onOpen, onClose, onToggle];
};

export default useToggle;
