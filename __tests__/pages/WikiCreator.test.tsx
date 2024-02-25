import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import WikiCreator from '../../src/pages/WikiCreator';
import { InjectTestingRecoilState } from '../../__mocks__/utils/state';
import { generateWikiList } from '../../__mocks__/utils/wikiList';

describe('WikiContent 페이지 테스트', () => {
  const wikiList = generateWikiList(1);

  beforeEach(() => {
    render(
      <RecoilRoot>
        <InjectTestingRecoilState wikiList={wikiList} />
        <WikiCreator />
      </RecoilRoot>,

      { wrapper: BrowserRouter },
    );
  });

  test('게시글의 제목 입력창과 본문 입력창이 렌더링된다.', () => {
    const titleTextarea = screen.getByPlaceholderText('제목을 입력하세요');
    const contentTextarea = screen.getByPlaceholderText('내용을 입력하세요');

    expect(titleTextarea).toBeInTheDocument();
    expect(contentTextarea).toBeInTheDocument();
  });

  test('돌아가기 링크가 렌더링된다.', () => {
    const backLink = screen.getByRole('link', { name: '돌아가기' });

    expect(backLink).toBeInTheDocument();
  });

  test('추가하기, 취소하기 버튼이 렌더링된다.', () => {
    const addButton = screen.getByRole('button', { name: '추가하기' });
    const cancelButton = screen.getByRole('button', { name: '취소하기' });

    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test('추가하기 버튼은 비활성화되어 있다.', () => {
    const addButton = screen.getByRole('button', { name: '추가하기' });

    expect(addButton).toBeDisabled();
  });

  test('제목과 본문에 텍스트가 입력되면, 추가하기 버튼은 활성화된다.', () => {
    const titleTextarea = screen.getByPlaceholderText('제목을 입력하세요');
    const contentTextarea = screen.getByPlaceholderText('내용을 입력하세요');
    fireEvent.change(titleTextarea, { target: { value: '제목 텍스트 입력' } });
    fireEvent.change(contentTextarea, { target: { value: '내용 텍스트 입력' } });
    expect(titleTextarea).toHaveValue('제목 텍스트 입력');
    expect(contentTextarea).toHaveValue('내용 텍스트 입력');

    const addButton = screen.getByRole('button', { name: '추가하기' });

    expect(addButton).toBeEnabled();
  });
});
