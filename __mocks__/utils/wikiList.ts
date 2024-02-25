export const generateWikiList = (length: number) => {
  return Array.from({ length }, (_, i) => {
    const n = i + 1;

    return { id: n, title: `위키${n}`, content: `위키${n}내용` };
  });
};
