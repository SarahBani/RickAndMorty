import { createBrowserHistory, History } from 'history';

// Create browser history to use in the Redux store
// var baseLocation: URL = new URL(document.baseURI);
// var baseUrl: string = baseLocation.pathname;
const baseUrl: string = document.getElementsByTagName('base')[0]?.getAttribute('href') as string;
// console.log(baseUrl);
export const browserHistory: History = createBrowserHistory({ basename: baseUrl });