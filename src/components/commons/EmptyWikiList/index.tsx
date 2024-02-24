import classNames from 'classnames';

export default function EmptyWikiList() {
  return (
    <div className={classNames('flex-grow')}>
      <div className={classNames('flex h-full flex-col items-center justify-center gap-8')}>
        <h2 className={classNames('cursor-default text-4xl font-bold')}>위키가 존재하지 않아요</h2>
        <p className={classNames('text-secondaryText cursor-default text-2xl font-medium')}>
          위키를 추가해 주세요
        </p>
      </div>
    </div>
  );
}
