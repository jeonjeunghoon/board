import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  variant?: 'primary' | 'secondary';
} & LinkProps &
  PropsWithChildren;

export default function StyledLink({
  to,
  variant = 'primary',
  className = '',
  children,
  ...rest
}: Props) {
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
      className={classNames(
        'flex items-center justify-center rounded-lg',
        linkStyleSet[variant],
        textStyleSet[variant],
        className,
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
}
