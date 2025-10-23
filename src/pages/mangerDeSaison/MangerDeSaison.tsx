import { useEffect } from "react";

import HeaderProject from "../../components/headerProject/HeaderProject";
import PresentationProject from "../../components/presentationProject/PresentationProject";

import Data from './../../assets/projects/manger_de_saison/presentation.json';
import type { Presentation } from "../../types/types";

function MangerDeSaison() {
  useEffect(() => {
    document.title = "Manger de saison - Théo Blandin";
  }, []);

  const project: Presentation = Data;

  return (
    <>
      <HeaderProject color="#E4F2E4" name="Manger de saison" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={project} />
      </div>
    </>
  );
}

export default MangerDeSaison;
