import { useEffect, useState } from 'react';
import { useRouteError } from 'react-router-dom';

import Layout from '../../components/Layout';
import classNames from 'classnames';
import StyledLink from '../../components/commons/StyledLink';
import { PATHS } from '../../constants/routes';

export default function NotFound() {
  const [message, setMessage] = useState('잘못된 접근입니다');
  const error = useRouteError();

  useEffect(() => {
    if (error instanceof Error) {
      console.error(error);
      setMessage(error.message);
    }
  }, [error]);

  return (
    <Layout>
      <div className={classNames('flex h-full flex-col items-center justify-center gap-20')}>
        <h1>{message}</h1>
        <StyledLink className={classNames('w-48')} to={PATHS.WIKI.MAIN}>
          메인페이지로 이동하기
        </StyledLink>
      </div>
    </Layout>
  );
}
