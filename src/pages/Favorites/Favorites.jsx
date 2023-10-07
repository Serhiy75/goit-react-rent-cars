// import { selectFavoritesCars } from 'redux/selectors';
// import { DeleteBtn, LinkCatalog, Travolta } from './Favorites.styled';
// import notfound from 'components/images/carrent.png';
// import { useDispatch, useSelector } from 'react-redux';

const Favorites = () => {
  // const dispatch = useDispatch();
  // const favoriteCars = useSelector(selectFavoritesCars);

  // const deleteAllFavoriteCars = () => {
  //   dispatch(deleteAllFavoriteCars());
  // };

  return (
    <div>
      {/* {favoriteCars.length > 0 ? (
        <DeleteBtn>onclick={deleteAllFavoriteCars}</DeleteBtn>
      ) : (
        <Travolta src={notfound} alt="Nothing in List">
          <LinkCatalog to="/catalog">Add to favorites</LinkCatalog>
        </Travolta>
      )} */}
    </div>
  );
};

export default Favorites;
