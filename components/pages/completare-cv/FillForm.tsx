import React from "react";

import "./FillForm.css";
import AddSvg from "@/public/SVG/AddSvg";
import OtherCategories from "./OtherCategories";

const FillForm = () => {
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

        <OtherCategories />
      </form>
    </section>
  );
};

export default FillForm;
