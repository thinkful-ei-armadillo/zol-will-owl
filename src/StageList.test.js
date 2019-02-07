import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageList from './StageList';
import participants from './STORE';


describe('Messages component', () => {
  it('renders chatlist without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageList participants={participants}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders chatlist', () => {
    const tree = renderer
      .create(<StageList participants={participants}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});