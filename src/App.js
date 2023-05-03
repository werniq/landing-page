import './App.css';
import travel_2 from "./Assets/travel_2.jpg";
import travel_3 from "./Assets/travel_3.jpg";
import travel_4 from "./Assets/travel_4.jpg";
import Hero from './Components/Hero';
import Slider from './Components/Slider';
import Navbar from './Components/Navbar';

const navbarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "About"},
  {url: "#", title: "Contact"},
]

// dependencies: 
// react-icons
// react-intersection-observer

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_4} />
      <Slider imageSrc={travel_2} title="Travel" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." />
      <Slider imageSrc={travel_3} title="Explore" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum." flipped />
    </div>
  );
}

export default App;
