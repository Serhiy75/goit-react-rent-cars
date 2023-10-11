import { selectFavoritesCars } from 'redux/selectors';
import { DeleteBtn, LinkCatalog } from './Favorites.styled';

import { useDispatch, useSelector } from 'react-redux';
import { CarsList } from 'components/CarsList/CarsList';
import { deleteAllFavoriteCars } from 'redux/favoriteSlice';
import { NotFound } from 'components/NotFound/NotFound';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleDeleteAll = () => {
    dispatch(deleteAllFavoriteCars());
  };

  return (
    <>
      <div>
        {favoriteCars.length > 0 ? (
          <>
            <CarsList cars={favoriteCars} />
            <DeleteBtn onClick={handleDeleteAll}>
              delite all favorites cars
            </DeleteBtn>
          </>
        ) : (
          <>
            <NotFound />

            <LinkCatalog to="/catalog">Add some favorites cars</LinkCatalog>
          </>
        )}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Favorites;
