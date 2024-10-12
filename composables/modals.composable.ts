export const useIsProfileOpened = () => {
  return useState('isProfileOpened', () => false)
}

export const useIsSearchModalOpened = () => {
  return useState('isSearchModalOpened', () => false)
}