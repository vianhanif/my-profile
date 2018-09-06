import ReactGA from 'react-ga';

export const Analytics = {
    InitAnalytics() {
        ReactGA.initialize('UA-84069724-4');
    },
    savePageToAnalytics(path) {
        ReactGA.pageview(path);
    }
}