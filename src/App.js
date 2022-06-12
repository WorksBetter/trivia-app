import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/UI/Card/Card";
import TriviaProvider from "./context/TriviaProvider";

const App = () => {
  return (
    <TriviaProvider>
      <Card>
        <Header />
        <Body />
        <Footer />
      </Card>
    </TriviaProvider>
  );
};

export default App;
