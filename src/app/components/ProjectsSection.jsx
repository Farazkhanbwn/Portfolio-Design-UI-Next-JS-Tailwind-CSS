"use client";
import React, { useState } from "react";
import projectsData from "../CardData";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-white text-4xl mt-4 text-center font-semibold">
        My Projects
      </h2>
      <div className="text-white flex flex-row items-center justify-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imgUrl={project.image}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
