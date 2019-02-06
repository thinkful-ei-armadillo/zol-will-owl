import React from 'react';
import ParticipantList from './ParticipantList';
import StageList from './StageList';
// import Chatlist from './ChatList';

function App() {
  return (
    <main className='App'>
      <ParticipantList />
      <StageList />
      {/* <Chatlist /> */}
    </main>
  );
}

export default App;