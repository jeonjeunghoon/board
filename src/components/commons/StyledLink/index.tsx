import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  variant?: 'primary' | 'secondary';
} & LinkProps &
  PropsWithChildren;

export default function StyledLink({ to, variant = 'primary', children, ...rest }: Props) {
  const linkStyleSet = {
    primary: 'h-14 w-40 bg-primaryTextBackground',
    secondary: 'h-fit w-fit bg-secondaryTextBackground',
  };

  const textStyleSet = {
    primary: 'text-primaryText',
    secondary: 'text-secondaryText',
  };

  return (
    <Link
      className={classNames('flex justify-center rounded-lg align-middle', linkStyleSet[variant])}
      to={to}
      {...rest}
    >
      <p className={classNames('my-auto', textStyleSet[variant])}>{children}</p>
    </Link>
  );
}
