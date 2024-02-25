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

    setWikiList(wikiList.filter((wiki) => wiki.id !== id));
    navigate(PATHS.WIKI.BOARD);
  };

  if (notFoundContent) throw new Error(ERROR_MESSAGE.WRONG_APPROACH);

  return (
    <div className={classNames('flex h-full flex-col')}>
      <div className={classNames('max-lg:mb-6 max-lg:px-6')}>
        <BackLink />
      </div>

      <Title>{title}</Title>

      <article className={classNames('flex-grow whitespace-pre-line max-lg:px-6')}>
        {content.map((segment) => {
          const key = uuid();
          const filteredWiki = filteredWikiList.find((info) => info.title === segment);
          const isLink = filteredWiki && filteredWiki.id !== id;

          if (isLink) {
            return (
              <Link
                className={classNames('text-primary')}
                key={key}
                to={`${PATHS.WIKI.MAIN}/${filteredWiki.id}`}
              >
                {segment}
              </Link>
            );
          }

          return (
            <span key={key} className={classNames('whitespace-pre text-base font-normal')}>
              {segment}
            </span>
          );
        })}
      </article>

      <div className={classNames('mt-20 flex gap-4 self-end max-lg:w-full max-lg:px-6')}>
        <StyledLink className='max-lg:flex-1' to={PATHS.WIKI.EDITOR} state={id}>
          수정하기
        </StyledLink>
        <Button className={classNames('bg-thirdBackground max-lg:flex-1')} onClick={deleteWiki}>
          삭제하기
        </Button>
      </div>
    </div>
  );
}
