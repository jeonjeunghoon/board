import { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = {
  cursor?: string;
} & PropsWithChildren;

export default function Title({ cursor = 'auto', children }: Props) {
  return (
    <h1
      className={classNames(
        `border-primary mb-14 w-full self-start border-b py-4 text-5xl font-bold cursor-${cursor}`,
      )}
    >
      {children}
    </h1>
  );
}
