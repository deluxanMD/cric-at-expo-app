import { LightTheme, DarkTheme } from '@utils/theme'

describe('Theme constants', () => {
  it('should have correct values for LightTheme', () => {
    expect(LightTheme).toEqual({
      primary: '#0098db',
      secondary: '#fff',
      background: '#fff',
      text: '#000',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3',
      success: '#4caf50',
    })
  })

  it('should have correct values for DarkTheme', () => {
    expect(DarkTheme).toEqual({
      primary: '#0098db',
      secondary: '#fff',
      background: '#fff',
      text: '#000',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3',
      success: '#4caf50',
    })
  })
})
