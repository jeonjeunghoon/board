import { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import classNames from 'classnames';

import { PATHS } from '../../constants/routes';
import { wikiListState } from '../../states/wikiList';
import { parseFormData } from '../../utils/form';
import Button from '../../components/commons/Button';
import Title from '../../components/Title';
import ContentEditor from '../../components/ContentEditor';
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
    <form className={classNames('flex h-full flex-col')} onSubmit={editWiki}>
      <Title>{title}</Title>

      <ContentEditor defaultValue={content} />

      <div className={classNames('mt-20 flex gap-4 self-end')}>
        <Button type='submit'>수정하기</Button>
        <Button type='button' onClick={cancelEditWiki}>
          취소하기
        </Button>
      </div>
    </form>
  );
}
