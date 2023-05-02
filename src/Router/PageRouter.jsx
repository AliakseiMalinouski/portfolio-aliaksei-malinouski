import {Route, Routes} from 'react-router-dom';
import {PageAbout} from '../Pages/PageAbout';
import { PageContacts } from '../Pages/PageContacts';
import { PageHome } from '../Pages/PageHome';
import {PageProjects} from '../Pages/PageProjects';
import {PageProjectsDetails} from '../Pages/PageProjectsDetails';

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<PageHome/>}/>
            <Route path='/about' element={<PageAbout/>}/>
            <Route path='/projects' element={<PageProjects/>}/>
            <Route path='/contacts' element={<PageContacts/>}/>
            <Route path='/projectsdetails/:projectname' element={<PageProjectsDetails/>}/>
        </Routes>
    )
}