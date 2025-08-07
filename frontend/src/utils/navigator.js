// Navigator utility to handle navigation outside of components
let navigator = null

export const setNavigator = (nav) => {
  navigator = nav
}

export const getNavigator = () => {
  return navigator
}

// Helper functions for common navigation patterns
export const navigateTo = (path) => {
  if (navigator) {
    navigator(path)
  }
}

export const goBack = () => {
  if (navigator) {
    navigator(-1)
  }
}

export const goForward = () => {
  if (navigator) {
    navigator(1)
  }
}
