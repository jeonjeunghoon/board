import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className={classNames('bg-primaryTextBackground text-primaryText rounded-lg px-20 py-4')}
      {...rest}
    >
      {children}
    </button>
  );
}
