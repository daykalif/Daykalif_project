export async function getInitialState(): Promise<API.InitialState> {
  return Promise.resolve({
    mode: 'dark',
    role: {
      isAdmin: false,
      isEditor: true,
    }
  });
}