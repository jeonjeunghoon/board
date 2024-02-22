import type { AtomEffect } from 'recoil';

type LocalStorageEffect = <RecoilState>(key: string) => AtomEffect<RecoilState>;

export const localStorageEffect: LocalStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) setSelf(JSON.parse(savedValue));

    onSet((newValue, _, isReset) => {
      if (isReset) return localStorage.removeItem(key);

      return localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
