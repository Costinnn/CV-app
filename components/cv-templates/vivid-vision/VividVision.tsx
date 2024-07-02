import React from "react";
import Link from "next/link";

import { PreviewCvPropType } from "@/types/globalTypes";

import FacebookSvg from "@/public/SVG/templates/FacebookSvg";
import InstagramSvg from "@/public/SVG/templates/InstagramSvg";
import LinkedinSvg from "@/public/SVG/templates/LinkedinSvg";
import TwitterSvg from "@/public/SVG/templates/TwitterSvg";
import PinterestSvg from "@/public/SVG/templates/PinterestSvg";
import YoutubeSvg from "@/public/SVG/templates/YoutubeSvg";
import BehanceSvg from "@/public/SVG/templates/BehanceSvg";
import GithubSvg from "@/public/SVG/templates/GithubSvg";
import LinkSvg from "@/public/SVG/templates/LinkSvg";

import { colors } from "./VividVisionPdf";

import "./VividVision.css";

const VividVision = ({ inputData }: PreviewCvPropType) => {
  // Destructuring data
  const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

  const experienceDuration: string[] = [];

  // calculate duration for each experience element
  if (experience.length > 0) {
    for (const item of experience) {
      const time = (item.end ? new Date(item.end).valueOf() : Date.now().valueOf()) - new Date(item.start).valueOf();
      const duration = new Date(time);
      const years = duration.getFullYear() - 1970;
      const months = duration.getMonth();

      if (years > 0 && months > 0) {
        experienceDuration.push(`${years} ani ${months} luni`);
      } else if (years > 0 && months === 0) {
        experienceDuration.push(`${years} ani`);
      } else if (years === 0 && months > 0) {
        experienceDuration.push(`${months} luni`);
      } else {
        experienceDuration.push("");
      }
    }
  }

  return (
    <div className="model-vividvision">
      {/* NAME - CONTACT - LINKS */}
      <div className="row1">
        {/* name */}
        {generalInfo.name && <h2>{generalInfo.name}</h2>}

        <div className="box">
          {/* contact */}
          {(contact.address || contact.email || contact.phone) && (
            <ul>
              {contact.email && (
                <li>
                  <a href={`mailto:${inputData.contact.email}`} className="link">
                    {inputData.contact.email}
                  </a>
                </li>
              )}

              {contact.phone && <li>{contact.phone}</li>}
              {contact.address && <li>{contact.address}</li>}
            </ul>
          )}

          {/* links */}
          {links.length > 0 && (
            <ul className="links-box">
              {links.map((item) => (
                <li key={item.title}>
                  {item.link.includes("www.facebook.com") ? (
                    <FacebookSvg />
                  ) : item.link.includes("www.instagram.com") ? (
                    <InstagramSvg />
                  ) : item.link.includes("www.linkedin.com") ? (
                    <LinkedinSvg />
                  ) : item.link.includes("www.twitter.com") ? (
                    <TwitterSvg />
                  ) : item.link.includes("www.pinterest.com") ? (
                    <PinterestSvg />
                  ) : item.link.includes("www.youtube.com") ? (
                    <YoutubeSvg />
                  ) : item.link.includes("www.behance.com") ? (
                    <BehanceSvg />
                  ) : item.link.includes("www.github.com") ? (
                    <GithubSvg />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <LinkSvg size="12" />
                      <b> {item.title}</b>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ABOUT */}
      {generalInfo.description && <p>{generalInfo.description}</p>}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <div className="experience">
          <div className="design">
            {experience.map((item, idx) => (
              <div key={item.position + item.company} className="item">
                <div className="row1">
                  <div className="content">
                    <h3>{item.position}</h3>
                    <span>{item.company}</span>
                  </div>

                  <div className="column" style={{ backgroundColor: "#616161" }}></div>
                </div>
                <div>
                  <div className="row2" id={`color${idx <= 9 ? idx : idx - 9}`}>
                    {experienceDuration[idx].length > 0 && experienceDuration[idx]}
                  </div>

                  <div className={`row3 ${idx === 0 ? "first-shape" : idx === experience.length - 1 ? "last-shape" : "middle-shape"}`}>
                    <span>
                      {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="content">
            {experience.map((item, idx) => (
              <div key={item.position + item.company}>
                <div className="column" style={{ backgroundColor: idx <= 10 ? colors[idx] : colors[idx - 10] }}></div>

                <ul>
                  {item.description.map((dItem) => (
                    <li key={dItem}>{dItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* COMPETENCES - PROJECTS */}
      <div className="comp-proj">
        <div className="competences">
          {competences.length > 0 && <h3>Competențe</h3>}

          <div className="content">
            {competences.map((item) => (
              <div key={item} className="item">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="projects">
          {projects.length > 0 && <h3>Proiecte</h3>}

          <div className="content">
            {projects.map((item) => (
              <div key={item.title} className="item">
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EDUCATION - VOLUNTEERING */}
      <div className="list-type1">
        {education.length > 0 && (
          <div>
            <h3>Educație</h3>

            <div className="content-type2">
              <div className="column" style={{ backgroundColor: "orange" }}></div>

              <ul>
                {education.map((item) => (
                  <li key={item.specialization + item.school}>
                    <b>{item.specialization}</b>
                    <i>
                      <b>{item.school}</b>
                    </i>
                    <span>
                      {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {volunteering.length > 0 && (
          <div>
            <h3>Voluntariat</h3>

            <div className="content-type2">
              <div className="column" style={{ backgroundColor: "#5c45fd" }}></div>

              <ul>
                {volunteering.map((item) => (
                  <li key={item.role + item.organisation}>
                    <b>{item.role}</b>
                    <i>
                      <b>{item.organisation}</b>
                    </i>
                    <span>
                      {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* HOBBIES */}
      {hobbies.length > 0 && (
        <>
          <h3>Hobbi-uri</h3>
          <ul className="hobbies">
            {hobbies.map((item) => (
              <li key={item}>{item}, </li>
            ))}
          </ul>
        </>
      )}

      {/* PERSONALIZED */}

      {personalized.length > 0 &&
        personalized.map((item) => (
          <div key={item.sectionTitle} className="personalized">
            <h3>{item.sectionTitle}</h3>

            {item.content.length > 0 &&
              item.content.map((cItem, idx) => (
                <div key={cItem.title} className="content-type2">
                  <div className="column" style={{ backgroundColor: idx <= 10 ? colors[idx] : colors[idx - 10] }}></div>

                  <ul>
                    <li>
                      <b>{cItem.title}, </b>
                      <span>
                        {cItem.start.replace("-", ".")} {(cItem.start || cItem.end || cItem.untilNow) && " - "}{" "}
                        {cItem.untilNow ? "Prezent" : cItem.end.replace("-", ".")}
                      </span>
                    </li>

                    {cItem.description.map((cdItem) => (
                      <li key={cdItem}>
                        <span className="dot" style={{ backgroundColor: "orange" }}></span>
                        {cdItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default VividVision;
