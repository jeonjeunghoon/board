import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { generateWikiList } from '../../__mocks__/utils/wikiList';
import { RecoilRoot } from 'recoil';
import { InjectTestingRecoilState } from '../../__mocks__/utils/state';
import WikiContent from '../../src/pages/WikiContent';
import { MemoryRouter } from 'react-router-dom';

const TITLE = '위키2';
const CONTENT = '위키1';

describe('WikiContent 페이지 테스트', () => {
  const wikiList = [...generateWikiList(1), { id: 2, title: TITLE, content: CONTENT }];

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/wiki/2']}>
        <RecoilRoot>
          <InjectTestingRecoilState wikiList={wikiList} />
          <WikiContent />
        </RecoilRoot>
      </MemoryRouter>,
    );
  });

  test('게시글의 제목과 본문이 렌더링된다.', async () => {
    const titleHeading = screen.getByRole('heading', { name: TITLE, level: 1 });
    const content = screen.getByText(CONTENT);

    expect(titleHeading).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test('다른 위키의 제목과 동일한 내용은 하이퍼링크로 렌더링된다.', () => {
    const link = screen.getByRole('link', { name: CONTENT });

    expect(link).toBeInTheDocument();
  });

  test('돌아가기 링크가 렌더링된다.', () => {
    const link = screen.getByRole('link', { name: '돌아가기' });

    expect(link).toBeInTheDocument();
  });

  test('수정하기 링크가 렌더링된다.', () => {
    const editButton = screen.getByRole('link', { name: '수정하기' });

    expect(editButton).toBeInTheDocument();
  });

  test('삭제하기 버튼이 렌더링된다.', () => {
    const deleteButton = screen.getByRole('button', { name: '삭제하기' });

    expect(deleteButton).toBeInTheDocument();
  });
});
