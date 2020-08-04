import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4"
          alt="Renan Santos"
        />
        <div>
          <strong>Renan Santos</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem in fuga
        repellat eaque quo porro, ducimus non maxime autem beatae tempora
        quisquam illum dolore, itaque ullam! Illo adipisci tempore velit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ratione nulla iusto tenetur fuga minima rerum repellat id natus
        quibusdam, soluta doloremque quidem doloribus deserunt illo corporis
        eos! Placeat, possimus.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
