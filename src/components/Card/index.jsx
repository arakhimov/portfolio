import React from "react";
import { projectsDescription } from "../../constants/projectsDescription";
import { Button } from "../Button/index";
import "./styles.css";

const projectsBackground = {
  chat_messenger: require("../../images/chat_messenger.png"),
  pognali: require("../../images/pognali.png"),
  device: require("../../images/device.png"),
  create_sounds: require("../../images/create_sounds.png"),
  travel_to_russia: require("../../images/travel_to_russia.png"),
  form_validation: require("../../images/form_validation.png"),
  learn_to_learn: require("../../images/learn_to_learn.png")
};

export const Card = ({ name }) => {
  return (
    <div className="Card">
      <a
        target="_blanc"
        href={projectsDescription[name].url}
        className="Card__link"
      >
        <div className="Card__hover-block">
          <div className="Card__left-column">
            <h1 className="Card__title">{projectsDescription[name].header}</h1>
            <Button name="Visit" />
          </div>
          <p className="Card__right-column">
            {projectsDescription[name].description}
          </p>
        </div>
        <img
          src={projectsBackground[name]}
          alt={projectsDescription[name].header}
          className="Card__image"
        />
      </a>
    </div>
  );
};
