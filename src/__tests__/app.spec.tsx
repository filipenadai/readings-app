import { render } from '@testing-library/react-native';
import { App } from '../App';

it('should be open app', () => {
  const { container } = render(<App />);
  expect(container);
});
