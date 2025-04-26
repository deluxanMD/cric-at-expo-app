import { render } from '@testing-library/react-native'

import VideosScreen from '@tabs/videos'

describe('<VideosScreen />', () => {
  test('VideosScreen renders correctly', () => {
    const tree = render(<VideosScreen />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
