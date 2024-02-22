import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { wikiListNewIdState, wikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/route';
import Textarea from '../../components/commons/Textarea';
import Button from '../../components/commons/Button';

export default function WikiCreator() {
  const setWikiList = useSetRecoilState(wikiListState);
  const id = useRecoilValue(wikiListNewIdState);
  const navigate = useNavigate();

  const addWiki = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm('작성을 완료하시겠습니까?')) return;

    const form = new FormData(event.currentTarget);
    const title = String(form.get('title'));
    const content = String(form.get('content'));

    setWikiList((oldWikiList) => [...oldWikiList, { id, title, content }]);

    navigate(PATHS.MAIN);
  };

  const cancelAddWiki = () => {
    if (!confirm('작성을 취소하시겠습니까?')) return;

    navigate(PATHS.MAIN);
  };

  return (
    <form className='flex flex-col' onSubmit={addWiki}>
      <Textarea
        name='title'
        autoComplete='off'
        placeholder='제목을 입력하세요'
        rows={1}
        autoFocus
        required
      />
      <Textarea name='content' autoComplete='off' placeholder='내용을 입력하세요' required />

      <div className='flex'>
        <Button type='submit'>추가하기</Button>
        <Button type='button' onClick={cancelAddWiki}>
          취소하기
        </Button>
      </div>
    </form>
  );
}
