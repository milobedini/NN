import Header from '../../components/Header';
import CollabHome from './components/CollabHome';
import NNHome from './components/NNHome';
import SubHome from './components/SubHome';

const Home = () => {
  return (
    <>
      <Header />
      {/* NNHome */}
      <NNHome />
      {/* Sub Home */}
      <SubHome />
      {/* Collab Home */}
      <CollabHome />
    </>
  );
};

export default Home;
