
import '../App.css';
import Header from './Header';
import PostContainer from './PostContainer';

const myUser = {username: "Jaine"}


function App() {

  return (
    <div className="app">
      <Header/>
      <PostContainer/>
    </div>
  );
}

export default App;
