import SideBar from './components/sideBar'
import AboutMe from './components/aboutMe'
import Projects from './components/projectsList'
import Footer from './components/footer'
import WelcomePage from "./components/welcomePage"
import Skills from './components/skills'
import './app.css'

export default function app (){
    
    return (
        <div className='AppContainer'>
            <div className='sideBar'>
                <SideBar/>
             </div> 
        <div className='AppContentContainer'>

            <div className='welcomePage'>
                <WelcomePage />
            </div>
            <div className='aboutMe'>
                <AboutMe/>
            </div>
            <div className='skills'>
                <Skills/>
            </div>
            <div className='projectsContainer'>
                <Projects/>
            </div>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
       
       
        </div>
    )


}