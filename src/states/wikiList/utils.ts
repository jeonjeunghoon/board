import { Wiki } from '../../types/wiki';

export const generateNewWikiId = (wikiList: Wiki[]) => {
  return wikiList.length ? Math.max(...wikiList.map(({ id }) => id)) + 1 : 0;
};

export const findWikiById = (wikiList: Wiki[], targetId: number) => {
  return wikiList.find(({ id }) => id === targetId);
};
