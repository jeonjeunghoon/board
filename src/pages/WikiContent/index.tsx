import { Link, useLocation } from 'react-router-dom';

import { PATHS } from '../../constants/routes';
import { useWikiContent } from '../../hooks/useWikiContent';
import { useRecoilValue } from 'recoil';
import { wikiListState } from '../../states/wikiList';

export default function WikiContent() {
  const { pathname } = useLocation();
  const id = Number(pathname.split('/').pop());
  const { title, content } = useWikiContent(id);
  const filteredWikiList = useRecoilValue(wikiListState).map(({ id, title }) => ({ id, title }));

  if (!title || !content?.length) return <div>잘못된 접근입니다.</div>;

  return (
    <div>
      <h1>{title}</h1>

      <article>
        {content.map((segment) => {
          const filteredWiki = filteredWikiList.find((info) => info.title === segment);

          if (!filteredWiki || filteredWiki.id === id) return segment;

          return (
            <Link key={segment} to={`${PATHS.WIKI.MAIN}/${filteredWiki.id}`}>
              {segment}
            </Link>
          );
        })}
      </article>

      <Link to={PATHS.WIKI.EDITOR} state={id}>
        수정하기
      </Link>
    </div>
  );
}
