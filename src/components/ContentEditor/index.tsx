import { Dispatch, SetStateAction } from 'react';

import Textarea from '../commons/Textarea';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isFocused?: boolean;
};

export default function ContentEditor({ value, setValue, isFocused = false }: Props) {
  return (
    <Textarea
      className='flex-grow outline-none'
      name='content'
      autoComplete='off'
      placeholder='내용을 입력하세요'
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      autoFocus={isFocused}
    />
  );
}
