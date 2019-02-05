import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList'
import renderer from 'react-test-renderer';


describe('<ParticipantList', () => {
    const testParticipantList = {
        // fill in props here
    };

    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ParticipantList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<ParticipantList />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});