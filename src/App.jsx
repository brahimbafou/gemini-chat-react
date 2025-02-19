import './theme/base.css';
import './theme/effects.css';
import './theme/color.css';
import './theme/typo.css';
import './theme/responsive.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Chat from './components/Chat.jsx';

const App = () => (
    <div className="base display-column justify-center">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </div>
);

export default App;
