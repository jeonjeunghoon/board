import Textarea from '../commons/Textarea';

type Props = {
  defaultValue?: string;
};

export default function ContentEditor({ defaultValue = '' }: Props) {
  return (
    <Textarea
      className='flex-grow outline-none'
      name='content'
      autoComplete='off'
      placeholder='내용을 입력하세요'
      defaultValue={defaultValue}
      required
    />
  );
}
