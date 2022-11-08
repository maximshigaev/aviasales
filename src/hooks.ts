import { useCallback, useState } from 'react';

export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  return {
    isFocused,
    handleFocus,
  };
}
