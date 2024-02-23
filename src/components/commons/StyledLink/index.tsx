import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
} & LinkProps &
  PropsWithChildren;

export default function StyledLink({ to, children, ...rest }: Props) {
  return (
    <Link
      className={classNames('bg-primaryTextBackground text-primaryText rounded-lg px-20 py-4')}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
}
