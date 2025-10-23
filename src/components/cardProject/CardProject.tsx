import { Link } from "react-router-dom";
import type { Project } from "../../types/types";

function CardProject({ project }: { project: Project }) {
  return (
    <Link to={project.link}>
      <div className="flex flex-col gap-1">
        <img src={project.image} className="rounded-sm" alt="" />
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
