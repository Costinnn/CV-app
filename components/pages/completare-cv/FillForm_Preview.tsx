"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import AddSvg from "@/public/SVG/AddSvg";
import TrashSvg from "@/public/SVG/TrashSvg";
import OtherCategories from "./OtherCategories";
import PreviewCv from "./PreviewCv";

import {
  ContactType,
  EducationStateType,
  ExperienceStateType,
  GeneralInfoType,
  LinksStateType,
  OtherCategoriesFormType,
  PersonalizedContentType,
  PersonalizedStateType,
  ProjectsStateType,
  VolunteeringStateType,
} from "@/types/globalTypes";

import "./FillForm_Preview.css";

const FillForm_Preview = () => {
  const router = useRouter();

  // LOGIC STATE
  const [otherCategories, setOtherCategories] = useState<OtherCategoriesFormType>({
    projects: false,
    volunteering: false,
    links: false,
    hobbies: false,
    personalized: false,
  });

  //#region  FINAL DATA VALUES
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType>({
    name: "Noel Taylor",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  });
  const [contact, setContact] = useState<ContactType>({ phone: "0750 000 000", email: "noel@gmail.com", address: "769 Lincoln Park, ML" });
  const [education, setEducation] = useState<EducationStateType[]>([
    { school: "Stanford University", specialization: "Master degree graduate", start: "2011.01.01", end: "2012.01.05", untilNow: false },
    { school: "University of Chicago", specialization: "Bachelor degree graduate", start: "2012.05.01", end: "", untilNow: true },
  ]);
  const [experience, setExperience] = useState<ExperienceStateType[]>([
    {
      position: "Senior web designer",
      company: "Creative agency",
      description: ["efaefa", "wfawfwf", "dwaawfaff"],
      start: "2020.02.01",
      end: "",
      untilNow: true,
    },
    {
      position: "Graphic designer",
      company: "Market agency",
      description: ["efaefa", "wfawfwf", "dwaawfaff aegaegfa aeg aegagae gaegaeg aegae gaeg aeg aegeagaegae"],
      start: "2015.02.03",
      end: "2020.01.03",
      untilNow: false,
    },
    {
      position: "Marketing manager",
      company: "Manufacturing agency",
      description: ["efaefa", "wfawfwf", "dwaawfaff"],
      start: "2013.01.01",
      end: "2015.02.03",
      untilNow: false,
    },
  ]);
  const [competences, setCompetences] = useState<string[]>([
    "Adope photoshop",
    "Microsoft Word",
    "HTML/CSS",
    "Adobe illustrator",
    "Microsoft powerpoint",
  ]);
  const [projects, setProjects] = useState<ProjectsStateType[]>([
    { title: "Residential Rebranding", link: "" },
    { title: "Food Logo", link: "" },
    { title: "Webside design", link: "" },
  ]);
  const [volunteering, setVolunteering] = useState<VolunteeringStateType[]>([
    {
      role: "volunteer",
      organisation: "Mercury",
      start: "2021.02.01",
      end: "",
      untilNow: true,
    },
    {
      role: "volunteer",
      organisation: "Reng",
      start: "2020.02.03",
      end: "2021.01.01",
      untilNow: false,
    },
  ]);
  const [links, setLinks] = useState<LinksStateType[]>([
    { title: "Github", link: "www.github.com" },
    { title: "Behance", link: "www.behance.com" },
  ]);
  const [hobbies, setHobbies] = useState<string[]>(["Reading books", "Traveling", "Playing chess", "Running"]);
  const [personalized, setPersonalized] = useState<PersonalizedStateType[]>([
    {
      sectionTitle: "References",
      content: [
        {
          title: "Darwin Bs. Magna",
          link: "",
          description: ["2813 Shobe Lane Mancos", "dafsdagagasrhgba", "gWGfwewefgwaegf"],
          start: "2020.02.03",
          end: "",
          untilNow: true,
        },
        {
          title: "Darwin B. Magna",
          link: "",
          description: ["2813 Shobe Lane Mancos", "dafsdagagasrhgba", "gWGfwewefgwaegf"],
          start: "2020.02.03",
          end: "",
          untilNow: true,
        },
      ],
    },
    {
      sectionTitle: "References23123",
      content: [
        {
          title: "Darwin B. Magna",
          link: "",
          description: ["2813 Shobe Lane Mancos", "dafsdagagasrhgba", "gWGfwewefgwaegf"],
          start: "2020.02.03",
          end: "",
          untilNow: true,
        },
      ],
    },
  ]);

  // TEMPORARY STATE
  const [educationState, setEducationState] = useState<EducationStateType>({ school: "", specialization: "", start: "", end: "", untilNow: false });
  const [experienceState, setExperienceState] = useState<ExperienceStateType>({
    position: "",
    company: "",
    description: [],
    start: "",
    end: "",
    untilNow: false,
  });
  const [experienceDescState, setExperienceDescState] = useState<string>("");
  const [competencesState, setCompetencesState] = useState<string>("");
  const [projectsState, setProjectsState] = useState<ProjectsStateType>({ title: "", link: "" });
  const [volunteeringState, setVolunteeringState] = useState<VolunteeringStateType>({
    role: "",
    organisation: "",
    start: "",
    end: "",
    untilNow: false,
  });
  const [linksState, setLinksState] = useState<LinksStateType>({ title: "", link: "" });
  const [hobbiesState, setHobbiesState] = useState<string>("");
  const [personalizedContentState, setPersonalizedContentState] = useState<PersonalizedContentType>({
    title: "",
    link: "",
    description: [],
    start: "",
    end: "",
    untilNow: false,
  });
  const [personalizedState, setPersonalizedState] = useState<PersonalizedStateType>({
    sectionTitle: "",
    content: [],
  });
  const [personalizedDescState, setPersonalizedDescState] = useState<string>("");
  //#endregion

  //#region HANDLERS
  const handleOtherCategories = (category: "projects" | "volunteering" | "links" | "hobbies" | "personalized") => {
    if (!otherCategories[category]) {
      router.push(`#s-${category}`);
    }

    setOtherCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleEducation = () => {
    if (educationState.school && educationState.specialization) {
      setEducation((prev) => [...prev, educationState]);
      setEducationState({ school: "", specialization: "", start: "", end: "", untilNow: false });
    }
  };

  const handleExperience = () => {
    if (experienceState.position && experienceState.company) {
      setExperience((prev) => [...prev, experienceState]);
      setExperienceState({ position: "", company: "", description: [], start: "", end: "", untilNow: false });
    }
  };

  const handleExperienceDesc = () => {
    if (experienceDescState) {
      setExperienceState((prev) => ({ ...prev, description: [...experienceState.description, experienceDescState] }));
      setExperienceDescState("");
    }
  };

  const handleCompetences = () => {
    if (competencesState) {
      setCompetences((prev) => [...prev, competencesState]);
      setCompetencesState("");
    }
  };

  const handleProjects = () => {
    if (projectsState.title && projectsState.link) {
      setProjects((prev) => [...prev, projectsState]);
      setProjectsState({ title: "", link: "" });
    }
  };

  const handleVolunteering = () => {
    if (volunteeringState.role && volunteeringState.organisation) {
      setVolunteering((prev) => [...prev, volunteeringState]);
      setVolunteeringState({
        role: "",
        organisation: "",
        start: "",
        end: "",
        untilNow: false,
      });
    }
  };

  const handleLinks = () => {
    if (linksState.title && linksState.link) {
      setLinks((prev) => [...prev, linksState]);
      setLinksState({ title: "", link: "" });
    }
  };

  const handleHobbies = () => {
    if (hobbiesState) {
      setHobbies((prev) => [...prev, hobbiesState]);
      setHobbiesState("");
    }
  };

  const handlePersonalized = () => {
    if (personalizedState.sectionTitle) {
      setPersonalized((prev) => [...prev, personalizedState]);
      setPersonalizedState({
        sectionTitle: "",
        content: [],
      });
    }
  };

  const handlePersonalizedState = () => {
    if (personalizedContentState.title) {
      setPersonalizedState((prev) => ({ ...prev, content: [...personalizedState.content, personalizedContentState] }));
      setPersonalizedContentState({ title: "", link: "", description: [], start: "", end: "", untilNow: false });
    }
  };

  const handlePersonalizedDesc = () => {
    if (personalizedDescState) {
      setPersonalizedContentState((prev) => ({ ...prev, description: [...personalizedContentState.description, personalizedDescState] }));
      setPersonalizedDescState("");
    }
  };

  const handleSubmit = () => {
    const cvData = { generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized };

    console.log(cvData);
  };

  const handleDelete = (
    category: "education" | "experience" | "competences" | "projects" | "volunteering" | "links" | "hobbies" | "personalized",
    key: string
  ) => {
    if (category === "education") {
      setEducation((prev) => prev.filter((item) => item.school + item.specialization !== key));
    }
    if (category === "experience") {
      setExperience((prev) => prev.filter((item) => item.company + item.position !== key));
    }
    if (category === "competences") {
      setCompetences((prev) => prev.filter((item) => item !== key));
    }
    if (category === "projects") {
      setProjects((prev) => prev.filter((item) => item.title + item.link !== key));
    }
    if (category === "volunteering") {
      setVolunteering((prev) => prev.filter((item) => item.role + item.organisation !== key));
    }
    if (category === "links") {
      setLinks((prev) => prev.filter((item) => item.title + item.link !== key));
    }
    if (category === "hobbies") {
      setHobbies((prev) => prev.filter((item) => item !== key));
    }
    if (category === "personalized") {
      setPersonalized((prev) => prev.filter((item) => item.sectionTitle !== key));
    }
  };
  //#endregion

  return (
    <div className="fillform_preview">
      
      <section className="fill-form section-wide">
        <form>
          {/* PERSONAL INFO */}
          <label>
            Nume complet*
            <input
              type="text"
              placeholder="Popescu Ion"
              value={generalInfo.name}
              onChange={(e) => setGeneralInfo((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </label>

          {/* INTRODUCTION */}
          <label>
            <span className="label-title">Introducere*</span>

            <textarea
              cols={30}
              rows={10}
              value={generalInfo.description}
              onChange={(e) => setGeneralInfo((prev) => ({ ...prev, description: e.target.value }))}
              required
            ></textarea>
          </label>

          {/* CONTACT */}
          <fieldset>
            <legend>Contact</legend>

            <label>
              Telefon
              <input
                type="phone"
                placeholder="0753 000 000"
                value={contact.phone}
                onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </label>

            <label>
              Email*
              <input
                type="email"
                placeholder="contact@gmail.com"
                value={contact.email}
                onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </label>

            <label>
              Adresa
              <input
                type="text"
                placeholder="Bucuresti, Romania"
                value={contact.address}
                onChange={(e) => setContact((prev) => ({ ...prev, address: e.target.value }))}
              />
            </label>
          </fieldset>

          {/* EDUCATION */}
          <fieldset>
            <legend>Educatie*</legend>

            {education.length > 0 &&
              education.map((item) => (
                <ul key={item.school + item.specialization} className="list-type-1">
                  <li>{item.school}</li>
                  <li>{item.specialization}</li>
                  <li>
                    {item.start} - {item.untilNow ? "Prezent" : item.end}
                  </li>
                  <button type="button" className="btn-delete" onClick={() => handleDelete("education", item.school + item.specialization)}>
                    <TrashSvg />
                  </button>
                </ul>
              ))}

            <label>
              Scoala
              <input
                type="text"
                placeholder="..."
                value={educationState.school}
                onChange={(e) => setEducationState((prev) => ({ ...prev, school: e.target.value }))}
              />
            </label>

            <label>
              Specializarea
              <input
                type="text"
                placeholder="..."
                value={educationState.specialization}
                onChange={(e) => setEducationState((prev) => ({ ...prev, specialization: e.target.value }))}
              />
            </label>

            <label>
              Perioada
              <div>
                <input
                  type="date"
                  value={educationState.start}
                  onChange={(e) => setEducationState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                />
                <input
                  type="date"
                  value={educationState.end}
                  onChange={(e) => setEducationState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                />
              </div>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                checked={educationState.untilNow}
                onChange={() => setEducationState((prev) => ({ ...prev, untilNow: !educationState.untilNow }))}
              />
              <span className="checkmark"></span>
              Pana in prezent
            </label>

            <button type="button" className="btn-add" onClick={handleEducation}>
              Adauga educatie <AddSvg />
            </button>
          </fieldset>

          {/* EXPERIENCE */}
          <fieldset>
            <legend>Experienta</legend>

            {experience.length > 0 &&
              experience.map((item) => (
                <ul key={item.company + item.position} className="list-type-1">
                  <li>{item.company}</li>
                  <li>{item.position}</li>
                  <li>
                    {item.start} - {item.untilNow ? "Prezent" : item.end}
                  </li>
                  {item.description.length > 0 &&
                    item.description.map((desc) => (
                      <li style={{ marginLeft: "20px" }} key={desc}>
                        - {desc}
                      </li>
                    ))}
                  <button type="button" className="btn-delete" onClick={() => handleDelete("experience", item.company + item.position)}>
                    <TrashSvg />
                  </button>
                </ul>
              ))}

            <label>
              Functie
              <input
                type="text"
                placeholder="..."
                value={experienceState.position}
                onChange={(e) => setExperienceState((prev) => ({ ...prev, position: e.target.value }))}
              />
            </label>

            <label>
              Companie
              <input
                type="text"
                placeholder="..."
                value={experienceState.company}
                onChange={(e) => setExperienceState((prev) => ({ ...prev, company: e.target.value }))}
              />
            </label>

            <label>
              Task-uri
              {experienceState.description.length > 0 && (
                <ul className="list-type-secondary">
                  {experienceState.description.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              )}
              <div className="input-box">
                <input type="text" placeholder="..." value={experienceDescState} onChange={(e) => setExperienceDescState(e.target.value)} />

                <button type="button" className="btn-add2" onClick={handleExperienceDesc}>
                  <AddSvg color="#f5f5f5" />
                </button>
              </div>
            </label>

            <label>
              Perioada
              <div>
                <input
                  type="date"
                  value={experienceState.start}
                  onChange={(e) => setExperienceState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                />
                <input
                  type="date"
                  value={experienceState.end}
                  onChange={(e) => setExperienceState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                />
              </div>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                checked={experienceState.untilNow}
                onChange={() => setExperienceState((prev) => ({ ...prev, untilNow: !experienceState.untilNow }))}
              />
              <span className="checkmark"></span>
              Pana in prezent
            </label>

            <button type="button" className="btn-add" onClick={handleExperience}>
              Adauga experienta <AddSvg />
            </button>
          </fieldset>

          {/* COMPETENCES */}
          <label className="simple-strings">
            <span className="label-title">Competente</span>

            {competences.length > 0 && (
              <ul>
                {competences.map((item) => (
                  <li key={item}>
                    {item}
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={(e) => {
                        e.currentTarget !== e.target && handleDelete("competences", item);
                      }}
                    >
                      <TrashSvg />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <input type="text" placeholder="..." value={competencesState} onChange={(e) => setCompetencesState(e.target.value)} />
            <button type="button" className="btn-add" onClick={handleCompetences}>
              Adauga competente <AddSvg />
            </button>
          </label>

          {/* ----OTHER CATEGORIES---- */}
          {/* PROJECTS */}
          {otherCategories.projects && (
            <fieldset id="s-projects">
              <legend>Proiecte</legend>

              {projects.length > 0 && (
                <ul className="list-type-2">
                  {projects.map((item) => (
                    <li key={item.title + item.link}>
                      {item.title}
                      <button type="button" className="btn-delete" onClick={() => handleDelete("projects", item.title + item.link)}>
                        <TrashSvg />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <label>
                Titlu
                <input
                  type="text"
                  placeholder="..."
                  value={projectsState.title}
                  onChange={(e) => setProjectsState((prev) => ({ ...prev, title: e.target.value }))}
                />
              </label>

              <label>
                Link (URL)
                <input
                  type="text"
                  placeholder="..."
                  value={projectsState.link}
                  onChange={(e) => setProjectsState((prev) => ({ ...prev, link: e.target.value }))}
                />
              </label>

              <button type="button" className="btn-add" onClick={handleProjects}>
                Adauga proiect <AddSvg />
              </button>
            </fieldset>
          )}

          {/* VOLUNTEERING */}
          {otherCategories.volunteering && (
            <fieldset id="s-volunteering">
              <legend>Voluntariat</legend>

              {volunteering.length > 0 &&
                volunteering.map((item) => (
                  <ul key={item.role + item.organisation} className="list-type-1">
                    <li>{item.role}</li>
                    <li>{item.organisation}</li>
                    <li>
                      {item.start} - {item.untilNow ? "Prezent" : item.end}
                    </li>
                    <button type="button" className="btn-delete" onClick={() => handleDelete("volunteering", item.role + item.organisation)}>
                      <TrashSvg />
                    </button>
                  </ul>
                ))}

              <label>
                Rol
                <input
                  type="text"
                  placeholder="..."
                  value={volunteeringState.role}
                  onChange={(e) => setVolunteeringState((prev) => ({ ...prev, role: e.target.value }))}
                />
              </label>

              <label>
                Organizatie
                <input
                  type="text"
                  placeholder="..."
                  value={volunteeringState.organisation}
                  onChange={(e) => setVolunteeringState((prev) => ({ ...prev, organisation: e.target.value }))}
                />
              </label>

              <label>
                Perioada
                <div>
                  <input
                    type="date"
                    value={educationState.start}
                    onChange={(e) => setEducationState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                  />
                  <input
                    type="date"
                    value={educationState.end}
                    onChange={(e) => setEducationState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                  />
                </div>
              </label>

              <label className="checkbox">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={volunteeringState.untilNow}
                  onChange={() => setVolunteeringState((prev) => ({ ...prev, untilNow: !volunteeringState.untilNow }))}
                />
                <span className="checkmark"></span>
                Pana in prezent
              </label>

              <button type="button" className="btn-add" onClick={handleVolunteering}>
                Adauga voluntariat <AddSvg />
              </button>
            </fieldset>
          )}

          {/* LINKS */}
          {otherCategories.links && (
            <fieldset id="s-links">
              <legend>Link-uri</legend>

              {links.length > 0 && (
                <ul className="list-type-2">
                  {links.map((item) => (
                    <li key={item.title + item.link}>
                      {item.title}
                      <button type="button" className="btn-delete" onClick={() => handleDelete("links", item.title + item.link)}>
                        <TrashSvg />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <label>
                Titlu
                <input
                  type="text"
                  placeholder="..."
                  value={linksState.title}
                  onChange={(e) => setLinksState((prev) => ({ ...prev, title: e.target.value }))}
                />
              </label>

              <label>
                Link (URL)
                <input
                  type="text"
                  placeholder="..."
                  value={linksState.link}
                  onChange={(e) => setLinksState((prev) => ({ ...prev, link: e.target.value }))}
                />
              </label>

              <button type="button" className="btn-add" onClick={handleLinks}>
                Adauga link <AddSvg />
              </button>
            </fieldset>
          )}

          {/* HOBBIES */}
          {otherCategories.hobbies && (
            <label className="simple-strings" id="s-hobbies">
              <span className="label-title">Hobbi-uri</span>
              {hobbies.length > 0 && (
                <ul>
                  {hobbies.map((item) => (
                    <li key={item}>
                      {item}
                      <button
                        type="button"
                        className="btn-delete"
                        onClick={(e) => {
                          e.currentTarget !== e.target && handleDelete("hobbies", item);
                        }}
                      >
                        <TrashSvg />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <input type="text" placeholder="..." value={hobbiesState} onChange={(e) => setHobbiesState(e.target.value)} />
              <button type="button" className="btn-add" onClick={handleHobbies}>
                Adauga hobbi <AddSvg />
              </button>
            </label>
          )}

          {/* PERSONALIZED */}
          {otherCategories.personalized && (
            <fieldset id="s-personalized">
              <legend>Sectiune personalizata</legend>

              {/* display sections */}
              {personalized.length > 0 &&
                personalized.map((item) => (
                  <ul key={item.sectionTitle} className="list-type-1">
                    <li style={{ textAlign: "center", fontSize: "17px" }}>{item.sectionTitle}</li>
                    {item.content.length > 0 &&
                      item.content.map((cItem) => (
                        <div key={cItem.title} style={{ marginTop: "20px" }}>
                          <li>{cItem.title}</li>
                          <li>
                            {cItem.start} - {cItem.untilNow ? "Prezent" : cItem.end}
                          </li>
                          {cItem.description.length > 0 &&
                            cItem.description.map((desc) => (
                              <li style={{ marginLeft: "20px" }} key={desc}>
                                - {desc}
                              </li>
                            ))}
                        </div>
                      ))}

                    <button type="button" className="btn-delete" onClick={() => handleDelete("personalized", item.sectionTitle)}>
                      <TrashSvg />
                    </button>
                  </ul>
                ))}

              <label>
                Titlu sectiune
                <input
                  type="text"
                  placeholder="..."
                  value={personalizedState.sectionTitle}
                  onChange={(e) => setPersonalizedState((prev) => ({ ...prev, sectionTitle: e.target.value }))}
                />
              </label>

              <div className="label-group">
                {/* display section content */}
                {personalizedState.content.length > 0 &&
                  personalizedState.content.map((item) => (
                    <ul key={item.title + item.link}>
                      <li>{item.title}</li>
                      <li>
                        {item.start} - {item.untilNow ? "Prezent" : item.end}
                      </li>
                      {item.description.length > 0 &&
                        item.description.map((desc) => (
                          <li style={{ marginLeft: "20px" }} key={desc}>
                            - {desc}
                          </li>
                        ))}
                    </ul>
                  ))}

                <label>
                  Titlu
                  <input
                    type="text"
                    placeholder="..."
                    value={personalizedContentState.title}
                    onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </label>

                <label>
                  Link (URL)
                  <input
                    type="text"
                    placeholder="..."
                    value={personalizedContentState.link}
                    onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, link: e.target.value }))}
                  />
                </label>

                <label>
                  Descriere
                  {personalizedContentState.description.length > 0 && (
                    <ul className="list-type-secondary">
                      {personalizedContentState.description.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="input-box">
                    <input type="text" placeholder="..." value={personalizedDescState} onChange={(e) => setPersonalizedDescState(e.target.value)} />

                    <button type="button" className="btn-add2" onClick={handlePersonalizedDesc}>
                      <AddSvg color="#f5f5f5" />
                    </button>
                  </div>
                </label>

                <label>
                  Perioada
                  <div>
                    <input
                      type="date"
                      value={personalizedContentState.start}
                      onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                    />
                    <input
                      type="date"
                      value={personalizedContentState.end}
                      onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                    />
                  </div>
                </label>

                <label className="checkbox">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={personalizedContentState.untilNow}
                    onChange={() => setPersonalizedContentState((prev) => ({ ...prev, untilNow: !personalizedContentState.untilNow }))}
                  />
                  <span className="checkmark"></span>
                  Pana in prezent
                </label>

                <button type="button" className="btn-add" onClick={handlePersonalizedState}>
                  Adauga continut <AddSvg />
                </button>
              </div>

              <button type="button" className="btn-primary2" onClick={handlePersonalized}>
                Adauga sectiune
              </button>
            </fieldset>
          )}

          <OtherCategories otherCategories={otherCategories} handleOtherCategories={handleOtherCategories} />

          <button type="button" className="btn-primary" onClick={handleSubmit}>
            Descarca CV
          </button>
        </form>
      </section>

      <PreviewCv inputData={{ generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized }} />
    </div>
  );
};

export default FillForm_Preview;
