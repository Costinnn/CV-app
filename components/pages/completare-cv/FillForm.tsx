"use client";

import React, { useEffect, useState } from "react";

import AddSvg from "@/public/SVG/AddSvg";
import OtherCategories from "./OtherCategories";

import "./FillForm.css";
import { OtherCategoriesFormType } from "@/types/globalTypes";

const FillForm = () => {
  const [otherCategories, setOtherCategories] = useState<OtherCategoriesFormType>({
    projects: false,
    volunteering: false,
    links: false,
    hobbies: false,
    personalized: false,
  });

  const handleOtherCategories = (category: "projects" | "volunteering" | "links" | "hobbies" | "personalized") => {
    setOtherCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  useEffect(() => {
    console.log(otherCategories);
  }, [otherCategories]);

  return (
    <section className="fill-form section-wide">
      <form>
        {/* PERSONAL INFO */}
        <label>
          Nume complet
          <input type="text" placeholder="Popescu Ion" />
        </label>

        {/* INTRODUCTION */}
        <label>
          Introducere
          <textarea cols={30} rows={10}></textarea>
        </label>

        {/* CONTACT */}
        <fieldset>
          <legend>Contact</legend>

          <label>
            Telefon
            <input type="phone" placeholder="0753 000 000" />
          </label>

          <label>
            Email
            <input type="email" placeholder="contact@gmail.com" />
          </label>

          <label>
            Adresa
            <input type="text" placeholder="Bucuresti, Romania" />
          </label>
        </fieldset>

        {/* EDUCATION */}
        <fieldset>
          <legend>Educatie</legend>

          <label>
            Scoala
            <input type="text" placeholder="..." />
          </label>

          <label>
            Specializarea
            <input type="text" placeholder="..." />
          </label>

          <label>
            Perioada
            <div>
              <input type="date" />
              <input type="date" />
            </div>
          </label>

          <label className="checkbox">
            <input type="checkbox" name="" id="" />
            <span className="checkmark"></span>
            Pana in prezent
          </label>

          <button type="button" className="btn-add">
            <AddSvg />
            Adauga educatie
          </button>
        </fieldset>

        {/* EXPERIENCE */}
        <fieldset>
          <legend>Experienta</legend>

          <label>
            Functie
            <input type="text" placeholder="..." />
          </label>

          <label>
            Companie
            <input type="text" placeholder="..." />
          </label>

          <label>
            Perioada
            <div>
              <input type="date" />
              <input type="date" />
            </div>
          </label>

          <label className="checkbox">
            <input type="checkbox" name="" id="" />
            <span className="checkmark"></span>
            Pana in prezent
          </label>

          <button type="button" className="btn-add">
            <AddSvg />
            Adauga experienta
          </button>
        </fieldset>

        {/* COMPETENCES */}
        <label>
          Competente
          <input type="text" placeholder="..." />
          <button type="button" className="btn-primary2">
            Adauga
          </button>
        </label>

        {/* PROJECTS */}
        {otherCategories.projects && (
          <fieldset>
            <legend>Proiecte</legend>

            <label>
              Titlu
              <input type="text" placeholder="..." />
            </label>

            <label>
              Link (URL)
              <input type="text" placeholder="..." />
            </label>

            <button type="button" className="btn-add">
              <AddSvg />
              Adauga proiect
            </button>
          </fieldset>
        )}

        {/* VOLUNTEERING */}
        {otherCategories.volunteering && (
          <fieldset>
            <legend>Voluntariat</legend>

            <label>
              Rol
              <input type="text" placeholder="..." />
            </label>

            <label>
              Organizatie
              <input type="text" placeholder="..." />
            </label>

            <label>
              Descriere
              <textarea cols={30} rows={5}></textarea>
            </label>

            <label>
              Perioada
              <div>
                <input type="date" />
                <input type="date" />
              </div>
            </label>

            <label className="checkbox">
              <input type="checkbox" name="" id="" />
              <span className="checkmark"></span>
              Pana in prezent
            </label>

            <button type="button" className="btn-add">
              <AddSvg />
              Adauga voluntariat
            </button>
          </fieldset>
        )}

        {/* LINKS */}
        {otherCategories.links && (
          <fieldset>
            <legend>Link-uri</legend>

            <label>
              Titlu
              <input type="text" placeholder="..." />
            </label>

            <label>
              Link (URL)
              <input type="text" placeholder="..." />
            </label>

            <button type="button" className="btn-add">
              <AddSvg />
              Adauga link
            </button>
          </fieldset>
        )}

        {/* HOBBIES */}
        {otherCategories.hobbies && (
          <fieldset>
            <legend>Hobbi-uri</legend>

            <label>
              Titlu
              <input type="text" placeholder="..." />
            </label>

            <label>
              Descriere
              <textarea cols={30} rows={5}></textarea>
            </label>

            <button type="button" className="btn-add">
              <AddSvg />
              Adauga hobbi
            </button>
          </fieldset>
        )}

        {/* PERSONALIZED */}
        {otherCategories.personalized && (
          <fieldset>
            <legend>Sectiune personalizata</legend>

            <label>
              Titlu sectiune
              <input type="text" placeholder="..." />
            </label>

            <label>
              Titlu
              <input type="text" placeholder="..." />
            </label>

            <label>
              Link (URL)
              <input type="text" placeholder="..." />
            </label>

            <label>
              Descriere
              <textarea cols={30} rows={5}></textarea>
            </label>

            <label>
              Perioada
              <div>
                <input type="date" />
                <input type="date" />
              </div>
            </label>

            <label className="checkbox">
              <input type="checkbox" name="" id="" />
              <span className="checkmark"></span>
              Pana in prezent
            </label>

            <button type="button" className="btn-add">
              <AddSvg />
              Adauga sectiune
            </button>
          </fieldset>
        )}

        <OtherCategories otherCategories={otherCategories} handleOtherCategories={handleOtherCategories} />
      </form>
    </section>
  );
};

export default FillForm;
