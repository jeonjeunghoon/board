import { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'className'>;

export default function Button({ children, ...rest }: Props) {
  return <button {...rest}>{children}</button>;
}
