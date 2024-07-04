"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import AddSvg from "@/public/SVG/AddSvg";
import TrashSvg from "@/public/SVG/TrashSvg";
import OtherCategories from "./OtherCategories";
import PreviewCv from "./PreviewCv";

import {
  ContactType,
  EducationStateType,
  ErrorStateType,
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
  const isMounted = useRef(false);

  // LOGIC STATE
  const [otherCategories, setOtherCategories] = useState<OtherCategoriesFormType>({
    projects: false,
    volunteering: false,
    links: false,
    hobbies: false,
    personalized: false,
  });
  const [errorState, setErrorState] = useState<ErrorStateType>({
    education: { school: false, specialization: false, start: false, end: false },
    experience: { position: false, company: false, start: false, end: false },
    competences: false,
    projects: { title: false, link: false },
    volunteering: { role: false, organisation: false },
    links: { title: false, link: false },
    hobbies: false,
    personalized: false,
    personalizedContent: false,
  });

  //#region  FINAL DATA VALUES
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoType>({ name: "", description: "" });
  const [contact, setContact] = useState<ContactType>({ phone: "", email: "", address: "" });
  const [education, setEducation] = useState<EducationStateType[]>([]);
  const [experience, setExperience] = useState<ExperienceStateType[]>([]);
  const [competences, setCompetences] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectsStateType[]>([]);
  const [volunteering, setVolunteering] = useState<VolunteeringStateType[]>([]);
  const [links, setLinks] = useState<LinksStateType[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [personalized, setPersonalized] = useState<PersonalizedStateType[]>([]);
  // #endregion

  //#region TEMPORARY DATA STATE
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
    // Error state check
    !educationState.school
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, school: true } }))
      : errorState.education.school
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, school: false } }))
      : "";

    !educationState.specialization
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, specialization: true } }))
      : errorState.education.specialization
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, specialization: false } }))
      : "";

    !educationState.start
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, start: true } }))
      : errorState.education.start
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, start: false } }))
      : "";

    !educationState.end || !educationState.untilNow
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, end: true } }))
      : errorState.education.end
      ? setErrorState((prev) => ({ ...prev, education: { ...prev.education, end: false } }))
      : "";

    // update education data
    if (educationState.school && educationState.specialization && educationState.start && (educationState.end || educationState.untilNow)) {
      setEducation((prev) => [...prev, educationState]);
      setEducationState({ school: "", specialization: "", start: "", end: "", untilNow: false });
      setErrorState((prev) => ({ ...prev, education: { school: false, specialization: false, start: false, end: false } }));
    } else {
      setTimeout(() => {
        setErrorState((prev) => ({ ...prev, education: { school: false, specialization: false, start: false, end: false } }));
      }, 7000);
    }
  };

  const handleExperience = () => {
    // Error state check
    !experienceState.position
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, position: true } }))
      : errorState.experience.position
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, position: false } }))
      : "";

    !experienceState.company
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, company: true } }))
      : errorState.experience.company
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, company: false } }))
      : "";

    !experienceState.start
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, start: true } }))
      : errorState.experience.start
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, start: false } }))
      : "";

    !experienceState.end || !experienceState.untilNow
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, end: true } }))
      : errorState.experience.end
      ? setErrorState((prev) => ({ ...prev, experience: { ...prev.experience, end: false } }))
      : "";

    // update experience data
    if (experienceState.position && experienceState.company && experienceState.start && (experienceState.end || experienceState.untilNow)) {
      setExperience((prev) => [
        ...prev,
        experienceDescState ? { ...experienceState, description: [...experienceState.description, experienceDescState] } : experienceState,
      ]);
      setExperienceState({ position: "", company: "", description: [], start: "", end: "", untilNow: false });
      setErrorState((prev) => ({ ...prev, experience: { position: false, company: false, start: false, end: false } }));
      setExperienceDescState("");
    } else {
      setTimeout(() => {
        setErrorState((prev) => ({ ...prev, experience: { position: false, company: false, start: false, end: false } }));
      }, 7000);
    }
  };

  const handleExperienceDesc = () => {
    if (experienceDescState) {
      setExperienceState((prev) => ({ ...prev, description: [...experienceState.description, experienceDescState] }));
      setExperienceDescState("");
    }
  };

  const handleCompetences = () => {
    // Error state check
    !competencesState
      ? setErrorState((prev) => ({ ...prev, competences: true }))
      : errorState.competences
      ? setErrorState((prev) => ({ ...prev, competences: false }))
      : "";

    // update competences
    if (competencesState) {
      setCompetences((prev) => [...prev, competencesState]);
      setCompetencesState("");
      setErrorState((prev) => ({ ...prev, competences: false }));
    } else {
      setTimeout(() => setErrorState((prev) => ({ ...prev, competences: false })), 7000);
    }
  };

  const handleProjects = () => {
    // Error state check
    !projectsState.title
      ? setErrorState((prev) => ({ ...prev, projects: { ...prev.projects, title: true } }))
      : errorState.projects.title
      ? setErrorState((prev) => ({ ...prev, projects: { ...prev.projects, title: false } }))
      : "";

    !projectsState.link
      ? setErrorState((prev) => ({ ...prev, projects: { ...prev.projects, link: true } }))
      : errorState.projects.link
      ? setErrorState((prev) => ({ ...prev, projects: { ...prev.projects, link: false } }))
      : "";

    // update state
    if (projectsState.title && projectsState.link) {
      setProjects((prev) => [...prev, projectsState]);
      setProjectsState({ title: "", link: "" });
      setErrorState((prev) => ({ ...prev, projects: { title: false, link: false } }));
    } else {
      setTimeout(() => {
        setErrorState((prev) => ({ ...prev, projects: { title: false, link: false } }));
      }, 7000);
    }
  };

  const handleVolunteering = () => {
    // Error state check
    !volunteeringState.role
      ? setErrorState((prev) => ({ ...prev, volunteering: { ...prev.volunteering, role: true } }))
      : errorState.volunteering.role
      ? setErrorState((prev) => ({ ...prev, volunteering: { ...prev.volunteering, role: false } }))
      : "";

    !volunteeringState.organisation
      ? setErrorState((prev) => ({ ...prev, volunteering: { ...prev.volunteering, organisation: true } }))
      : errorState.volunteering.organisation
      ? setErrorState((prev) => ({ ...prev, volunteering: { ...prev.volunteering, organisation: false } }))
      : "";

    // update state
    if (volunteeringState.role && volunteeringState.organisation) {
      setVolunteering((prev) => [...prev, volunteeringState]);
      setVolunteeringState({
        role: "",
        organisation: "",
        start: "",
        end: "",
        untilNow: false,
      });
      setErrorState((prev) => ({ ...prev, volunteering: { role: false, organisation: false } }));
    } else {
      setTimeout(() => {
        setErrorState((prev) => ({ ...prev, volunteering: { role: false, organisation: false } }));
      }, 7000);
    }
  };

  const handleLinks = () => {
    // Error state check
    !linksState.title
      ? setErrorState((prev) => ({ ...prev, links: { ...prev.links, title: true } }))
      : errorState.links.title
      ? setErrorState((prev) => ({ ...prev, links: { ...prev.links, title: false } }))
      : "";

    !linksState.link
      ? setErrorState((prev) => ({ ...prev, links: { ...prev.links, link: true } }))
      : errorState.links.link
      ? setErrorState((prev) => ({ ...prev, links: { ...prev.links, link: false } }))
      : "";

    // update state
    if (linksState.title && linksState.link) {
      setLinks((prev) => [...prev, linksState]);
      setLinksState({ title: "", link: "" });
      setErrorState((prev) => ({ ...prev, links: { title: false, link: false } }));
    } else {
      setTimeout(() => {
        setErrorState((prev) => ({ ...prev, links: { title: false, link: false } }));
      }, 7000);
    }
  };

  const handleHobbies = () => {
    // Error state check
    !hobbiesState
      ? setErrorState((prev) => ({ ...prev, hobbies: true }))
      : errorState.hobbies
      ? setErrorState((prev) => ({ ...prev, hobbies: false }))
      : "";

    // update competences

    if (hobbiesState) {
      setHobbies((prev) => [...prev, hobbiesState]);
      setHobbiesState("");
      setErrorState((prev) => ({ ...prev, hobbies: false }));
    } else {
      setTimeout(() => setErrorState((prev) => ({ ...prev, hobbies: false })), 7000);
    }
  };

  const handlePersonalized = () => {
    // Error state check
    !personalizedState.sectionTitle
      ? setErrorState((prev) => ({ ...prev, personalized: true }))
      : errorState.personalized
      ? setErrorState((prev) => ({ ...prev, personalized: false }))
      : "";

    // update state
    if (personalizedState.sectionTitle) {
      // check for data left in inputs
      if (personalizedContentState.title) {
        setPersonalized((prev) => [
          ...prev,
          {
            ...personalizedState,
            content: [
              ...personalizedState.content,
              personalizedDescState
                ? { ...personalizedContentState, description: [...personalizedContentState.description, personalizedDescState] }
                : personalizedContentState,
            ],
          },
        ]);
      } else {
        setPersonalized((prev) => [...prev, personalizedState]);
      }

      // clear inputs
      setPersonalizedState({
        sectionTitle: "",
        content: [],
      });
      setPersonalizedContentState({ title: "", link: "", description: [], start: "", end: "", untilNow: false });
      setPersonalizedDescState("");
      setErrorState((prev) => ({ ...prev, personalized: false }));
    } else {
      setTimeout(() => setErrorState((prev) => ({ ...prev, personalized: false })), 7000);
    }
  };

  const handlePersonalizedState = () => {
    // Error state check
    !personalizedContentState.title
      ? setErrorState((prev) => ({ ...prev, personalizedContent: true }))
      : errorState.personalizedContent
      ? setErrorState((prev) => ({ ...prev, personalizedContent: false }))
      : "";

    // update state
    if (personalizedContentState.title) {
      setPersonalizedState((prev) => ({
        ...prev,
        content: [
          ...prev.content,
          personalizedDescState
            ? { ...personalizedContentState, description: [...personalizedContentState.description, personalizedDescState] }
            : personalizedContentState,
        ],
      }));

      // clear inputs
      setPersonalizedContentState({ title: "", link: "", description: [], start: "", end: "", untilNow: false });
      setErrorState((prev) => ({ ...prev, personalizedContent: false }));
      setPersonalizedDescState("");
    } else {
      setTimeout(() => setErrorState((prev) => ({ ...prev, personalizedContent: false })), 7000);
    }
  };

  const handlePersonalizedDesc = () => {
    if (personalizedDescState) {
      setPersonalizedContentState((prev) => ({ ...prev, description: [...personalizedContentState.description, personalizedDescState] }));
      setPersonalizedDescState("");
    }
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

  // #region session STORAGE
  // generalInfo
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("generalInfo", JSON.stringify(generalInfo));
    }
  }, [generalInfo]);

  // contact
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("contact", JSON.stringify(contact));
    }
  }, [contact]);

  // education
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("education", JSON.stringify(education));
    }
  }, [education]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("educationState", JSON.stringify(educationState));
    }
  }, [educationState]);

  // experience
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("experience", JSON.stringify(experience));
    }
  }, [experience]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("experienceState", JSON.stringify(experienceState));
    }
  }, [experienceState]);

  // competences
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("competences", JSON.stringify(competences));
    }
  }, [competences]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("competencesState", JSON.stringify(competencesState));
    }
  }, [competencesState]);

  // projects
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("projectsState", JSON.stringify(projectsState));
    }
  }, [projectsState]);

  // volunteering
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("volunteering", JSON.stringify(volunteering));
    }
  }, [volunteering]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("volunteeringState", JSON.stringify(volunteeringState));
    }
  }, [volunteeringState]);

  // links
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("links", JSON.stringify(links));
    }
  }, [links]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("linksState", JSON.stringify(linksState));
    }
  }, [linksState]);

  // hobbies
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("hobbies", JSON.stringify(hobbies));
    }
  }, [hobbies]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("hobbiesState", JSON.stringify(hobbiesState));
    }
  }, [hobbiesState]);

  // personalized
  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("personalized", JSON.stringify(personalized));
    }
  }, [personalized]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("personalizedState", JSON.stringify(personalizedState));
    }
  }, [personalizedState]);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem("personalizedContent", JSON.stringify(personalizedContentState));
    }
  }, [personalizedContentState]);

  // #endregion

  // UPDATE state on mount
  useEffect(() => {
    isMounted.current = true;
    const generalInfoSS = sessionStorage.getItem("generalInfo");
    const contactSS = sessionStorage.getItem("contact");
    const educationSS = sessionStorage.getItem("education");
    const educationStateSS = sessionStorage.getItem("educationState");
    const experienceSS = sessionStorage.getItem("experience");
    const experienceStateSS = sessionStorage.getItem("experienceState");
    const competencesSS = sessionStorage.getItem("competences");
    const competencesStateSS = sessionStorage.getItem("competencesState");
    const projectsSS = sessionStorage.getItem("projects");
    const projectsStateSS = sessionStorage.getItem("projectsState");
    const volunteeringSS = sessionStorage.getItem("volunteering");
    const volunteeringStateSS = sessionStorage.getItem("volunteeringState");
    const linksSS = sessionStorage.getItem("links");
    const linksStateSS = sessionStorage.getItem("linksState");
    const hobbiesSS = sessionStorage.getItem("hobbies");
    const hobbiesStateSS = sessionStorage.getItem("hobbiesState");
    const personalizedSS = sessionStorage.getItem("personalized");
    const personalizedStateSS = sessionStorage.getItem("personalizedState");
    const personalizedContentSS = sessionStorage.getItem("personalizedContent");

    if (generalInfoSS) {
      const generalInfoSSData = JSON.parse(generalInfoSS);
      setGeneralInfo(generalInfoSSData);
    }

    if (contactSS) {
      const contactSSData = JSON.parse(contactSS);
      setContact(contactSSData);
    }

    if (educationSS) {
      const educationSSData = JSON.parse(educationSS);
      setEducation(educationSSData);
    }

    if (educationStateSS) {
      const educationStateSSData = JSON.parse(educationStateSS);
      setEducationState(educationStateSSData);
    }

    if (experienceSS) {
      const experienceSSData = JSON.parse(experienceSS);
      setExperience(experienceSSData);
    }

    if (experienceStateSS) {
      const experienceStateSSData = JSON.parse(experienceStateSS);
      setExperienceState(experienceStateSSData);
    }

    if (competencesSS) {
      const competencesSSData = JSON.parse(competencesSS);
      setCompetences(competencesSSData);
    }

    if (competencesStateSS) {
      const competencesStateSSData = JSON.parse(competencesStateSS);
      setCompetencesState(competencesStateSSData);
    }

    if (projectsSS) {
      const projectsSSData = JSON.parse(projectsSS);
      setProjects(projectsSSData);
    }

    if (projectsStateSS) {
      const projectsStateSSData = JSON.parse(projectsStateSS);
      setProjectsState(projectsStateSSData);
    }

    if (volunteeringSS) {
      const volunteeringSSData = JSON.parse(volunteeringSS);
      setVolunteering(volunteeringSSData);
    }

    if (volunteeringStateSS) {
      const volunteeringStateSSData = JSON.parse(volunteeringStateSS);
      setVolunteeringState(volunteeringStateSSData);
    }

    if (linksSS) {
      const linksSSData = JSON.parse(linksSS);
      setLinks(linksSSData);
    }

    if (linksStateSS) {
      const linksStateSSData = JSON.parse(linksStateSS);
      setLinksState(linksStateSSData);
    }

    if (hobbiesSS) {
      const hobbiesSSData = JSON.parse(hobbiesSS);
      setHobbies(hobbiesSSData);
    }

    if (hobbiesStateSS) {
      const hobbiesStateSSData = JSON.parse(hobbiesStateSS);
      setHobbiesState(hobbiesStateSSData);
    }

    if (personalizedSS) {
      const personalizedSSData = JSON.parse(personalizedSS);
      setPersonalized(personalizedSSData);
    }

    if (personalizedStateSS) {
      const personalizedStateSSData = JSON.parse(personalizedStateSS);
      setPersonalizedState(personalizedStateSSData);
    }

    if (personalizedContentSS) {
      const personalizedContentSSData = JSON.parse(personalizedContentSS);
      setPersonalizedContentState(personalizedContentSSData);
    }
  }, []);

  return (
    <div className="fillform_preview">
      <section className="fill-form section-wide">
        <form>
          {/* PERSONAL INFO */}
          <label>
            Nume complet {!generalInfo.name && "*"}
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
            <span className="label-title">Introducere {!generalInfo.description && "*"}</span>

            <textarea
              cols={30}
              rows={10}
              placeholder="Adauga ceva despre tine..."
              value={generalInfo.description}
              onChange={(e) => setGeneralInfo((prev) => ({ ...prev, description: e.target.value }))}
              required
            ></textarea>
          </label>

          {/* CONTACT */}
          <fieldset>
            <legend>Contact</legend>

            <label>
              Telefon {!contact.phone && "*"}
              <input
                type="phone"
                placeholder="0753 000 000"
                value={contact.phone}
                onChange={(e) => setContact((prev) => ({ ...prev, phone: e.target.value }))}
                required
              />
            </label>

            <label>
              Email {!contact.email && "*"}
              <input
                type="email"
                placeholder="contact@gmail.com"
                value={contact.email}
                onChange={(e) => setContact((prev) => ({ ...prev, email: e.target.value }))}
                required
              />
            </label>

            <label>
              Adresa {!contact.address && "*"}
              <input
                type="text"
                placeholder="Bucuresti, Romania"
                value={contact.address}
                onChange={(e) => setContact((prev) => ({ ...prev, address: e.target.value }))}
                required
              />
            </label>
          </fieldset>

          {/* EDUCATION */}
          <fieldset>
            <legend>Educație {education.length <= 0 && "*"}</legend>

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
              Școala {education.length <= 0 && "*"}
              <input
                className={errorState.education.school ? "error-input-border" : ""}
                type="text"
                placeholder="&#9998;"
                value={educationState.school}
                onChange={(e) => setEducationState((prev) => ({ ...prev, school: e.target.value }))}
              />
            </label>

            <label>
              Specializarea {education.length <= 0 && "*"}
              <input
                type="text"
                className={errorState.education.specialization ? "error-input-border" : ""}
                placeholder="&#9998;"
                value={educationState.specialization}
                onChange={(e) => setEducationState((prev) => ({ ...prev, specialization: e.target.value }))}
              />
            </label>

            <label>
              Perioada {education.length <= 0 && "*"}
              <div>
                <input
                  type="month"
                  className={errorState.education.start ? "error-input-border" : ""}
                  value={educationState.start}
                  onChange={(e) => setEducationState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                />
                <input
                  type="month"
                  className={errorState.education.end ? "error-input-border" : ""}
                  value={educationState.end}
                  onChange={(e) => setEducationState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
                />
              </div>
            </label>

            <label className="checkbox">
              <input
                type="checkbox"
                checked={educationState.untilNow}
                onChange={() => setEducationState((prev) => ({ ...prev, untilNow: !educationState.untilNow }))}
              />
              <span className="checkmark"></span>
              Până în prezent
            </label>

            <button type="button" className="btn-add" onClick={handleEducation}>
              Adaugă educație <AddSvg />
            </button>
          </fieldset>

          {/* EXPERIENCE */}
          <fieldset>
            <legend>Experiență {experience.length <= 0 && "*"}</legend>

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
              Funcție {experience.length <= 0 && "*"}
              <input
                type="text"
                className={errorState.experience.position ? "error-input-border" : ""}
                placeholder="&#9998;"
                value={experienceState.position}
                onChange={(e) => setExperienceState((prev) => ({ ...prev, position: e.target.value }))}
              />
            </label>

            <label>
              Companie {experience.length <= 0 && "*"}
              <input
                type="text"
                className={errorState.experience.company ? "error-input-border" : ""}
                placeholder="&#9998;"
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
                <input type="text" placeholder="&#9998;" value={experienceDescState} onChange={(e) => setExperienceDescState(e.target.value)} />

                <button type="button" className="btn-add2" onClick={handleExperienceDesc}>
                  <AddSvg color="#f5f5f5" />
                </button>
              </div>
            </label>

            <label>
              Perioada {experience.length <= 0 && "*"}
              <div>
                <input
                  type="month"
                  className={errorState.experience.start ? "error-input-border" : ""}
                  value={experienceState.start}
                  onChange={(e) => setExperienceState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                />
                <input
                  type="month"
                  className={errorState.experience.end ? "error-input-border" : ""}
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
              Până în prezent
            </label>

            <button type="button" className="btn-add" onClick={handleExperience}>
              Adauga experienta <AddSvg />
            </button>
          </fieldset>

          {/* COMPETENCES */}
          <label className="simple-strings">
            <span className="label-title">Competențe {competences.length <= 0 && "*"}</span>

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
            <input
              type="text"
              className={errorState.competences ? "error-input-border" : ""}
              placeholder="&#9998;"
              value={competencesState}
              onChange={(e) => setCompetencesState(e.target.value)}
            />
            <button type="button" className="btn-add" onClick={handleCompetences}>
              Adaugă competență <AddSvg />
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
                  className={errorState.projects.title ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={projectsState.title}
                  onChange={(e) => setProjectsState((prev) => ({ ...prev, title: e.target.value }))}
                />
              </label>

              <label>
                Link (URL)
                <input
                  type="text"
                  className={errorState.projects.link ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={projectsState.link}
                  onChange={(e) => setProjectsState((prev) => ({ ...prev, link: e.target.value }))}
                />
              </label>

              <button type="button" className="btn-add" onClick={handleProjects}>
                Adaugă proiect <AddSvg />
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
                  className={errorState.volunteering.role ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={volunteeringState.role}
                  onChange={(e) => setVolunteeringState((prev) => ({ ...prev, role: e.target.value }))}
                />
              </label>

              <label>
                Organizație
                <input
                  type="text"
                  className={errorState.volunteering.organisation ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={volunteeringState.organisation}
                  onChange={(e) => setVolunteeringState((prev) => ({ ...prev, organisation: e.target.value }))}
                />
              </label>

              <label>
                Perioada
                <div>
                  <input
                    type="month"
                    value={volunteeringState.start}
                    onChange={(e) => setVolunteeringState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                  />
                  <input
                    type="month"
                    value={volunteeringState.end}
                    onChange={(e) => setVolunteeringState((prev) => ({ ...prev, end: e.target.value.toLocaleString() }))}
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
                Până în prezent
              </label>

              <button type="button" className="btn-add" onClick={handleVolunteering}>
                Adaugă voluntariat <AddSvg />
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
                  className={errorState.links.title ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={linksState.title}
                  onChange={(e) => setLinksState((prev) => ({ ...prev, title: e.target.value }))}
                />
              </label>

              <label>
                Link (URL)
                <input
                  type="text"
                  className={errorState.links.link ? "error-input-border" : ""}
                  placeholder="&#9998;"
                  value={linksState.link}
                  onChange={(e) => setLinksState((prev) => ({ ...prev, link: e.target.value }))}
                />
              </label>

              <button type="button" className="btn-add" onClick={handleLinks}>
                Adaugă link <AddSvg />
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
              <input
                type="text"
                className={errorState.hobbies ? "error-input-border" : ""}
                placeholder="&#9998;"
                value={hobbiesState}
                onChange={(e) => setHobbiesState(e.target.value)}
              />
              <button type="button" className="btn-add" onClick={handleHobbies}>
                Adaugă hobbi <AddSvg />
              </button>
            </label>
          )}

          {/* PERSONALIZED */}
          {otherCategories.personalized && (
            <fieldset id="s-personalized">
              <legend>Secțiune personalizată</legend>

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
                            {cItem.start.replace("-", ".")} {(cItem.start || cItem.end || cItem.untilNow) && "-"}{" "}
                            {cItem.untilNow ? "Prezent" : cItem.end.replace("-", ".")}
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
                  className={errorState.personalized ? "error-input-border" : ""}
                  placeholder="&#9998;"
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
                        {item.start.replace("-", ".")} {(item.start || item.end || item.untilNow) && "-"}{" "}
                        {item.untilNow ? "Prezent" : item.end.replace("-", ".")}
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
                    className={errorState.personalizedContent ? "error-input-border" : ""}
                    placeholder="&#9998;"
                    value={personalizedContentState.title}
                    onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, title: e.target.value }))}
                  />
                </label>

                <label>
                  Link (URL)
                  <input
                    type="text"
                    placeholder="&#9998;"
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
                    <input
                      type="text"
                      placeholder="&#9998;"
                      value={personalizedDescState}
                      onChange={(e) => setPersonalizedDescState(e.target.value)}
                    />

                    <button type="button" className="btn-add2" onClick={handlePersonalizedDesc}>
                      <AddSvg color="#f5f5f5" />
                    </button>
                  </div>
                </label>

                <label>
                  Perioada
                  <div>
                    <input
                      type="month"
                      value={personalizedContentState.start}
                      onChange={(e) => setPersonalizedContentState((prev) => ({ ...prev, start: e.target.value.toLocaleString() }))}
                    />
                    <input
                      type="month"
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
                  Până în prezent
                </label>

                <button type="button" className="btn-add" onClick={handlePersonalizedState}>
                  Adauga conținut <AddSvg />
                </button>
              </div>

              <button type="button" className="btn-primary2" onClick={handlePersonalized}>
                Adauga secțiune
              </button>
            </fieldset>
          )}

          <OtherCategories otherCategories={otherCategories} handleOtherCategories={handleOtherCategories} />
        </form>
      </section>

      <PreviewCv inputData={{ generalInfo, contact, education, experience, competences, projects, volunteering, links, hobbies, personalized }} />
    </div>
  );
};

export default FillForm_Preview;
