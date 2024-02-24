import classNames from 'classnames';

import StyledLink from '../commons/StyledLink';
import LeftArrow from '../../assets/svgs/arrow-left.svg?react';

export default function BackLink() {
  return (
    <StyledLink to='..' variant='secondary'>
      <div className={classNames('flex gap-2')}>
        <LeftArrow width='24px' height='24px' />
        돌아가기
      </div>
    </StyledLink>
  );
}
