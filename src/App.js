import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css';
import app from './firebase/firebase.init';
import {useState} from react;
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleSingIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    .catch(error => {
      console.log('error: ', error)
    })
    })
  }
  return (
    <div className="App">
      <h1>See you to felling happy google mama~ !</h1>
      <button onClick ={handleSingIn}>Click Google</button>
    </div>
  );
}

export default App;
