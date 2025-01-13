import { useState, useEffect, useContext } from 'react'
import './ProjectsList.css'

// ASSETS
import LikeFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/like.svg'

//COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'

// UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList() {
    const appContext = useContext(AppContext)
    const [projects, setProjects] = useState([])
    const [favProjects, setFavProject] = useState([])

    const handleSavFavProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)

            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProject(savedFavProjects)
        }
    }, [])

    return (
        <div className='container'>
            <div className='projects-section'>
                <div className='projects-hero'>
                    <h2>{appContext.languages[appContext.language].projects.title}</h2>
                    <p>{appContext.languages[appContext.language].projects.subtitle}</p>
                </div>
                <div className='projects-grid'>
                    {
                        projects ?
                            projects.map((project) => (
                                <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                                    <div
                                        className='thumb tertiary-background'
                                        style={{ backgroundImage: `url(${project.thumb})` }}
                                    ></div >
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                    <Button buttonStyle='unstyled' onClick={() => handleSavFavProjects(project.id)}>
                                        <img src={favProjects.includes(project.id) ? LikeFilled : LikeOutline} width='20px' />
                                    </Button>
                                </div>
                            )) : null
                    }
                    {/* <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div >
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={Like} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div>
                    <div className='project-card d-flex jc-center al-center fd-column'>
                        <div className='thumb tertiary-background'></div>
                        <h3>João Silva</h3>
                        <p>BH, Brasil</p>
                        <img src={LikeFilled} width='20px' />
                    </div> */}
                </div>
            </div >
        </div>
    )
}

export default ProjectsList