import { useWiki } from './useWiki';

export const useWikiParsedContent = (id: number) => {
  const { title, content } = useWiki(id);
  const regex = /[\S]+|\s+/g;
  const parsedContent = content?.match(regex);

  return { title, content: parsedContent };
};
