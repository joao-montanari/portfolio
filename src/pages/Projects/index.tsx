import Card from '@Components/Card';
import './style.sass';

const ProjectsPage = () => {
    return (
        <div className='projects-page-container'>
            <h1>Projects</h1>
            <div className='projects-page-content'>
                <Card/>
            </div>
        </div>
    )
}

export default ProjectsPage;