import React, { useState } from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HomePageSearch from './HomePageSearch';
import PostsShowcase from '../../components/PostsShowcase';

const HomePage = ({ photos, home }) => {
  const [searchValue, setSearchValue] = useState('');
  const [checkedList, setCheckedList] = useState([]);
  const [postPhotosModalOpened, setPostPhotosModalOpened] = useState(false);
  const [slider, setSlider] = useState(false);
  const [sliderActive, setSliderActive] = useState(1);

  searchValue && console.log(searchValue);
  checkedList.length > 0 && console.log(checkedList);

  const photosFiltered =
    searchValue.length > 0 || checkedList.length > 0
      ? photos.filter((photo) => {
          return checkedList.length > 0
            ? photo.categories.some((el) =>
                el.toLowerCase().includes(searchValue.toLowerCase()),
              ) && checkedList.some((el) => photo.categories.includes(el))
            : searchValue.length > 0 &&
                photo.categories.some((el) =>
                  el.toLowerCase().includes(searchValue.toLowerCase()),
                );
        })
      : photos;

  return (
    <S.HomePageContainer>
      <AppContainer>
        <HomePageSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
        />
        <PostsShowcase
          home={home}
          photos={photosFiltered}
          setPostPhotosModalOpened={setPostPhotosModalOpened}
          slider={slider}
          setSlider={setSlider}
          sliderActive={sliderActive}
          setSliderActive={setSliderActive}
        />
      </AppContainer>
    </S.HomePageContainer>
  );
};

export default HomePage;
