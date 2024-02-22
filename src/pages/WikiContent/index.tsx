import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { targetWikiState } from '../../states/wikiList';

export default function WikiContent() {
  const { pathname } = useLocation();
  const id = Number(pathname.split('/').pop());
  const wiki = useRecoilValue(targetWikiState({ targetId: id }));

  if (!wiki) return <div>잘못된 접근입니다.</div>;

  return (
    <div>
      <h1>{wiki.title}</h1>
      <article>{wiki.content}</article>
    </div>
  );
}
