import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import WikiBoard from '../../src/pages/WikiBoard';

test('WikiBoard 페이지가 렌더링된다.', () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <WikiBoard />
      </RecoilRoot>
    </BrowserRouter>,
  );
  expect(true).toBeTruthy();
});
