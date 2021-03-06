import React, { Component } from 'react'

export class Experience extends Component {

    render() {

        const experience = this.props.experience;

        return (
            <div>
                <h3>{experience.employer} - {experience.title} -  {experience.start_date} - {experience.end_date} </h3>
                <p>{experience.employer_desc}</p>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Responsibilities</h5>
                        <ul>
                            {experience.responsibilities.map(responsibility => {
                                return (
                                    <li>{responsibility}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h5>Technologies</h5>
                        <ul>
                            {experience.technologies.map(technology => {
                                return (
                                    <li>{technology}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}