import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { PATHS } from '../../constants/routes';
import { wikiListState } from '../../states/wikiList';
import { parseFormData } from '../../utils/form';
import Textarea from '../../components/commons/Textarea';
import Button from '../../components/commons/Button';
import { useWiki } from '../../hooks/useWiki';

export default function WikiEditor() {
  const { state: id } = useLocation();
  const { title, content } = useWiki(id);
  const setWikiList = useSetRecoilState(wikiListState);
  const navigate = useNavigate();

  const editWiki = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm('수정을 완료하시겠습니까?')) return;

    const form = new FormData(event.currentTarget);
    const { content: newContent } = parseFormData<string>(form, 'content');

    setWikiList((oldWikiList) => [
      ...oldWikiList.map((oldWiki) => {
        if (oldWiki.id === id) return { ...oldWiki, content: newContent };

        return oldWiki;
      }),
    ]);

    navigate(PATHS.WIKI.MAIN);
  };

  const cancelEditWiki = () => {
    if (confirm('작성을 취소하시겠습니까?')) navigate(PATHS.WIKI.MAIN);
  };

  if (!title || !content) return <div>질못된 접근입니다.</div>;

  return (
    <form className='flex flex-col' onSubmit={editWiki}>
      <Textarea
        name='title'
        autoComplete='off'
        placeholder='제목을 입력하세요'
        rows={1}
        defaultValue={title}
        disabled
      />
      <Textarea
        name='content'
        autoComplete='off'
        placeholder='내용을 입력하세요'
        defaultValue={content}
        required
      />

      <div className='flex'>
        <Button type='submit'>수정하기</Button>
        <Button type='button' onClick={cancelEditWiki}>
          취소하기
        </Button>
      </div>
    </form>
  );
}
