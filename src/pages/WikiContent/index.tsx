import { Link } from 'react-router-dom';

import { PATHS } from '../../constants/routes';
import { useWiki } from '../../hooks/useWiki';

export default function WikiContent() {
  const { id, title, content } = useWiki();

  if (!title || !content) return <div>잘못된 접근입니다.</div>;

  return (
    <div>
      <h1>{title}</h1>
      <article>{content}</article>

      <Link to={PATHS.WIKI.EDITOR} state={id}>
        수정하기
      </Link>
    </div>
  );
}
