import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
          setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section_title">Background</h2>
        <span className="section_subtitle">My Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" :
                    "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icons"></i>
                    Education
                </div>
                
                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : 
                    "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-suitcase-alt qualification_icons"></i>
                    Experience
                </div>         
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_contents qualification_content-active" :
                    "qualification_contents"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">New York Univeristy </h3>
                            <span className="qualification_subtitle">Masters of Science - Computer Science</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2021 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                <span className="qualification_line"></span>
                            </div>
                        <div>
                            <h3 className="qualification_title">University of Mumbai</h3>
                            <span className="qualification_subtitle">Bachelors of Engineering - Computer Engineering</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2017 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Junior College</h3>
                            <span className="qualification_subtitle">Passed with 81%</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2015 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                
                            </div>
                        <div>
                            <h3 className="qualification_title">Vasant Vihar High School</h3>
                            <span className="qualification_subtitle">Passed with 92.6%</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2015 - 2005
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_contents qualification_content-active" :
                    "qualification_contents"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Memoryz</h3>
                            <span className="qualification_subtitle">Backend Developer Intern</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                Jan. 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                            
                        <div>
                            <h3 className="qualification_title">TrekIt</h3>
                            <span className="qualification_subtitle">Software Developer</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                Apr. 2023 - Present
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">IpserLab</h3>
                            <span className="qualification_subtitle">SDE Intern</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                Feb. 2023 - May 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                <span className="qualification_line"></span>

                            </div>
                        <div>
                            <h3 className="qualification_title">MarketFusion</h3>
                            <span className="qualification_subtitle">SDE Intern</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                Jun. 2022 - Aug. 2022
                            </div>
                        </div>
                    </div>
                    <div className="qualification_data">
                
                        <div>
                            <h3 className="qualification_title">Myraa Technologies </h3>
                            <span className="qualification_subtitle">Testing Intern</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                Aug. 2019 - Sept. 2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification_circle"></span>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;