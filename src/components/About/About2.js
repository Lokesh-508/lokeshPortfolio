import React from "react";

class About2 extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
       
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        
        
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
           "B-Tech Bachelor of Technology. I am pursuing my B-Tech in Sreenidhi Institute of Science and Technology as a Computer Science student. I have a CGPA of 8.5"
        },
        {
          id: "second-p-about",
          content:
            " I have done my Intermediate in Narayana Junior College, Hyderabad. I have 98% in my intermediate.."
        },
        {
          id: "third-p-about",
          content:
            " I have done my schooling in Liberty High School, Mulugu, Warangal. I have scored 97%."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-section">
        <div className="container">
        {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    <div>

                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Skills</strong>
            </h1>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
      </section>
    );
  }
}

export default About2;