import React, { useState, useEffect } from "react";

import FormInput from "../FormInput";

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        value={github_username}
        label="Usuário do Github"
        name="github_username"
        handleChange={setGithubUsername}
      />
      <FormInput
        value={techs}
        label="Tecnologias"
        name="techs"
        handleChange={setTechs}
      />

      <div className="input-group">
        <FormInput
          value={latitude}
          label="Latitude"
          name="latitude"
          type="number"
          handleChange={setLatitude}
        />

        <FormInput
          value={longitude}
          label="Longitude"
          name="longitude"
          type="number"
          handleChange={setLongitude}
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}
