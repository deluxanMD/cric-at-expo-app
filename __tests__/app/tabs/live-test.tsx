import { render } from '@testing-library/react-native'

import LiveScreen from '@tabs/live'

describe('<LiveScreen />', () => {
  test('LiveScreen renders correctly', () => {
    const tree = render(<LiveScreen />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
