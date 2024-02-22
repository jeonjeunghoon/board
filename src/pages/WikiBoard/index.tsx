import { Link } from 'react-router-dom';

import { PATHS } from '../../constants/routes';
import WikiList from '../../components/WikiList';

export default function WikiBoard() {
  return (
    <div>
      <Link to={PATHS.WIKI.CREATOR} target='_blank'>
        새로운 위키 추가하기
      </Link>

      <WikiList />
    </div>
  );
}
