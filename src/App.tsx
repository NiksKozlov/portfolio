import './App.css';
import {Header} from './components/Header/Header';
import {HomePage} from './components/HomePage/HomePage';
import {SkillsPage} from './components/SkillsPage/SkillsPage';
import {ProjectsPage} from './components/ProjectsPage/ProjectsPage';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <SkillsPage />
            <ProjectsPage />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App;
