import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import classNames from 'classnames';

import { PATHS } from '../../constants/routes';
import { wikiListState } from '../../states/wikiList';
import Button from '../../components/commons/Button';
import Title from '../../components/Title';
import ContentEditor from '../../components/ContentEditor';
import { useWiki } from '../../hooks/useWiki';
import { CONFIRM_MESSAGE, ERROR_MESSAGE } from '../../constants/message';

export default function WikiEditor() {
  const { state: id } = useLocation();
  const { title, content } = useWiki(id);
  const [editedContent, setEditedContent] = useState(content ?? '');
  const setWikiList = useSetRecoilState(wikiListState);
  const navigate = useNavigate();

  const editWiki = () => {
    if (!confirm(CONFIRM_MESSAGE.VERIFY_EDIT)) return;

    if (!title || !content || !editedContent) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

    setWikiList((oldWikiList) => [
      ...oldWikiList.map((oldWiki) => {
        if (oldWiki.id === id) return { ...oldWiki, content: editedContent };

        return oldWiki;
      }),
    ]);

    navigate(`${PATHS.WIKI.MAIN}/${id}`);
  };

  const cancelEditWiki = () => {
    if (confirm(CONFIRM_MESSAGE.CANCEL_WRITE)) navigate(PATHS.WIKI.MAIN);
  };

  if (!title || !content) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

  return (
    <form className={classNames('flex h-full flex-col')} onSubmit={editWiki}>
      <Title>{title}</Title>

      <ContentEditor value={editedContent} setValue={setEditedContent} isFocused />

      <div className={classNames('mt-20 flex gap-4 self-end')}>
        <Button disabled={!title || !editedContent}>수정하기</Button>
        <Button type='button' onClick={cancelEditWiki}>
          취소하기
        </Button>
      </div>
    </form>
  );
}
