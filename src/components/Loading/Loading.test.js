import { render } from '@testing-library/react';
import Loading from './Loading.jsx';

describe('Loading', () => {
    test('Should render without crash', async () => {
        render(<Loading />);
    });
});
