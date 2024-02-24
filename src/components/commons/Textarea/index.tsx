import { ComponentPropsWithRef, useRef } from 'react';
import classNames from 'classnames';

import { useCursorPosition } from '../../../hooks/useCursorPosition';

export default function Textarea({ className, ...rest }: ComponentPropsWithRef<'textarea'>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useCursorPosition(ref);

  return <textarea className={classNames('resize-none', className)} ref={ref} {...rest} />;
}
