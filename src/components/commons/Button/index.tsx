import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Button({
  className,
  disabled,
  children,
  ...rest
}: ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={classNames(
        'bg-primaryBackground text-primaryText h-14 w-40 rounded-lg',
        { 'bg-opacity-50 hover:cursor-not-allowed': disabled },
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
