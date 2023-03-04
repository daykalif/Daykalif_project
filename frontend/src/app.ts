export async function getInitialState(): Promise<API.InitialState> {
  return Promise.resolve({
    mode: 'dark',
    role: {
      isAdmin: true,
      isEditor: false,
    }
  });
}