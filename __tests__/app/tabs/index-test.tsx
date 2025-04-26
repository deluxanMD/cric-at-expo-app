import { render } from '@testing-library/react-native'

import HomeScreen from '@tabs/index'

describe('<HomeScreen />', () => {
  test('HomeScreen renders correctly', () => {
    const tree = render(<HomeScreen />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
