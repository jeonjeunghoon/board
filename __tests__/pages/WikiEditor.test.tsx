import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { InjectTestingRecoilState } from '../../__mocks__/utils/state';
import { generateWikiList } from '../../__mocks__/utils/wikiList';
import WikiEditor from '../../src/pages/WikiEditor';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({ state: 1 }),
}));

describe('WikiContent 페이지 테스트', () => {
  const wikiList = generateWikiList(1);

  beforeEach(() => {
    render(
      <RecoilRoot>
        <InjectTestingRecoilState wikiList={wikiList} />
        <WikiEditor />
      </RecoilRoot>,

      { wrapper: BrowserRouter },
    );
  });

  test('게시글의 제목 입력창과 본문 입력창이 렌더링된다.', () => {
    const titleHeading = screen.getByRole('heading', { name: '위키1', level: 1 });
    const contentText = screen.getByRole('textbox');

    expect(titleHeading).toBeInTheDocument();
    expect(contentText).toBeInTheDocument();
  });

  test('수정하기, 취소하기 버튼이 렌더링된다.', () => {
    const editButton = screen.getByRole('button', { name: '수정하기' });
    const cancelButton = screen.getByRole('button', { name: '취소하기' });

    expect(editButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test('제목과 본문에 텍스트가 없다면, 추가하기 버튼은 비활성화된다.', () => {
    const contentTextarea = screen.getByPlaceholderText('내용을 입력하세요');
    fireEvent.change(contentTextarea, { target: { value: '' } });
    expect(contentTextarea).toHaveValue('');

    const addButton = screen.getByRole('button', { name: '수정하기' });

    expect(addButton).toBeDisabled();
  });
});
