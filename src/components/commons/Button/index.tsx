import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className={classNames('bg-primaryTextBackground text-primaryText h-14 w-40 rounded-lg')}
      {...rest}
    >
      {children}
    </button>
  );
}
