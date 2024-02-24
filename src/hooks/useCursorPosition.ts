import { RefObject, useEffect } from 'react';

export const useCursorPosition = (
  ref: RefObject<HTMLInputElement | HTMLTextAreaElement>,
  direction: 'start' | 'end' = 'end',
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const setCursorPosition = () => {
      const { value } = element;
      const cursorPosition = direction === 'start' ? 0 : value.length;
      element.setSelectionRange(cursorPosition, cursorPosition);
    };

    setCursorPosition();
  }, [ref, direction]);
};
