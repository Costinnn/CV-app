import React from "react";

import { PreviewCvPropType } from "@/types/globalTypes";

import "./Simple.css";

const Simple = ({ inputData }: PreviewCvPropType) => {
  return (
    <div className="model-simple">
      <h2>{inputData.generalInfo.name}</h2>

      {/* CONTACT */}
      <div>
        <h3>Contact</h3>

        <p>
          {inputData.contact.email && (
            <>
              <b>Email: </b>
              <a href={`mailto:${inputData.contact.email}`} className="link">
                {inputData.contact.email}
              </a>
            </>
          )}
          <span className="separator"> | </span>
          {inputData.contact.phone && (
            <>
              <b>Phone:</b> {inputData.contact.phone}
            </>
          )}
          <span className="separator"> | </span>
          {inputData.contact.address && (
            <>
              <b>Address:</b> {inputData.contact.address}
            </>
          )}
          <span className="separator"> | </span>
          {inputData.links.length > 0 &&
            inputData.links.map((item) => (
              <span key={item.title}>
                <a href={item.link} target="_blank" className="link">
                  {item.title}
                </a>
                <span className="separator"> | </span>
              </span>
            ))}
        </p>
      </div>

      {/* ABOUT */}
      <div>
        <h3>Despre</h3>
        <p>{inputData.generalInfo.description}</p>
      </div>

      {/* COMPETENCES */}
      {inputData.competences.length > 0 && (
        <div>
          <h3>Competente</h3>
          <p>
            {inputData.competences.map((item) => (
              <b key={item}>
                {item} <span className="separator"> | </span>
              </b>
            ))}
          </p>
        </div>
      )}

      {/* PERSONAL PROJECTS */}
      {inputData.projects.length > 0 && (
        <div>
          <h3>Proiecte personale</h3>
          <p>
            {inputData.projects.map((item) => (
              <span key={item.title}>
                <span className="link">{item.title}</span>
                <span className="separator"> | </span>
              </span>
            ))}
          </p>
        </div>
      )}

      {/* EDUCATION */}
      {inputData.education.length > 0 && (
        <div>
          <h3>Educatie</h3>
          <ul>
            {inputData.education.map((item) => (
              <li key={item.specialization}>
                <b>{item.specialization}</b> - {item.school}, {item.start} - {item.untilNow ? "Prezent" : item.end}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* EXPERIENCE */}
      {inputData.experience.length > 0 && (
        <div>
          <h3>Experienta</h3>
          <ul>
            {inputData.experience.map((item) => (
              <li key={item.position + item.company}>
                <b>{item.position}</b> - {item.company}, {item.start} - {item.untilNow ? "Prezent" : item.end}
                <div>{item.description.length > 0 && item.description.map((desc) => <p key={desc}>- {desc}</p>)}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* VOLUNTEERING */}
      {inputData.volunteering.length > 0 && (
        <div>
          <h3>Voluntariat</h3>
          <ul>
            {inputData.volunteering.map((item) => (
              <div key={item.role + item.organisation}>
                <li>
                  <b>{item.role}</b> - {item.organisation}, {item.start} - {item.untilNow ? "Prezent" : item.end}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}

      {/* HOBBIES */}
      {inputData.hobbies.length > 0 && (
        <div>
          <h3>Hobbi-uri</h3>
          <p>
            {inputData.hobbies.map((item) => (
              <span key={item}>
                {item} <span className="separator"> | </span>
              </span>
            ))}
          </p>
        </div>
      )}

      {/* PERSONALIZED */}
      {inputData.personalized.length > 0 &&
        inputData.personalized.map((item) => (
          <div key={item.sectionTitle}>
            <h3>{item.sectionTitle}</h3>
            <ul>
              {item.content.map((cItem) => (
                <li key={cItem.title + cItem.link}>
                  <b>{cItem.title}</b> , {cItem.start} - {cItem.untilNow ? "Prezent" : cItem.end}
                  <div>{cItem.description.length > 0 && cItem.description.map((desc) => <p key={desc}>- {desc}</p>)}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Simple;
