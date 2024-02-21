type WikiPage = {
  id: number;
  title: string;
  content: string;
};

export type Wikis = {
  wikiPageList: WikiPage[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};
