import ReactGA from 'react-ga';

export const InitAnalytics = () => {
    ReactGA.initialize('UA-84069724-4');
}

export const savePageToAnalytics = (path) => {
    ReactGA.pageview(path);
}