import './App.css';
import MyApp from "./components/MyApp/MyApp";
import spider0 from "./assets/spider0.png";
import spider1 from "./assets/spider3.png";
import spider2 from "./assets/spider2.png";
import spider4 from "./assets/spider4.png";
import venom from "./assets/venom.png";

function App() {
  return (
    <div className='app'>
      <div className='header'>
    <h1>Until Marvel Spider-Man 2 is released!</h1>
    </div>
      <img className="spidermanIMG0" src={spider0} alt='image of Spider-Man'></img>
      <img className="spidermanIMG1" src={spider1} alt='image of Spider-Man'></img>      
      <img className="venomIMG" src={venom} alt='image of Venom'></img>
    <MyApp/>
    <img className="spidermanIMG2" src={spider2} alt='image of Spider-Man'></img>
    <img className="spidermanIMG3" src={spider4} alt='image of Spider-Man'></img>
    </div>

  );
}

export default App;
