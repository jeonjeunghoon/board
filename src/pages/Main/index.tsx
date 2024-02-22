import { Link } from 'react-router-dom';

import { PATHS } from '../../constants/route';
import WikiList from '../../components/WikiList';

export default function Main() {
  return (
    <div>
      <Link to={PATHS.WIKI_CREATOR} target='_blank'>
        새로운 위키 추가하기
      </Link>

      <WikiList />
    </div>
  );
}
