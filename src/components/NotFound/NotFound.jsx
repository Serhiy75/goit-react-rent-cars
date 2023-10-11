import errorImage from '../../images/pulp-fiction-john-travolta.gif';
import { Container, NotInlist, Travolta } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <Travolta src={errorImage} alt="Nothing in List" />
      <NotInlist>Nothing in List !</NotInlist>
    </Container>
  );
};
