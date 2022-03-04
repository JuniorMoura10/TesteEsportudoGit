import Routes from './src/Routes';
import { ContextProvider } from './src/context';

const App = () => (
    <ContextProvider>
       <Routes />
    </ContextProvider>
);

export default App;
