"use client";

import React, { useState } from "react";

import AddSvg from "@/public/SVG/AddSvg";
import TrashSvg from "@/public/SVG/TrashSvg";
import OtherCategories from "./OtherCategories";
import {
  ContactType,
  EducationStateType,
  ExperienceStateType,
  GeneralInfoType,
  HobbiesStateType,
  LinksStateType,
  OtherCategoriesFormType,
  PersonalizedStateType,
  ProjectsStateType,
  VolunteeringStateType,
} from "@/types/globalTypes";

import "./FillForm.css";

const FillForm = () => {
  // LOGIC STATE
  const [otherCategories, setOtherCategories] = useState<OtherCategoriesFormType>({
    projects: false,
    volunteering: false,
    links: false,
    hobbies: false,
    personalized: false,
  });

  // FINAL DATA VALUES
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType>({ name: "", description: "" });
  const [contact, setContact] = useState<ContactType>({ phone: "", email: "", address: "" });
  const [education, setEducation] = useState<EducationStateType[]>([]);
  const [experience, setExperience] = useState<ExperienceStateType[]>([]);
  const [competences, setCompetences] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectsStateType[]>([]);
  const [volunteering, setVolunteering] = useState<VolunteeringStateType[]>([]);
  const [links, setLinks] = useState<LinksStateType[]>([]);
  const [hobbies, setHobbies] = useState<HobbiesStateType[]>([]);
  const [personalized, setPersonalized] = useState<PersonalizedStateType[]>([]);

  // TEMPORARY STATE
  const [educationState, setEducationState] = useState<EducationStateType>({ school: "", specialization: "", start: "", end: "", untilNow: false });
  const [experienceState, setExperienceState] = useState<ExperienceStateType>({ position: "", company: "", start: "", end: "", untilNow: false });
  const [competencesState, setCompetencesState] = useState<string>("");
  const [projectsState, setProjectsState] = useState<ProjectsStateType>({ title: "", link: "" });
  const [volunteeringState, setVolunteeringState] = useState<VolunteeringStateType>({
    role: "",
    organisation: "",
    description: "",
    start: "",
    end: "",
    untilNow: false,
  });
  const [linksState, setLinksState] = useState<LinksStateType>({ title: "", link: "" });
  const [hobbiesState, setHobbiesState] = useState<HobbiesStateType>({ title: "", description: "" });
  const [personalizedState, setPersonalizedState] = useState<PersonalizedStateType>({
    sectionTitle: "",
    title: "",
    link: "",
    description: "",
    start: "",
    end: "",
    untilNow: false,
  });

  // HANDLERS
  const handleOtherCategories = (category: "projects" | "volunteering" | "links" | "hobbies" | "personalized") => {
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
      setExperienceState({ position: "", company: "", start: "", end: "", untilNow: false });
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
        description: "",
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
    if (hobbiesState.title) {
      setHobbies((prev) => [...prev, hobbiesState]);
      setHobbiesState({ title: "", description: "" });
    }
  };

  const handlePersonalized = () => {
    if (personalizedState.title && personalizedState.sectionTitle) {
      setPersonalized((prev) => [...prev, personalizedState]);
      setPersonalizedState({
        sectionTitle: "",
        title: "",
        link: "",
        description: "",
        start: "",
        end: "",
        untilNow: false,
      });
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
      setHobbies((prev) => prev.filter((item) => item.title !== key));
    }
    if (category === "personalized") {
      setPersonalized((prev) => prev.filter((item) => item.sectionTitle + item.title !== key));
    }
  };

  return (
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
          Introducere*
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
            <AddSvg />
            Adauga educatie
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
            <AddSvg />
            Adauga experienta
          </button>
        </fieldset>

        {/* COMPETENCES */}
        <label id="competences">
          Competente
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
          <button type="button" className="btn-primary2" onClick={handleCompetences}>
            Adauga
          </button>
        </label>

        {/* ----OTHER CATEGORIES---- */}
        {/* PROJECTS */}
        {otherCategories.projects && (
          <fieldset>
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
              <AddSvg />
              Adauga proiect
            </button>
          </fieldset>
        )}

        {/* VOLUNTEERING */}
        {otherCategories.volunteering && (
          <fieldset>
            <legend>Voluntariat</legend>

            {volunteering.length > 0 &&
              volunteering.map((item) => (
                <ul key={item.role + item.organisation} className="list-type-1">
                  <li>{item.role}</li>
                  <li>{item.organisation}</li>
                  <li>{item.description}</li>
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
              Descriere
              <textarea
                cols={30}
                rows={5}
                value={volunteeringState.description}
                onChange={(e) => setVolunteeringState((prev) => ({ ...prev, description: e.target.value }))}
              ></textarea>
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
              <AddSvg />
              Adauga voluntariat
            </button>
          </fieldset>
        )}

        {/* LINKS */}
        {otherCategories.links && (
          <fieldset>
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
              <AddSvg />
              Adauga link
            </button>
          </fieldset>
        )}

        {/* HOBBIES */}
        {otherCategories.hobbies && (
          <fieldset>
            <legend>Hobbi-uri</legend>

            {hobbies.length > 0 &&
              hobbies.map((item) => (
                <ul key={item.title} className="list-type-1">
                  <li>{item.title}</li>
                  <li>{item.description.slice(0, 10)}...</li>
                  <button type="button" className="btn-delete" onClick={() => handleDelete("hobbies", item.title)}>
                    <TrashSvg />
                  </button>
                </ul>
              ))}

            <label>
              Titlu
              <input
                type="text"
                placeholder="..."
                value={hobbiesState.title}
                onChange={(e) => setHobbiesState((prev) => ({ ...prev, title: e.target.value }))}
              />
            </label>

            <label>
              Descriere
              <textarea
                cols={30}
                rows={5}
                value={hobbiesState.description}
                onChange={(e) => setHobbiesState((prev) => ({ ...prev, description: e.target.value }))}
              ></textarea>
            </label>

            <button type="button" className="btn-add" onClick={handleHobbies}>
              <AddSvg />
              Adauga hobbi
            </button>
          </fieldset>
        )}

        {/* PERSONALIZED */}
        {otherCategories.personalized && (
          <fieldset>
            <legend>Sectiune personalizata</legend>

            {personalized.length > 0 &&
              personalized.map((item) => (
                <ul key={item.sectionTitle + item.title} className="list-type-1">
                  <li>{item.sectionTitle}</li>
                  <li>{item.title}</li>
                  <li>{item.description.slice(0, 10)}...</li>
                  <li>
                    {item.start} - {item.untilNow ? "Prezent" : item.end}
                  </li>
                  <button type="button" className="btn-delete" onClick={() => handleDelete("personalized", item.sectionTitle + item.title)}>
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

            <label>
              Titlu
              <input
                type="text"
                placeholder="..."
                value={personalizedState.title}
                onChange={(e) => setPersonalizedState((prev) => ({ ...prev, title: e.target.value }))}
              />
            </label>

            <label>
              Link (URL)
              <input
                type="text"
                placeholder="..."
                value={personalizedState.link}
                onChange={(e) => setPersonalizedState((prev) => ({ ...prev, link: e.target.value }))}
              />
            </label>

            <label>
              Descriere
              <textarea
                cols={30}
                rows={5}
                value={personalizedState.description}
                onChange={(e) => setPersonalizedState((prev) => ({ ...prev, description: e.target.value }))}
              ></textarea>
            </label>

            <label>
              Perioada
              <div>
                <input
                  type="date"
                  value={personalizedState.start}
                  onChange={(e) => setPersonalizedState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                />
                <input
                  type="date"
                  value={personalizedState.end}
                  onChange={(e) => setPersonalizedState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                />
              </div>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                checked={personalizedState.untilNow}
                onChange={() => setPersonalizedState((prev) => ({ ...prev, untilNow: !personalizedState.untilNow }))}
              />
              <span className="checkmark"></span>
              Pana in prezent
            </label>

            <button type="button" className="btn-add" onClick={handlePersonalized}>
              <AddSvg />
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
  );
};

export default FillForm;
