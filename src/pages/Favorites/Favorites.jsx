import { selectFavoritesCars } from 'redux/selectors';
import { DeleteBtn, LinkCatalog, Travolta } from './Favorites.styled';
import notfound from '../../images/pulp-fiction-john-travolta.gif';
import { useDispatch, useSelector } from 'react-redux';
import { CarsList } from 'components/CarsList/CarsList';
import { deleteAllFavoriteCars } from 'redux/favoriteSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleDeleteAll = () => {
    dispatch(deleteAllFavoriteCars());
  };

  return (
    <div>
      {favoriteCars.length > 0 ? (
        <>
          <DeleteBtn onClick={handleDeleteAll}>
            delite all favorites cars
          </DeleteBtn>
          <CarsList cars={favoriteCars} />
        </>
      ) : (
        <>
          <Travolta src={notfound} alt="Nothing in List" />
          <p>Nothing in List</p>
          <LinkCatalog to="/catalog">Add some favorites cars</LinkCatalog>
        </>
      )}
    </div>
  );
};

export default Favorites;
