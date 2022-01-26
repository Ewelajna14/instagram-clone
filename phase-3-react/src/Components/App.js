
import '../App.css';
import Header from './Header';
import PostContainer from './PostContainer';

const myUser = {name: "Jaine"}


function App() {

  return (
    <div className="app">
      <Header/>
      <PostContainer myUser={myUser}/>
    </div>
  );
}

export default App;
