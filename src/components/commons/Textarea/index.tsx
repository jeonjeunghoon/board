import { ComponentPropsWithRef } from 'react';
import classNames from 'classnames';

export default function Textarea({ className, ...rest }: ComponentPropsWithRef<'textarea'>) {
  return <textarea className={classNames('resize-none', className)} {...rest} />;
}
