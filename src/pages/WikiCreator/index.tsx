import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import classNames from 'classnames';

import { parseFormData } from '../../utils/form';
import { validateNewWiki } from '../../utils/validator';
import { wikiListNewIdState, wikiListState } from '../../states/wikiList';
import { PATHS } from '../../constants/routes';
import Textarea from '../../components/commons/Textarea';
import Button from '../../components/commons/Button';
import BackLink from '../../components/BackLink';
import ContentEditor from '../../components/ContentEditor';

export default function WikiCreator() {
  const [wikiList, setWikiList] = useRecoilState(wikiListState);
  const [isError, setIsError] = useState(false);
  const id = useRecoilValue(wikiListNewIdState);
  const navigate = useNavigate();

  const addWiki = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!confirm('작성을 완료하시겠습니까?')) return;

    const form = new FormData(event.currentTarget);
    const { title, content } = parseFormData<string>(form, 'title', 'content');

    if (!validateNewWiki(wikiList, title)) {
      setIsError(true);
      return;
    }

    setWikiList((oldWikiList) => [...oldWikiList, { id, title, content }]);

    navigate(`${PATHS.WIKI.MAIN}/${id}`);
  };

  const cancelAddWiki = () => {
    if (confirm('작성을 취소하시겠습니까?')) navigate(PATHS.WIKI.MAIN);
  };

  if (isError) return <div>에러 발생</div>;

  return (
    <div className={classNames('flex h-full flex-col')}>
      <BackLink />
      <form className='flex flex-grow flex-col' onSubmit={addWiki}>
        <Textarea
          className={classNames(
            'border-primary mb-14 w-full self-start border-b py-4 text-5xl font-bold outline-none',
          )}
          name='title'
          autoComplete='off'
          placeholder='제목을 입력하세요'
          rows={1}
          autoFocus
          required
        />
        <ContentEditor />

        <div className={classNames('mt-20 flex gap-4 self-end')}>
          <Button type='submit'>추가하기</Button>
          <Button type='button' onClick={cancelAddWiki}>
            취소하기
          </Button>
        </div>
      </form>
    </div>
  );
}
