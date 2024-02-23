import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

type Props = {
  isFocused?: boolean;
} & Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export default function PaginationButton({
  isFocused = false,
  disabled,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={classNames(
        'flex h-9 w-9 items-center justify-center rounded-full font-normal text-black',
        {
          'bg-secondaryTextBackgroundFocus font-medium': isFocused,
          'hover:bg-secondaryTextBackgroundHover': !disabled,
        },
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
