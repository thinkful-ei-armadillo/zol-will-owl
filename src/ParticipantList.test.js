import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import participants from './STORE';


describe('<ParticipantList', () => {
    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ParticipantList participants={participants}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ParticipantList participants={participants}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});