import { Link } from "react-router-dom";
import type { ProjectOverview } from "../../types/types";

import "./CardProject.css";

function CardProject({ project }: { project: ProjectOverview }) {
  const getSrcSet = (imagePath: string) => {
    const base = imagePath.replace("-1280.webp", "");
    return `
      ${base}-480.webp 480w,
      ${base}-768.webp 768w,
      ${base}-1280.webp 1280w
    `;
  };

  return (
    <Link to={project.link} className="project-link">
      <div className="flex flex-col gap-1">
        <img
          loading="lazy"
          src={project.image}
          srcSet={getSrcSet(project.image)}
          sizes="
            (max-width: 480px) 100vw,
            (max-width: 768px) 100vw,
            768px
          "
          className="rounded-sm"
          alt=""
        />
        <div>
          <h3>{project.title}</h3>
          <div className="flex flex-col gap-2">
            <p>{project.description}</p>
            <div className="flex flex-row gap-2">
              {project.tags.map((tag, index) => (
                <>
                  <span className="bold" key={index}>
                    {tag}
                  </span>
                  {index != project.tags.length - 1 && (
                    <span className="bold">·</span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardProject;
