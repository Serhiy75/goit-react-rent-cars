import { HomePage, Img } from './Home.styled';
import background from 'images/carrent.png';

const Home = () => {
  return (
    <HomePage>
      <h1>Welcome to our car rental website!</h1>
      <Img src={background} alt="car rental" />
      <h2>
        Here you can take a test drive and make your choice for renting a car!
      </h2>
      {/* <LinkBoks>
        <ButtonLink to="/catalog">Catalog</ButtonLink>
        <ButtonLink to="/favorites">Favorites</ButtonLink>
      </LinkBoks> */}
    </HomePage>
  );
};

export default Home;
