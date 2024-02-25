import { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  cursor?: string;
} & PropsWithChildren;

export default function Title({ cursor = 'auto', children }: Props) {
  return (
    <h1
      className={classNames(
        `mb-14 w-full self-start border-b border-primary py-4 cursor-${cursor} max-lg:mb-10 max-lg:px-6`,
      )}
    >
      {children}
    </h1>
  );
}
