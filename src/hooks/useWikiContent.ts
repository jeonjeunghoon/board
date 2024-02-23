import { useWiki } from './useWiki';

export const useWikiContent = (id: number) => {
  const { title, content } = useWiki(id);
  const parsedContent = content?.split(/\b/).filter((segment) => segment);

  return { title, content: parsedContent };
};
