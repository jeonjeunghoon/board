import { Wiki } from '../types/wiki';

export const validateNewWiki = (wikiList: Wiki[], newTitle: string) => {
  if (wikiList.find(({ title }) => title === newTitle)) return false;

  return true;
};
