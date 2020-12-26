import useDarkMode from 'use-dark-mode';
import Switch from "react-switch";
import './App.css';
import Left from './componets/Left';
import Main from './componets/Main';
import Right from './componets/Right';


function App() {
  const {value, toggle, enable, disable} = useDarkMode()

  return (
    <div className="app">
      {/* Current Mode is <b>{value ? "Dark" : "Light" }</b>
      <Switch heigth={20} width={40} className="switch" onColor="#8e44ad" offColor="#777" onChange={toggle} checked={value} /> */}
      {/* left */}
      <Left dark={value} />
      {/* main */}
      <Main />
      {/* right */}
      <Right dark={value} />
      {console.log(value)}
      {/* <div className="box">Box</div> */}
      {/* <div className="box2">Box</div> */}
      {/* <div className="box3">Box</div> */}
    </div>
  );
}

export default App;
