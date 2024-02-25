import { PropsWithChildren } from 'react';

import Header from '../../Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='flex h-dvh flex-col'>
      <Header />
      <main className='flex-grow overflow-hidden py-28'>
        <section className='mx-auto h-full max-w-5xl'>{children}</section>
      </main>
    </div>
  );
}
