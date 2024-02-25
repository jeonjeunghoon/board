import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

import { PATHS } from '../../constants/routes';
import { useWikiParsedContent } from '../../hooks/useWikiParsedContent';
import { wikiListState } from '../../states/wikiList';
import Title from '../../components/Title';
import StyledLink from '../../components/commons/StyledLink';
import BackLink from '../../components/BackLink';
import Button from '../../components/commons/Button';
import { CONFIRM_MESSAGE, ERROR_MESSAGE } from '../../constants/message';

export default function WikiContent() {
  const { wikiId } = useParams();
  const id = Number(wikiId);
  const { title, content } = useWikiParsedContent(id);
  const [wikiList, setWikiList] = useRecoilState(wikiListState);
  const filteredWikiList = wikiList.map(({ id, title }) => ({ id, title }));
  const navigate = useNavigate();
  const notFoundContent = !title || !content || !content.length;

  const deleteWiki = () => {
    if (!confirm(CONFIRM_MESSAGE.VERIFY_DELETE)) return;

    setWikiList((oldWikiList) => oldWikiList.filter((oldWiki) => oldWiki.id !== id));
    navigate(PATHS.WIKI.BOARD);
  };

  if (notFoundContent) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

  return (
    <div className={classNames('flex h-full flex-col')}>
      <BackLink />

      <Title>{title}</Title>

      <article className={classNames('flex-grow whitespace-pre-line')}>
        {content.map((segment) => {
          const key = uuid();
          const filteredWiki = filteredWikiList.find((info) => info.title === segment);

          if (!filteredWiki || filteredWiki.id === id)
            return (
              <span key={key} className={classNames('whitespace-pre text-base font-normal')}>
                {segment}
              </span>
            );

          return (
            <Link
              className={classNames('text-primary')}
              key={key}
              to={`${PATHS.WIKI.MAIN}/${filteredWiki.id}`}
            >
              {segment}
            </Link>
          );
        })}
      </article>

      <div className={classNames('mt-20 flex gap-4 self-end')}>
        <StyledLink to={PATHS.WIKI.EDITOR} state={id}>
          수정하기
        </StyledLink>
        <Button className={classNames('bg-thirdBackground')} onClick={deleteWiki}>
          삭제하기
        </Button>
      </div>
    </div>
  );
}
