import { ComponentPropsWithRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'textarea'>, 'className'>;

export default function Textarea({ ...rest }: Props) {
  return <textarea className='resize-none' {...rest} />;
}
