import React, { useState } from "react";
import Header from "../../components/Header";
import Description from "../../components/Description";
import Element from "../../Layout/Element";

export default function index() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Element>
        <Header value={title} optionalText="Unititled Form" />
        <Description value={description} optionalText="Description" />
      </Element>
    </>
  );
}
