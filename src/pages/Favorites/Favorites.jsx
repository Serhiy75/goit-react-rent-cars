import { selectFavoritesCars } from 'redux/selectors';
import {
  DeleteBtn,
  LinkCatalog,
  Notinlist,
  Travolta,
} from './Favorites.styled';
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
          <CarsList cars={favoriteCars} />
          <DeleteBtn onClick={handleDeleteAll}>
            delite all favorites cars
          </DeleteBtn>
        </>
      ) : (
        <>
          <Travolta src={notfound} alt="Nothing in List" />
          <Notinlist>Nothing in List !</Notinlist>
          <LinkCatalog to="/catalog">Add some favorites cars</LinkCatalog>
        </>
      )}
    </div>
  );
};

export default Favorites;
