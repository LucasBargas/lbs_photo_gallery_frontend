import React, { useEffect, useRef } from 'react';
import * as S from './styles';

const categories = [
  'Natureza',
  'Cachorros',
  'Lobos',
  'Peixes',
  'Gatos',
  'Pandas',
  'Doces',
  'Frutas',
  'Universo',
];

const HomePageSearch = ({
  searchValue,
  setSearchValue,
  checkedList,
  setCheckedList,
}) => {
  const inputRef = useRef();

  const handleCheckedChange = ({ target }) => {
    if (target.checked) {
      setCheckedList([...checkedList, target.value]);
    }

    if (!target.checked) {
      setCheckedList(checkedList.filter((el) => el !== target.value));
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.HomePageSearchContainer>
      <h1>Seja bem vindo(a) a #Galeria de Fotos LBS</h1>

      <S.HomePageSearchArea onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="search"
          placeholder="Pesquise por uma categoria"
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
        />
      </S.HomePageSearchArea>

      <S.HomePageSearchFilter>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedList.includes(category)}
                  value={category}
                  onChange={handleCheckedChange}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </S.HomePageSearchFilter>
    </S.HomePageSearchContainer>
  );
};

export default HomePageSearch;
