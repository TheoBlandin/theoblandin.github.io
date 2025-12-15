import { Link } from "react-router-dom";
import type { ProjectOverview } from "../../types/types";

import { getAsset } from "../../utils/getAsset";

import "./CardProject.css";

function CardProject({ project }: { project: ProjectOverview }) {
  return (
    <Link to={project.link} className="project-link">
      <div className="flex flex-col gap-1">
        <img
          loading="lazy"
          src={getAsset(project.image)}
          srcSet={`
            ${getAsset(project.image.replace("1280", "480"))} 480w,
            ${getAsset(project.image.replace("1280", "768"))} 768w,
            ${getAsset(project.image)} 1280w
          `}
          sizes="(max-width: 768px) 100vw, 768px"
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
