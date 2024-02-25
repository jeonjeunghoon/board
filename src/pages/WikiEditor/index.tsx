import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import classNames from 'classnames';

import { PATHS } from '../../constants/routes';
import { CONFIRM_MESSAGE, ERROR_MESSAGE } from '../../constants/message';
import { wikiListState } from '../../states/wikiList';
import Button from '../../components/commons/Button';
import Title from '../../components/Title';
import ContentEditor from '../../components/ContentEditor';
import { useWiki } from '../../hooks/useWiki';

export default function WikiEditor() {
  const { state: id } = useLocation();
  const { title, content } = useWiki(id);
  const [editedContent, setEditedContent] = useState(content ?? '');
  const setWikiList = useSetRecoilState(wikiListState);
  const navigate = useNavigate();

  const editWiki = () => {
    if (!confirm(CONFIRM_MESSAGE.VERIFY_EDIT)) return;

    if (!title || !content || !editedContent) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

    setWikiList((wikiList) => {
      return wikiList.map((wiki) => (wiki.id === id ? { ...wiki, content: editedContent } : wiki));
    });

    navigate(`${PATHS.WIKI.BOARD}/${id}`);
  };

  const cancelEditWiki = () => {
    if (confirm(CONFIRM_MESSAGE.CANCEL_WRITE)) navigate(PATHS.WIKI.BOARD);
  };

  if (!title || !content) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

  return (
    <form className={classNames('flex h-full flex-col')} onSubmit={editWiki}>
      <Title>{title}</Title>

      <div className='flex flex-grow max-lg:px-6'>
        <ContentEditor value={editedContent} setValue={setEditedContent} isFocused />
      </div>

      <div className={classNames('mt-20 flex gap-4 self-end max-lg:w-full max-lg:px-6')}>
        <Button className='max-lg:flex-1' disabled={!editedContent}>
          수정하기
        </Button>
        <Button className='bg-thirdBackground max-lg:flex-1' type='button' onClick={cancelEditWiki}>
          취소하기
        </Button>
      </div>
    </form>
  );
}
