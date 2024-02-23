import { PropsWithChildren } from 'react';

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className='border-primary mb-14 w-full self-start border-b py-4 text-5xl font-bold'>
      {children}
    </h1>
  );
}
