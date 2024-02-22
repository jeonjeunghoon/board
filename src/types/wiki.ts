export type Wiki = {
  id: number;
  title: string;
  content: string;
};

export type Wikis = {
  wikiPageList: Wiki[];
  currentPage: number;
  totalElements: number;
  totalPages: number;
};
