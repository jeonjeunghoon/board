import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import classNames from 'classnames';

import { PATHS } from '../../constants/routes';
import { useWikiContent } from '../../hooks/useWikiContent';
import { wikiListState } from '../../states/wikiList';
import Title from '../../components/Title';
import StyledLink from '../../components/commons/StyledLink';
import BackLink from '../../components/BackLink';

export default function WikiContent() {
  const { pathname } = useLocation();
  const id = Number(pathname.split('/').pop());
  const { title, content } = useWikiContent(id);
  const filteredWikiList = useRecoilValue(wikiListState).map(({ id, title }) => ({ id, title }));

  if (!title || !content?.length) throw new Error('잘못된 접근입니다');

  return (
    <div className={classNames('flex h-full flex-col')}>
      <BackLink />

      <Title>{title}</Title>

      <article className={classNames('flex-grow whitespace-pre-line')}>
        {content.map((segment) => {
          const filteredWiki = filteredWikiList.find((info) => info.title === segment);

          if (!filteredWiki || filteredWiki.id === id)
            return <span className={classNames('text-base font-normal')}>{segment}</span>;

          return (
            <Link
              className={classNames('text-primary')}
              key={segment + Math.random()}
              to={`${PATHS.WIKI.MAIN}/${filteredWiki.id}`}
            >
              {segment}
            </Link>
          );
        })}
      </article>

      <div className={classNames('mt-20 self-end')}>
        <StyledLink to={PATHS.WIKI.EDITOR} state={id}>
          수정하기
        </StyledLink>
      </div>
    </div>
  );
}
