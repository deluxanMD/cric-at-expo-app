import { render } from '@testing-library/react-native'

import NewsScreen from '@tabs/news'

describe('<NewsScreen />', () => {
  test('NewsScreen renders correctly', () => {
    const tree = render(<NewsScreen />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
