import { useState } from "react";

import Postlist from "./components/PostLists";
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false );

  function hideModalHandler() {
    setModalIsVisible(false);
}

  function showModalHandler() {
    setModalIsVisible(true);
  }
  return  (
    <>
      <MainHeader  onCreatePost={showModalHandler}/>
      <main>
        <Postlist isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>  
      </main>
    </>
  );
}

export default App;
