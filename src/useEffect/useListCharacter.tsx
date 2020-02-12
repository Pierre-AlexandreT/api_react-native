import { useState } from 'react';

export const useListCharacter = () => {
  const [characterList, setCharacterList] = useState(null);

  const [loading, setLoading] = useState();

  const [page, setpage] = useState(10);
};
