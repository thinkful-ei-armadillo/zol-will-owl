import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chatlist from './ChatList';
import chatEvents from './chatEvents';


describe('Messages component', () => {
  it('renders chatlist without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chatlist chatEvents={chatEvents}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders chatlist', () => {
    const tree = renderer
      .create(<Chatlist chatEvents={chatEvents}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});