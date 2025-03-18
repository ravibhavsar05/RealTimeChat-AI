// https://reactnavigation.org/docs/screen-tracking/
export default function getActiveRouteName(state: any) {
    if (!state) {
      return null;
    }
  
    const route = state?.routes[state.index];
  
    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route?.state);
    }
  
    return route?.name;
  }
  