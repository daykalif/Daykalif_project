export async function getInitialState(): Promise<API.Mode> {
  return Promise.resolve({
    mode: 'dark',
  });
}