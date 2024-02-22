import { useWiki } from '../../hooks/useWiki';

export default function WikiContent() {
  const wiki = useWiki();

  if (!wiki) return <div>잘못된 접근입니다.</div>;

  return (
    <div>
      <h1>{wiki.title}</h1>
      <article>{wiki.content}</article>
    </div>
  );
}
