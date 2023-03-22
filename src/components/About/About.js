import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import About2 from "./About2";
function About() {
  return (
    
    
    <Container fluid className="about-section">
    
      <Container>
         <Row style={{ justifyContent: "center", padding: "10px" }}> 
       
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
               backgroundColor:"black",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            {/* <Aboutcard /> */}
              <About2/>

          </Col>
          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

         <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />  

         {/* <Github /> */}
        
        
      </Container>
      
  
    </Container>
  
  );
}

export default About;


// import React from "react";
// // import myImage from "../img/myImage.png";

      
   

// class About extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       skills: [
//         { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
//         { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
//         {
//           id: "JavaScript_skill",
//           content: "JavaScript",
//           porcentage: "90%",
//           value: "90"
//         },
       
//         {
//           id: "ReactJS_skill",
//           content: "ReactJS",
//           porcentage: "80%",
//           value: "80"
//         },
//         {
//           id: "Python_skill",
//           content: "Python",
//           porcentage: "75%",
//           value: "75"
//         },
        
        
//       ],
//       about_me: [
//         {
//           id: "first-p-about",
//           content:
//            "B-Tech Bachelor of Technology. I am pursuing my B-Tech in Sreenidhi Institute of Science and Technology as a Computer Science student. I have a CGPA of 8.5"
//         },
//         {
//           id: "second-p-about",
//           content:
//             " I have done my Intermediate in Alphores Junior College, Karimnagar. I have 99% in my intermediate.."
//         },
//         {
//           id: "third-p-about",
//           content:
//             " I have done my schooling in Tetrahedron Model School, Huzurabad. I have scored 98%."
//         }
//       ]
//     };
//   }

//   render() {
//     return (
//       <section id="about" className="about-mf sect-pt4 route">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="box-shadow-full">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="row">
//                       <div
//                         className="col-sm-6 col-md-5"
//                         style={{ margin: "0 auto" }}
//                       >
//                         <div
//                           className="about-img"
//                           style={{ textAlign: "center" }}
//                         >
//                           {/* <img
//                             className="img-fluid rounded b-shadow-a"
//                             alt=""
//                           /> */}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="skill-mf">
//                       {/* <p className="title-s">Skill</p> */}
//                       {this.state.skills.map(skill => {
//                         return (
//                           <React.Fragment key={skill.id}>
//                             <span>{skill.content}</span>{" "}
//                             <span className="pull-right">
//                               {skill.percentage}
//                             </span>
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 style={{ width: skill.porcentage }}
//                                 aria-valuenow={skill.value}
//                                 aria-valuemin="0"
//                                 aria-valuemax="100"
//                               ></div>
//                             </div>
//                           </React.Fragment>
//                         );
//                       })}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="about-me pt-4 pt-md-0">
//                       <div className="title-box-2">
//                         <h5 className="title-left">About Me</h5>
//                       </div>
//                       {this.state.about_me.map(content => {
//                         return (
//                           <p className="lead" key={content.id}>
//                             {content.content}
//                           </p>
//                         );
//                       })}
   
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default About;
