import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import classNames from 'classnames';

import { validateNewWiki } from '../../utils/validator';
import { wikiListNewIdState, wikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/routes';
import { CONFIRM_MESSAGE, ERROR_MESSAGE } from '../../constants/message';
import Textarea from '../../components/commons/Textarea';
import Button from '../../components/commons/Button';
import BackLink from '../../components/BackLink';
import ContentEditor from '../../components/ContentEditor';

export default function WikiCreator() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [wikiList, setWikiList] = useRecoilState(wikiListState);
  const id = useRecoilValue(wikiListNewIdState);
  const navigate = useNavigate();

  const validateTitle = () => {
    if (validateNewWiki(wikiList, title)) return;

    setIsError(true);
    setErrorMessage(ERROR_MESSAGE.DUPLICATED_TITLE);
  };

  const addWiki = () => {
    if (!confirm(CONFIRM_MESSAGE.VERIFY_WRITE)) return;

    if (!title || !content) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

    setWikiList((oldWikiList) => [...oldWikiList, { id, title, content }]);

    navigate(`${PATHS.WIKI.MAIN}/${id}`);
  };

  const cancelAddWiki = () => {
    if (confirm(CONFIRM_MESSAGE.CANCEL_WRITE)) navigate(PATHS.WIKI.MAIN);
  };

  return (
    <div className={classNames('flex h-full flex-col')}>
      <div className={classNames('max-lg:mb-6 max-lg:px-6')}>
        <BackLink />
      </div>

      <form className='flex flex-grow flex-col' onSubmit={addWiki}>
        <div className={classNames('o mb-14')}>
          <Textarea
            className={classNames(
              'w-full border-b-2 py-4 text-5xl font-bold outline-none',
              { 'border-error text-error focus:border-error': isError },
              { 'border-primary focus:border-focus': !isError },
              'max-lg:px-6',
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
          <div className={classNames('h-6 text-error')}>
            <p>{errorMessage}</p>
          </div>
        </div>

        <div className='flex flex-grow max-lg:px-6'>
          <ContentEditor value={content} setValue={setContent} />
        </div>

        <div className={classNames('mt-20 flex gap-4 self-end max-lg:w-full max-lg:px-6')}>
          <Button className='max-lg:flex-1' type='submit' disabled={isError || !title || !content}>
            추가하기
          </Button>
          <Button
            className='bg-thirdBackground max-lg:flex-1'
            type='button'
            onClick={cancelAddWiki}
          >
            취소하기
          </Button>
        </div>
      </form>
    </div>
  );
}
