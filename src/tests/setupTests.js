import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Configure enzyme: To use the correct adapter for the react version 
Enzyme.configure({
    adapter: new Adapter()
});