import {useState} from 'react'

// Components
import Sample from './components/Sample'
import Known from './components/Known';
import Wakeup from './components/Wakeup';
import Reducer from "./components/Reducer";
import Wait from './components/Wait';

const App = () => {
  
  const [myName, setMyName] = useState<string>('Teja');
  console.log('App');

  return (
    <div>
      <h1>Hola!</h1>
      <Sample title='Sample Heading' name={myName} setMyName={setMyName} />
      <Known message="Hey! How are u doing?" />
      <Wakeup/>
      <Reducer/>
      <Wait/>
    </div>
  )
}

export default App