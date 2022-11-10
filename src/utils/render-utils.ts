// check if we're rendering on server vs client
export function isServer() {
  // return window === undefined;
  // return !window;
  return !process.browser;
}

export function isClient() {
  return !isServer();
}
