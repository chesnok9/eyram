import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
    Admin,
    Resource,
    localStorageStore,
    StoreContextProvider,
} from 'react-admin';

import authProvider from './authProvider';
import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import { Layout, Login } from './layout';
import { mainDarkTheme, mainLightTheme } from './themes/mainTheme';

const i18nProvider = polyglotI18nProvider(
    locale => {
        if (locale === 'fr') {
            return import('./i18n/fr').then(messages => messages.default);
        }

        // Always fallback on english
        return englishMessages;
    },
    'en',
    [
        { locale: 'en', name: 'English' },
        { locale: 'fr', name: 'Français' },
    ]
);

const store = localStorageStore(undefined, 'ECommerce');

const App = () => {
    return (
        <Admin
            title=""
            store={store}
            // authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            lightTheme={mainLightTheme}
            darkTheme={mainDarkTheme}
            defaultTheme="light"
        >
            <Resource name="customers" />
        </Admin>
    );
};

const AppWrapper = () => (
    <StoreContextProvider value={store}>
        <App />
    </StoreContextProvider>
);

export default AppWrapper;
