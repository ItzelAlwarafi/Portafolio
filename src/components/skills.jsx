import { DiJavascript } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BiColor, BiLogoMongodb } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


export default function skills (){
    return( 
        <div className="Skills-component-container">
        <h1 className="Bold-text-titles-Back" > SKILLS </h1>
        <h1 className="Bold-text-titles"> SKILLS </h1>
        <div className="skills-container">
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#FFDE25'}} >JavaScript</h1>
    <DiJavascript className="skill-tecnology-logo" id="js-logo" color="#FFDE25" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart js" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="70, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">70%</text>
    </svg>
  </div>
  </div>

  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#F24900'}}>HTML</h1>
    <FaHtml5 className="skill-tecnology-logo" id="html-logo" color="#F24900" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart html" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="80, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">80%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#0B38EB'}}>CSS</h1>
    <FaCss3Alt className="skill-tecnology-logo" id="css-logo" color="#0B38EB" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart css" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="80, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">80%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#336F96'}}>React</h1>
    <FaReact className="skill-tecnology-logo" id="react-logo" color="#336F96" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart react" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="70, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">70%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#057825'}}>Node</h1>
    <FaNode className="skill-tecnology-logo" id="node-logo" color="#057825" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart node" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">60%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#FFDE25'}}>Python</h1>
    <FaPython className="skill-tecnology-logo" id="python-logo" color="#FFDE25" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart python" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="50, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">50%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#057825'}}>MongoDB</h1>
    <BiLogoMongodb className="skill-tecnology-logo" id="mongo-logo" color="#057825" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart mongo" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">60%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{color : '#A259FF'}} >FIGMA</h1>
    <CgFigma className="skill-tecnology-logo" id="figma-logo" color="#A259FF" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart figma" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="80, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">80%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{ color: '#00AAFF' }} >PHOTOSHOP</h1>
    <SiAdobephotoshop className="skill-tecnology-logo" id="ps-logo" color="#00AAFF" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart ps" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="60, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">60%</text>
    </svg>
  </div>
  </div>
  <div className="skill-item">
    <h1 className="Boldtext-titles" style={{ color: '#FF9A00' }}>ILLUSTRATOR</h1>
    <SiAdobeillustrator className="skill-tecnology-logo" id="il-logo" color="#FF9A00" />
    <div className="single-chart">
    <svg viewBox="0 0 36 36" className="circular-chart il" >
      <path className="circle-bg" d="M18 2.0845 
       a 15.9155 15.9155 0 0 1 0 31.831 
       a 15.9155 15.9155 0 0 1 0 -31.831" />
      <path className="circle" 
        strokeDasharray="80, 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">80%</text>
    </svg>
  </div>
  </div>
</div>


        </div>
     
    )
}