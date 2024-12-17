import './App.css';
import Footer from './common/Footer';
import KeyFaq from './components/KeyFaq';
import DataSecurity from './components/DataSecurity';
import HeadlessSearch from './components/HeadlessSearch';
import Hero from './components/Hero';
import SemanticsWork from './components/SemanticsWork';
import ApiLottie from './components/ApiLottie';

function App() {
  return (
    <>
      <Hero />
      <SemanticsWork />
      <ApiLottie/>
      <KeyFaq />
      <HeadlessSearch />
      <DataSecurity />
      <Footer />
    </>
  );
}

export default App;
