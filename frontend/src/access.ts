export default function (initialState: API.InitialState) {

  return {
    isAdmin: initialState.role?.isAdmin,
    isEditor: initialState.role?.isEditor,
    isRoot: () => true,
    canAccess: (route: any) => {
      return route.path === '/';
    },
  };
}