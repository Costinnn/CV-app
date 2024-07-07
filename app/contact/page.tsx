"use client";

import React from "react";
import { useState } from "react";

import SuccessSvg from "@/public/SVG/SuccessSvg";
import ErrorSvg from "@/public/SVG/ErrorSvg";

import axios from "axios";

import "./style.css";
import Link from "next/link";

type ErrorStateType = { name: boolean; email: boolean; message: boolean };

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnState, setBtnState] = useState("");
  const [errorState, setErrorState] = useState<ErrorStateType>({ name: false, email: false, message: false });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setBtnState("loading");
    if (name && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && message) {
      try {
        const res = await axios.post("/api/contactForm", {
          name,
          email,
          message,
        });

        if (res.data.message == "OK") {
          setBtnState("success");
          setEmail("");
          setMessage("");
          setName("");
        }
        if (res.data.error) setBtnState("error");

        setTimeout(() => {
          setBtnState("");
        }, 5000);
      } catch (err) {
        setBtnState("error");
        setTimeout(() => {
          setBtnState("");
        }, 5000);
      }
    } else {
      !name && setErrorState((prev) => ({ ...prev, name: true }));
      !email && setErrorState((prev) => ({ ...prev, email: true }));
      !message && setErrorState((prev) => ({ ...prev, message: true }));
      setBtnState("error");

      setTimeout(() => {
        setErrorState({ name: false, email: false, message: false });
        setBtnState("");
      }, 5000);
    }
  };

  return (
    <main className="contact-page">
      <h1>Contact</h1>

      <div>
        {/* ONLY ON desktop */}
        <ul>
          <h2>Cum creezi un CV?</h2>
          <li>
            <Link href="/modele-cv">
              <span>1</span> Alege un model
            </Link>
          </li>

          <li>
            <Link href="/">
              <span>2</span> Creeaza un cont (opțional)
            </Link>
          </li>

          <li>
            <Link href="/completare-cv">
              <span>3</span> Completează datele tale
            </Link>
          </li>

          <li>
            <Link href="/completare-cv">
              <span>4</span> Descarcă CV-ul și aplică
            </Link>
          </li>
        </ul>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nume
            <input
              type="text"
              name="name"
              id="name"
              className={errorState.name ? "error-input-border" : ""}
              required
              placeholder="Nume"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              id="email"
              className={errorState.email ? "error-input-border" : ""}
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="message">
            Mesaj
            <textarea
              cols={30}
              rows={5}
              wrap="hard"
              name="message"
              id="message"
              className={errorState.message ? "error-input-border" : ""}
              required
              placeholder="Adaugă un mesaj..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>

          {btnState === "loading" ? (
            <span className="loader"></span>
          ) : (
            <button
              className={`btn-primary2`}
              disabled={btnState === "loading" || btnState === "error" || btnState === "success"}
              onClick={(e) => handleSubmit(e)}
            >
              {!btnState ? "Trimite mesaj" : btnState === "success" ? <SuccessSvg /> : <ErrorSvg />}
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default page;
