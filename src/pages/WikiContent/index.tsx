import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import classNames from 'classnames';

import { PATHS } from '../../constants/routes';
import { useWikiContent } from '../../hooks/useWikiContent';
import { wikiListState } from '../../states/wikiList';
import Title from '../../components/Title';
import StyledLink from '../../components/commons/StyledLink';
import BackLink from '../../components/BackLink';
import Button from '../../components/commons/Button';

export default function WikiContent() {
  const { pathname } = useLocation();
  const id = Number(pathname.split('/').pop());
  const { title, content } = useWikiContent(id);
  const [wikiList, setWikiList] = useRecoilState(wikiListState);
  const filteredWikiList = wikiList.map(({ id, title }) => ({ id, title }));
  const navigate = useNavigate();

  const deleteWiki = () => {
    if (!confirm('삭제하시겠습니까?')) return;

    setWikiList((oldWikiList) => oldWikiList.filter((oldWiki) => oldWiki.id !== id));
    navigate(PATHS.WIKI.BOARD);
  };

  if (!title || !content || !content.length) throw new Error('잘못된 접근입니다');

  return (
    <div className={classNames('flex h-full flex-col')}>
      <BackLink />

      <Title>{title}</Title>

      <article className={classNames('flex-grow whitespace-pre-line')}>
        {content.map((segment) => {
          const filteredWiki = filteredWikiList.find((info) => info.title === segment);

          if (!filteredWiki || filteredWiki.id === id)
            return (
              <span key={segment + Math.random()} className={classNames('text-base font-normal')}>
                {segment}
              </span>
            );

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
