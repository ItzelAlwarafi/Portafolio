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
        <h1 className="Bold-text-titles-Back" > skills </h1>
        <h1 className="Bold-text-titles"> skills </h1>

        <div className=" skills-container">
        <DiJavascript className="skill-tecnology-logo" id="js-logo"  color="#FFDE25"/>
        <FaHtml5 className="skill-tecnology-logo" id="html-logo" color="#F24900"/>
        <FaCss3Alt className="skill-tecnology-logo" id="css-logo" color="#0B38EB"/>
        <FaReact className="skill-tecnology-logo" id="react-log" color="#336F96"/>
        <FaNode className="skill-tecnology-logo" id="node-log" color="#057825"/>
        <FaPython className="skill-tecnology-logo" id="python-log" color="#FFDE25"/>
        <BiLogoMongodb className="skill-tecnology-logo" id="mongo-logo" color="#057825"/>
        <CgFigma className="skill-tecnology-logo" id="figma-logo" color="A259FF"/>
        <SiAdobephotoshop  className="skill-tecnology-logo" id="ps-logo" color="#00AAFF"/>
        <SiAdobeillustrator className="skill-tecnology-logo" id="il-logo" color="#FF9A00"/>
        </div>
           <div className="skill-container-messurments">
            <h1 > JavaScript </h1>
            
           </div>

        </div>
     
    )
}