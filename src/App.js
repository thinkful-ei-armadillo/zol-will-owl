import React from 'react';
import ParticipantList from './ParticipantList';
import StageList from './StageList';
import Chatlist from './ChatList';
import participants from './STORE';
import chatEvents from './chatEvents';

function App() {
  return (
    <main className='App'>
      <ParticipantList participants={participants}/>
      <StageList participants={participants}/>
      <Chatlist chatEvents={chatEvents}/>
    </main>
  );
}

export default App;