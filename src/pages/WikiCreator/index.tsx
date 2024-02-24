import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import classNames from 'classnames';

import { validateNewWiki } from '../../utils/validator';
import { wikiListNewIdState, wikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/routes';
import Textarea from '../../components/commons/Textarea';
import Button from '../../components/commons/Button';
import BackLink from '../../components/BackLink';
import ContentEditor from '../../components/ContentEditor';

export default function WikiCreator() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [wikiList, setWikiList] = useRecoilState(wikiListState);
  const [isError, setIsError] = useState(false);
  const id = useRecoilValue(wikiListNewIdState);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateTitle = () => {
    if (validateNewWiki(wikiList, title)) return;

    setIsError(true);
    setErrorMessage('중복된 제목입니다');
  };

  const addWiki = () => {
    if (!confirm('작성을 완료하시겠습니까?')) return;

    if (!title || !content) throw new Error('잘못된 접근입니다');

    setWikiList((oldWikiList) => [...oldWikiList, { id, title, content }]);

    navigate(`${PATHS.WIKI.MAIN}/${id}`);
  };

  const cancelAddWiki = () => {
    if (confirm('작성을 취소하시겠습니까?')) navigate(PATHS.WIKI.MAIN);
  };

  return (
    <div className={classNames('flex h-full flex-col')}>
      <BackLink />

      <form className='flex flex-grow flex-col' onSubmit={addWiki}>
        <div className={classNames('mb-14')}>
          <Textarea
            className={classNames(
              'w-full border-b-2 py-4 text-5xl font-bold outline-none',
              { 'border-error text-error focus:border-error': isError },
              { 'border-primary focus:border-focus': !isError },
            )}
            name='title'
            autoComplete='off'
            placeholder='제목을 입력하세요'
            rows={1}
            value={title}
            onChange={(event) => {
              setTitle(event.currentTarget.value);
              setIsError(false);
              setErrorMessage('');
            }}
            onBlur={validateTitle}
            autoFocus
          />
          {isError && <p className={classNames('text-error')}>{errorMessage}</p>}
        </div>

        <ContentEditor value={content} setValue={setContent} />

        <div className={classNames('mt-20 flex gap-4 self-end')}>
          <Button type='submit' disabled={isError || !title || !content}>
            추가하기
          </Button>
          <Button type='button' onClick={cancelAddWiki}>
            취소하기
          </Button>
        </div>
      </form>
    </div>
  );
}
