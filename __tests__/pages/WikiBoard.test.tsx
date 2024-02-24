import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import WikiBoard from '../../src/pages/WikiBoard';
import { InjectTestingRecoilState } from '../../__mocks__/utils/state';

const generateWikiList = (length: number) => {
  return Array.from({ length }, (_, i) => {
    const n = i + 1;

    return { id: n, title: `위키${n}`, content: `위키${n}내용` };
  });
};

describe('Board 페이지 테스트', () => {
  describe('wikiList 길이 0', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <RecoilRoot>
            <InjectTestingRecoilState wikiList={[]} />
            <WikiBoard />
          </RecoilRoot>
        </BrowserRouter>,
      );
    });

    test('"위키 게시판" 텍스트가 렌더링된다.', () => {
      const pageTitle = screen.getByText('위키 게시판');

      expect(pageTitle).toBeInTheDocument();
    });

    test('게시글이 존재하지 않을 경우 "위키가 존재하지 않아요" 텍스트가 렌더링 된다.', () => {
      const emptyBoard = screen.getByText('위키가 존재하지 않아요');

      expect(emptyBoard).toBeInTheDocument();
    });

    test('위키 추가하기 버튼이 보여야 한다', () => {
      const addButton = screen.getByText('위키 추가하기');

      expect(addButton).toBeInTheDocument();
    });
  });

  describe('wikiList 길이 3', () => {
    const wikiList = generateWikiList(3);

    beforeEach(() => {
      render(
        <BrowserRouter>
          <RecoilRoot>
            <InjectTestingRecoilState wikiList={wikiList} />
            <WikiBoard />
          </RecoilRoot>
        </BrowserRouter>,
      );
    });

    test('게시판이 렌더링된다.', () => {
      const boardElement = screen.getByText('위키1');

      expect(boardElement).toBeInTheDocument();
    });

    test('게시글은 저장된 순서에 맞게 렌더링된다', () => {
      const wikiItemElements = screen.getAllByRole('link');

      wikiList.forEach((wiki, index) => {
        expect(wikiItemElements[index]).toHaveTextContent(wiki.title);
      });
    });

    test('게시글을 클릭하면 해당 게시글의 id를 포함한 라우트 주소로 이동한다', () => {
      fireEvent.click(screen.getByText(wikiList[0].title));

      expect(window.location.pathname).toContain(`/${wikiList[0].id}`);
    });

    test('페이지네이션이 렌더링된다.', () => {
      const pagination = screen.getByRole('pagination');

      expect(pagination).toBeInTheDocument();
    });
  });

  describe('wikiList 길이 6', () => {
    const wikiList = generateWikiList(6);

    beforeEach(() => {
      render(
        <BrowserRouter>
          <RecoilRoot>
            <InjectTestingRecoilState wikiList={wikiList} />
            <WikiBoard />
          </RecoilRoot>
        </BrowserRouter>,
      );
    });

    test('게시물이 6개 이상이면 다른 페이지 숫자와, 페이지 이동 버튼이 렌더링된다.', () => {
      const paginationButtonList = screen.getAllByRole('page-button');

      expect(paginationButtonList.length > 1).toBeTruthy();
    });

    test('페이지 숫자 버튼을 클릭하면 해당 페이지의 게시물이 렌더링된다.', () => {
      const paginationButtonList = screen.getAllByRole('page-button');

      fireEvent.click(paginationButtonList[1]);
      const secondPageWikiTitle = screen.getByText('위키6');

      expect(secondPageWikiTitle).toBeInTheDocument();
    });

    test('이전 페이지 이동 버튼을 클릭하면 이전페이지의 게시물이 렌더링된다', () => {
      fireEvent.click(screen.getByRole('next-button'));
      fireEvent.click(screen.getByRole('previous-button'));
      const firstPageWikiTitle = screen.getByText('위키1');

      expect(firstPageWikiTitle).toBeInTheDocument();
    });

    test('다음 페이지 이동 버튼을 클릭하면 다음페이지의 게시물이 렌더링된다', () => {
      fireEvent.click(screen.getByRole('next-button'));
      const secondPageWikiTitle = screen.getByText('위키6');

      expect(secondPageWikiTitle).toBeInTheDocument();
    });
  });

  describe('wikiList 길이 51', () => {
    const wikiList = generateWikiList(51);

    beforeEach(() => {
      render(
        <BrowserRouter>
          <RecoilRoot>
            <InjectTestingRecoilState wikiList={wikiList} />
            <WikiBoard />
          </RecoilRoot>
        </BrowserRouter>,
      );
    });

    test('게시물이 51개 이상이면 그룹 페이지네이션 버튼이 렌더링된다.', () => {
      const prevGroupPaginationButton = screen.getByRole('previous-group-button');
      const nextGroupPaginationButton = screen.getByRole('next-group-button');

      expect(prevGroupPaginationButton).toBeInTheDocument();
      expect(nextGroupPaginationButton).toBeInTheDocument();
    });

    test('다음 그룹 페이지 이동 버튼을 클릭하면 다음 그룹 페이지의 첫 번째 페이지로 이동한다', () => {
      fireEvent.click(screen.getByRole('next-group-button'));
      const secondGroupFirstPageWikiTitle = screen.getByText('위키51');

      expect(secondGroupFirstPageWikiTitle).toBeInTheDocument();
    });

    test('이전 그룹 페이지 이동 버튼을 클릭하면 이전 그룹 페이지의 첫 번째 페이지로 이동한다', () => {
      fireEvent.click(screen.getByRole('next-group-button'));
      fireEvent.click(screen.getByRole('previous-group-button'));
      const firstGroupFirstPageWikiTitle = screen.getByText('위키1');

      expect(firstGroupFirstPageWikiTitle).toBeInTheDocument();
    });
  });
});
