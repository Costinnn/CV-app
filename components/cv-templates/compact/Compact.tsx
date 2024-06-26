import React from "react";
import Link from "next/link";

import { PreviewCvPropType } from "@/types/globalTypes";

import "./Compact.css";

const Compact = ({ inputData }: PreviewCvPropType) => {
  // Destructuring data
  const { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized } = inputData;

  return (
    <div className="model-compact">
      {/* NAME */}
      {generalInfo.name && <h2>{generalInfo.name}</h2>}

      {/* CONTACT */}
      {(contact.address || contact.email || contact.phone) && (
        <ul className="list-type1">
          {contact.phone && (
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="15" height="15">
                <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-.053,13.905c0,.605-.49,1.095-1.095,1.095l-1.56-.205c-.605,0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099,0l-.148,1.578c0,.605-.49,1.095-1.095,1.095l-1.56.205c-.605,0-1.095-.49-1.095-1.095l-.053-1.038c0-.747.314-1.416.804-1.906,2.711-2.711,9.874-2.517,12.391,0,.49.49.805,1.159.804,1.906l-.053,1.038Z" />
              </svg>
              {contact.phone}
            </li>
          )}

          {contact.email && (
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="20" height="20">
                <path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" />
                <path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />
              </svg>
              <a href={`mailto:${inputData.contact.email}`} className="link">
                {inputData.contact.email}
              </a>
            </li>
          )}

          {contact.address && (
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24">
                <path d="m1.183,9.74c.343-1.25,1.186-2.315,2.355-2.925l1.019-.435c.195,1.672.94,3.223,2.163,4.445l1.833,1.793c.922.901,2.146,1.398,3.447,1.398s2.526-.497,3.448-1.398l1.855-1.815c1.212-1.211,1.954-2.766,2.145-4.445,0,0,.979.408.999.417,1.426.711,2.387,2.078,2.573,3.658l.242,2.053-12.617,5.844L1.183,9.74Zm22.323,4.838l-11.255,5.213,4.634,4.209h2.446c1.34,0,2.62-.574,3.51-1.576.891-1.001,1.312-2.339,1.156-3.671l-.491-4.175ZM.842,12.131L.063,18.753c-.157,1.331.264,2.67,1.155,3.671.891,1.002,2.17,1.576,3.51,1.576h9.184L.842,12.131Zm16.658-6.631c0,1.47-.572,2.851-1.611,3.889l-1.84,1.801c-.565.553-1.307.828-2.049.828s-1.483-.275-2.048-.828l-1.833-1.793c-1.047-1.046-1.619-2.428-1.619-3.896s.572-2.851,1.611-3.889c1.039-1.039,2.42-1.611,3.889-1.611s2.85.572,3.889,1.611h0c1.039,1.039,1.611,2.42,1.611,3.889Zm-4-.006c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z" />
              </svg>
              {inputData.contact.address}
            </li>
          )}

          {links.length > 0 &&
            links.map((item) => (
              <li key={item.title}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M7.896,16.104c-.586-.585-.586-1.536,0-2.121,.586-.586,1.535-.586,2.121,0,1.326,1.326,3.64,1.327,4.966,0l4.989-4.989c1.369-1.369,1.369-3.597,0-4.966s-3.597-1.369-4.966,0c-.586,.586-1.535,.586-2.121,0-.586-.585-.586-1.536,0-2.121,2.538-2.539,6.67-2.539,9.208,0,2.539,2.539,2.539,6.669,0,9.208l-4.989,4.989c-1.27,1.27-2.937,1.904-4.604,1.904s-3.335-.635-4.604-1.904Zm-1.384,7.893c1.667,0,3.334-.635,4.604-1.904,.586-.585,.586-1.536,0-2.121-.586-.586-1.535-.586-2.121,0-1.37,1.37-3.598,1.369-4.966,0-1.369-1.369-1.369-3.597,0-4.966l4.961-4.961c1.37-1.37,3.598-1.37,4.966,0,.586,.586,1.535,.586,2.121,0,.586-.585,.586-1.536,0-2.121-2.539-2.539-6.669-2.539-9.208,0L1.907,12.885c-2.539,2.539-2.539,6.669,0,9.208,1.27,1.27,2.937,1.904,4.604,1.904Z" />
                </svg>
                <Link href={item.link} className="link">
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      )}

      {/* DESCRIPTION */}
      {generalInfo.description && <p className="introduction">{generalInfo.description}</p>}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="15" height="15">
              <path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z" />
              <path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" />
            </svg>
            Experiență
          </h3>

          <ul className="list-type2">
            {experience.map((item) => (
              <li key={item.position + item.company}>
                <span>
                  {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                </span>
                <div>
                  <h4>{item.position}</h4>
                  <i>
                    <b>{item.company}</b>
                  </i>
                  <ul>{item.description.length > 0 && item.description.map((cItem) => <li key={cItem}>&#8226; {cItem}</li>)}</ul>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <>
          <h3>
            <svg id="Layer_1" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
              <path d="m12 13.04-8-2.286v-7.754a3 3 0 0 1 3.824-2.884l.925.184a3.032 3.032 0 0 1 2.251 2.9v7.47l1 .286 1-.286v-7.47a3.015 3.015 0 0 1 2.176-2.881l1.075-.219a2.933 2.933 0 0 1 2.556.508 2.976 2.976 0 0 1 1.193 2.392v7.753zm12 6.96v-14a3 3 0 0 0 -2-2.816v9.079l-10 2.857-10-2.857v-9.079a3 3 0 0 0 -2 2.816v14h11v2h-4v2h10v-2h-4v-2z" />
            </svg>
            Educație
          </h3>
          <ul className="list-type2">
            {education.map((item) => (
              <li key={item.specialization + item.school}>
                <span>
                  {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                </span>
                <div>
                  <h4>{item.specialization}</h4>
                  <i>{item.school}</i>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* COMPETENCES */}
      {competences.length > 0 && (
        <>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" height="15" width="15">
              <path d="m24,2.449v2.551c0,1.105-.895,2-2,2h-3c-1.105,0-2-.895-2-2v-3c0-1.105.895-2,2-2h3c.455,0,.869.158,1.205.414l-2.647,2.714-1.11-1.195-1.387,1.441,1.651,1.766c.455.478,1.216.481,1.674.007l2.613-2.698Zm-4.287,11.191l-1.651-1.766,1.387-1.441,1.11,1.195,2.647-2.714c-.336-.256-.751-.414-1.205-.414h-3c-1.105,0-2,.895-2,2v3c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2.551l-2.613,2.698c-.459.474-1.22.471-1.674-.007Zm0,8.5l-1.651-1.766,1.387-1.441,1.11,1.195,2.647-2.714c-.336-.256-.751-.414-1.205-.414h-3c-1.105,0-2,.895-2,2v3c0,1.105.895,2,2,2h3c1.105,0,2-.895,2-2v-2.551l-2.613,2.698c-.459.474-1.22.471-1.674-.007ZM4.5,5c1.381,0,2.5-1.119,2.5-2.5S5.881,0,4.5,0s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4.5,4v8h-2v7h-2v-7h-1v7h-2v-7H0v-8c0-1.654,1.346-3,3-3h3c1.654,0,3,1.346,3,3Zm2-4.5v15c0,1.379,1.122,2.5,2.5,2.5h1.5v-2h-1.5c-.276,0-.5-.225-.5-.5v-6.5h2v-2h-2v-6.5c0-.275.224-.5.5-.5h1.5v-2h-1.5c-1.378,0-2.5,1.121-2.5,2.5Z" />
            </svg>
            Competențe
          </h3>

          <div className="list-type3">
            <div id="empty"></div>
            <p>
              {competences.map((item) => (
                <b key={item}>{item}, </b>
              ))}
            </p>
          </div>
        </>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="15" height="15">
              <path d="M13,0h6a5,5,0,0,1,5,5v6H13ZM11,0h-.959L0,10.041V11H3.172L11,3.172Zm2,18,5-5H13Zm11-5H20.828L13,20.828V24h.959L24,13.959ZM11,13H0v6a5,5,0,0,0,5,5h6Zm0-7L6,11h5Zm5.787,18H19a5,5,0,0,0,5-5V16.787ZM7.213,0H5A5,5,0,0,0,0,5V7.213Z" />
            </svg>
            Proiecte
          </h3>

          <div className="list-type3">
            <div id="empty"></div>
            <div>
              {projects.map((item) => (
                <Link href={item.link} key={item.title} className="link">
                  {item.title},
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* VOLUNTEERING */}
      {volunteering.length > 0 && (
        <>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="15" height="15">
              <path d="m15.5,23c0,.552-.448,1-1,1h-5c-.552,0-1-.448-1-1,0-1.5,1.737-3,3.5-3s3.5,1.5,3.5,3Zm-12.269-4c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm8.769,0c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM19,0H5C2.239,0,0,2.239,0,5v8.381c.819-.848,1.962-1.381,3.231-1.381,2.143,0,3.934,1.508,4.385,3.517.451-2.009,2.242-3.517,4.385-3.517s3.934,1.508,4.385,3.517c.451-2.009,2.242-3.517,4.385-3.517,1.269,0,2.412.533,3.231,1.381V5c0-2.761-2.239-5-5-5Zm1.769,19c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm-.019,1c-1.667,0-3.183,1.539-3.25,3,0,.552.448,1,1,1h4.5c.552,0,1-.448,1-1-.079-1.458-1.585-3-3.25-3Zm-17.5,0c-1.667,0-3.183,1.539-3.25,3,0,.552.448,1,1,1h4.5c.552,0,1-.448,1-1-.079-1.458-1.585-3-3.25-3Z" />
            </svg>
            Voluntariat
          </h3>

          <ul className="list-type2">
            {volunteering.map((item) => (
              <li key={item.role + item.organisation}>
                <span>
                  {item.start.replace("-", ".")} - {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
                </span>
                <div>
                  <h4>{item.role}</h4>
                  <i>{item.organisation}</i>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* HOBBIES */}
      {hobbies.length > 0 && (
        <>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Filled" x="0px" y="0px" viewBox="0 0 512 512" width="15" height="15">
              <g>
                <path d="M304.661,287.061L499.605,92.117c16.2-16.175,18.966-47.974-9.067-65.344c-23.989-11.806-42.541-1.743-51.179,8.341   L252.309,242.283C274.227,251.016,292.636,266.762,304.661,287.061z" />
                <path d="M106.667,405.333h106.667c35.346,0,64-28.654,64-64s-28.654-64-64-64C128,277.333,106.667,405.333,106.667,405.333z" />
                <path d="M341.333,405.333c0-35.346,28.654-64,64-64H512v-201.28L319.147,332.907c0.235,2.837,0.853,5.547,0.853,8.427   C319.929,400.214,272.214,447.93,213.333,448H106.667c-23.564,0.003-42.669-19.097-42.672-42.661c0-2.353,0.194-4.703,0.581-7.024   c9.685-58.069,49.237-154.325,136.384-162.816L407.573,6.677c2.03-2.045,4.166-3.982,6.4-5.803C411.072,0.64,408.299,0,405.333,0   H106.667C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.214,47.786,511.93,106.667,512h234.667V405.333z" />
                <path d="M405.333,384C393.551,384,384,393.551,384,405.333V505.6c15.051-5.162,28.744-13.65,40.064-24.832l56.704-56.704   c11.182-11.32,19.67-25.013,24.832-40.064H405.333z" />
              </g>
            </svg>
            Hobbi-uri
          </h3>

          <div className="list-type3">
            <div id="empty"></div>
            <p>
              {hobbies.map((item) => (
                <b key={item}>{item}, </b>
              ))}
            </p>
          </div>
        </>
      )}

      {/* PERSONALIZED */}
      {personalized.length > 0 &&
        personalized.map((item) => (
          <div key={item.sectionTitle}>
            <h3>{item.sectionTitle}</h3>

            {item.content.length > 0 &&
              item.content.map((cItem) => (
                <ul key={cItem.title} className="list-type2">
                  <li key={cItem.title}>
                    <span>
                      {cItem.start.replace("-", ".")} {cItem.start || cItem.end || cItem.untilNow ? "-" : ""}{" "}
                      {cItem.untilNow ? "Prezent" : cItem.end.replace("-", ".")}
                    </span>
                    <div>
                      <h4>{cItem.title}</h4>
                      <ul>{cItem.description.length > 0 && cItem.description.map((cdItem) => <li key={cdItem}>&#8226; {cdItem}</li>)}</ul>
                    </div>
                  </li>
                </ul>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Compact;
