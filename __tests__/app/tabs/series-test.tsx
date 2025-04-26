import { render } from '@testing-library/react-native'

import SeriesScreen from '@tabs/series'

describe('<SeriesScreen />', () => {
  test('SeriesScreen renders correctly', () => {
    const tree = render(<SeriesScreen />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
