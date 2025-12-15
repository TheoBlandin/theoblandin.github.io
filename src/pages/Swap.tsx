import { useEffect } from "react";

import HeaderProject from "../components/headerProject/HeaderProject";
import PresentationProject from "../components/presentationProject/PresentationProject";

import Data from "../assets/projects/swap/project.json";
import type { Presentation } from "../types/types";

import { Col, Container, Row } from "react-grid-system";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  LabelList,
  Tooltip,
} from "recharts";

import PersonaComponent from "../components/persona/PersonaComponent";

function Swap() {
  useEffect(() => {
    document.title = "SWAP - Théo Blandin";
  }, []);

  const presentationProject: Presentation = Data;

  // Planification data
  const domains = [
    {
      title: "Le métier",
      details: "Ressenti face au métier, expériences",
    },
    {
      title: "Les élèves",
      details: "Élèves en difficulté, isolés ou atypiques",
    },
    {
      title: "Vie pro/perso",
      details: "Horaires, charge de travail en dehors des cours",
    },
    {
      title: "Programme",
      details: "Préparation des cours, programme scolaire",
    },
    {
      title: "Illectronisme",
      details: "Enseignement et utilisation du numérique",
    },
    {
      title: "Les parents",
      details: "Contact avec les parents, réunions parent-prof",
    },
    {
      title: "RPS",
      details: "Risques psychosociaux, accompagnement",
    },
    {
      title: "L'attention",
      details: "Attention des élèves, participation en classe",
    },
  ];

  const COLORS = ["#F08845", "#E9C46A", "#1DB79D"];

  return (
    <>
      <HeaderProject color="#FFC857" name="SWAP" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={presentationProject} />

        {/* Visuals */}
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 px-3 w-full max-w-[1440px]">
            <div className="bg-surface flex-1 flex items-center justify-center py-6 px-4 lg:px-12">
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/mockup-1280.webp"
                srcSet="
                  src/assets/projects/swap/mockup-480.webp 480w,
                  src/assets/projects/swap/mockup-768.webp 768w,
                  src/assets/projects/swap/mockup-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[33%]">
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/color_primary-1280.webp"
                srcSet="
                  src/assets/projects/swap/color_primary-480.webp 480w,
                  src/assets/projects/swap/color_primary-768.webp 768w,
                  src/assets/projects/swap/color_primary-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/color_secondary-1280.webp"
                srcSet="
                  src/assets/projects/swap/color_secondary-480.webp 480w,
                  src/assets/projects/swap/color_secondary-768.webp 768w,
                  src/assets/projects/swap/color_secondary-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/color_accent-1280.webp"
                srcSet="
                  src/assets/projects/swap/color_accent-480.webp 480w,
                  src/assets/projects/swap/color_accent-768.webp 768w,
                  src/assets/projects/swap/color_accent-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/color_text-1280.webp"
                srcSet="
                  src/assets/projects/swap/color_text-480.webp 480w,
                  src/assets/projects/swap/color_text-768.webp 768w,
                  src/assets/projects/swap/color_text-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/swap/color_background-1280.webp"
                srcSet="
                  src/assets/projects/swap/color_background-480.webp 480w,
                  src/assets/projects/swap/color_background-768.webp 768w,
                  src/assets/projects/swap/color_background-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
            </div>
          </div>
        </div>

        <Container className="w-full flex flex-col gap-12">
          {/* Planification */}
          <section aria-labelledby="swap-section_1" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_1">Planification</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Afin de se préparer aux entretiens utilisateurs, nous avons
                    commencé par identifier les différents domaines pouvant être
                    sources de problématiques dans la vie professionnelle des
                    enseignants.
                  </p>
                  <p>Huit domaines ont été identifiés.</p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10}>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-2 gap-4 ld:gap-6">
                  {domains.map((d, index) => {
                    return (
                      <div
                        key={index}
                        className="stroke-dark !border-2 p-3 flex flex-col gap-2"
                      >
                        <div className="bg-yellow flex flex-row justify-center px-4 py-2 bold">
                          {d.title}
                        </div>
                        <p className="text-center">{d.details}</p>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </section>

          {/* Entretiens utilisateurs */}
          <section aria-labelledby="swap-section_2" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_2">Entretiens utilisateurs</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Six enseignants ont accepté de participer à notre projet.
                    Chaque entretien, mené en présentiel, s'est appuyé sur les
                    domaines de friction identifiés au préalable.
                  </p>
                  <p>
                    Nous avons également recueilli le profil de chaque
                    enseignant afin de pouvoir contextualiser et mettre en
                    perspective leurs réponses.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10}>
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-5">
                  {/* Chart 1 */}
                  <div className="flex flex-col items-center flex-1">
                    <ResponsiveContainer width="100%" aspect={1}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Lycée professionnel", value: 3 },
                            { name: "BTS", value: 1 },
                            { name: "Lycée général", value: 2 },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius="70%"
                          stroke="#FCFCFC"
                          strokeWidth={3}
                        >
                          <LabelList
                            dataKey="name"
                            position="outside"
                            fill="#201708"
                            offset={16}
                            style={{
                              fontSize: 16,
                              fontFamily: "Urbanist",
                              fontWeight: 400,
                            }}
                          />

                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#FCFCFC",
                              border: "1px solid #EBEBEB",
                              fontFamily: "Urbanist",
                              fontSize: "16px",
                              color: "#201708",
                              padding: "4px 8px",
                            }}
                            formatter={(value, name) => [value, name]}
                          />

                          {COLORS.map((color, index) => (
                            <Cell key={index} fill={color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <span className="small">Type d'enseignement</span>
                  </div>
                  {/* Chart 2 */}
                  <div className="flex flex-col items-center flex-1">
                    <ResponsiveContainer width="100%" aspect={1}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Contractuel", value: 1 },
                            { name: "Titulaire", value: 5 },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius="70%"
                          stroke="#FCFCFC"
                          startAngle={90}
                          endAngle={-270}
                          strokeWidth={3}
                        >
                          <LabelList
                            dataKey="name"
                            position="outside"
                            fill="#201708"
                            offset={16}
                            style={{
                              fontSize: 16,
                              fontFamily: "Urbanist",
                              fontWeight: 400,
                            }}
                          />

                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#FCFCFC",
                              border: "1px solid #EBEBEB",
                              fontFamily: "Urbanist",
                              fontSize: "16px",
                              color: "#201708",
                              padding: "4px 8px",
                            }}
                            formatter={(value, name) => [value, name]}
                          />

                          {COLORS.map((color, index) => (
                            <Cell key={index} fill={color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <span className="small">Contractuel et titulaire</span>
                  </div>
                  {/* Chart 3 */}
                  <div className="flex flex-col items-center flex-1">
                    <ResponsiveContainer width="100%" aspect={1}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Privé", value: 1 },
                            { name: "Public", value: 5 },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius="70%"
                          stroke="#FCFCFC"
                          startAngle={90}
                          endAngle={-270}
                          strokeWidth={3}
                        >
                          <LabelList
                            dataKey="name"
                            position="outside"
                            fill="#201708"
                            offset={16}
                            style={{
                              fontSize: 16,
                              fontFamily: "Urbanist",
                              fontWeight: 400,
                            }}
                          />

                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#FCFCFC",
                              border: "1px solid #EBEBEB",
                              fontFamily: "Urbanist",
                              fontSize: "16px",
                              color: "#201708",
                              padding: "4px 8px",
                            }}
                            formatter={(value, name) => [value, name]}
                          />

                          {COLORS.map((color, index) => (
                            <Cell key={index} fill={color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <span className="small">Type d'établissement</span>
                  </div>
                  {/* Chart 4 */}
                  <div className="flex flex-col items-center flex-1">
                    <ResponsiveContainer width="100%" aspect={1}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "0-1 an", value: 1 },
                            { name: "5-10 ans", value: 1 },
                            { name: "10+ ans", value: 4 },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius="70%"
                          stroke="#FCFCFC"
                          strokeWidth={3}
                        >
                          <LabelList
                            dataKey="name"
                            position="outside"
                            fill="#201708"
                            offset={16}
                            style={{
                              fontSize: 16,
                              fontFamily: "Urbanist",
                              fontWeight: 400,
                            }}
                          />

                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#FCFCFC",
                              border: "1px solid #EBEBEB",
                              fontFamily: "Urbanist",
                              fontSize: "16px",
                              color: "#201708",
                              padding: "4px 8px",
                            }}
                            formatter={(value, name) => [value, name]}
                          />

                          {COLORS.map((color, index) => (
                            <Cell key={index} fill={color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <span className="small">Ancienneté</span>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          {/* Analyse des entretiens */}
          <section aria-labelledby="swap-section_3" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_3">Analyse des entretiens</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    À partir de chaque entretien, nous avons extrait les
                    principaux thèmes, ensuite synthétisés dans un nuage de mots
                    permettant d'identifier les éléments les plus fréquemment
                    évoqués.
                  </p>
                  <p>
                    Après analyse des données récoltées, la problématique que
                    nous avons retenue est la suivante :{" "}
                    <span className="bold">
                      Comment pourrions-nous favoriser la collaboration et le
                      partage de ressources pédagogiques entre les enseignants ?
                    </span>
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/swap/word_cloud-1280.webp"
                    srcSet="
                    src/assets/projects/swap/word_cloud-480.webp 480w,
                    src/assets/projects/swap/word_cloud-768.webp 768w,
                    src/assets/projects/swap/word_cloud-1280.webp 1280w
                    "
                    sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 100vw,
                    768px
                    "
                    alt="Nuages de mots avec la notion d'entraide comme notion la plus importante"
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Idéation */}
          <section aria-labelledby="swap-section_4" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_4">Idéation</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Le principe de <i>SWAP</i> a été imaginé au cours d'un
                    brainstorming en binôme.
                  </p>
                  <p>
                    La contrainte principale était le contexte d'une solution
                    numérique, afin de pouvoir créer une maquette dans le cadre
                    de notre projet.
                  </p>
                  <p>
                    Nous n'avions pas d'autres contraintes, <i>SWAP</i> n'étant
                    pas destiné à être développé ou économiquement viable.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/swap/brainstorming-1280.webp"
                    srcSet="
                      src/assets/projects/swap/brainstorming-480.webp 480w,
                      src/assets/projects/swap/brainstorming-768.webp 768w,
                      src/assets/projects/swap/brainstorming-1280.webp 1280w
                      "
                    sizes="
                      (max-width: 480px) 100vw,
                      (max-width: 768px) 100vw,
                      768px
                      "
                    alt="Schéma des notions principales de SWAP. Les notions principales sont la ressource, le profil, la recherche et le formulaire d'ajout."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Personas */}
          <section aria-labelledby="swap-section_5" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_5">Personas</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Trois personas furent créés, se basant sur les profils
                    rencontrés lors des entretiens utilisateurs. Chacun se
                    focalise sur une des fonctionnalités clés de <i>SWAP</i>.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <PersonaComponent
                  persona={{
                    img: "src/assets/projects/swap/sophie_garnier-1280.webp",
                    color: "yellow",
                    name: "Sophie Garnier",
                    features: [
                      "Ouverte",
                      "29 ans",
                      "Veille pédagogique",
                      "Connectée à l'actualité",
                      "Dynamique",
                      "Voyage",
                    ],
                    bio: "Sophie, 29 ans, est professeure d'espagnol dans un lycée général depuis 6 ans. Dynamique et ouverte d'esprit, elle prend plaisir à enseigner sa matière en connectant ses cours à l'actualité. Passionnée par les voyages et grande amoureuse des animaux, elle nourrit constamment sa curiosité à travers la veille pédagogique pour enrichir ses pratiques en classe. Elle préfère néanmoins ne pas passer trop de temps sur l'ordinateur.",
                    data: {
                      want: {
                        title: "Ce qu'elle veut faire",
                        content:
                          "Dynamiser ses cours avec de nouvelles approches",
                      },
                      need: {
                        title: "Ce qu'elle souhaiterait",
                        content:
                          "Trouver les nouveautés qui l'intéressent rapidement",
                      },
                      use: {
                        title: "Ce qu'elle va utiliser",
                        content: "Les listes de ressources enregistrées",
                      },
                      block: {
                        title: "Ce qui la bloque",
                        content: "Le temps passé sur l'ordinateur",
                      },
                    },
                  }}
                />
                <PersonaComponent
                  persona={{
                    img: "src/assets/projects/swap/karine_bernier-1280.webp",
                    color: "orange",
                    name: "Karine Bernier",
                    features: [
                      "Partage",
                      "56 ans",
                      "Ouverture au changement",
                      "Amélioration continue",
                      "Organisation",
                      "Suite office",
                    ],
                    bio: "Karine, 56 ans, est professeure de sciences de la vie et de la terre en lycée général depuis 18 ans. Très organisée et méthodique, elle utilise fréquemment la suite Office pour structurer ses cours et partager des ressources pédagogiques avec ses collègues. Passionnée par les cailloux, elle est également dans une dynamique d'amélioration continue, toujours prête à adopter de nouvelles approches pour enrichir son enseignement.",
                    data: {
                      want: {
                        title: "Ce qu'elle veut faire",
                        content:
                          "Dynamiser ses cours avec de nouvelles approches",
                      },
                      need: {
                        title: "Ce qu'elle souhaiterait",
                        content:
                          "Vérifier que sa ressource n'a pas déjà été publiée",
                      },
                      use: {
                        title: "Ce qu'elle va utiliser",
                        content: "Le formulaire de publication de ressources",
                      },
                      block: {
                        title: "Ce qui la bloque",
                        content: "La compétition entre les utilisateurs",
                      },
                    },
                  }}
                />
                <PersonaComponent
                  persona={{
                    img: "src/assets/projects/swap/damien_leroux-1280.webp",
                    color: "green",
                    name: "Damien Leroux",
                    features: [
                      "Innovation",
                      "37 ans",
                      "Optimisation du temps",
                      "Apprentissage concret",
                      "Réorientation",
                      "Canva",
                    ],
                    bio: "Damien, 37 ans, est un nouveau professeur en lycée professionnel après une carrière dans la vente. Il privilégie un apprentissage concret et pratique pour transmettre ses connaissances en marketing dans un lycée professionnel. Passionné par les nouvelles technologies, il utilise des outils comme Canva et cherche constamment à optimiser son temps. Grand amateur de sports d'équipe, il allie efficacité et modernité dans son enseignement dans un soucis d'efficacité.",
                    data: {
                      want: {
                        title: "Ce qu'il veut faire",
                        content: "Construire sa pédagogie de manière efficace",
                      },
                      need: {
                        title: "Ce qu'il souhaiterait",
                        content: "Avoir des suggestions pertinentes",
                      },
                      use: {
                        title: "Ce qu'il va utiliser",
                        content: "La barre de recherche et les filtres",
                      },
                      block: {
                        title: "Ce qui le bloque",
                        content: "La répétivité des informations",
                      },
                    },
                  }}
                />
              </Col>
            </Row>
          </section>

          {/* Parcours utilisateur */}
          <section aria-labelledby="swap-section_6" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_6">Parcours utilisateur</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Parcours utilisateur simplifié, illustrant les principales
                    fonctionnalités et étapes de navigation sur <i>SWAP</i>.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/swap/userflow-1280.webp"
                    srcSet="
                      src/assets/projects/swap/userflow-480.webp 480w,
                      src/assets/projects/swap/userflow-768.webp 768w,
                      src/assets/projects/swap/userflow-1280.webp 1280w
                      "
                    sizes="
                      (max-width: 480px) 100vw,
                      (max-width: 768px) 100vw,
                      768px
                      "
                    alt="Schéma illustrant le parcours utilisateur simplifié depuis la page d'accueil."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Wireframes */}
          <section aria-labelledby="swap-section_7" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_7">Wireframes</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Les premiers wireframes ont été dessinés individuellement
                    sur papier afin de comparer notre vision du produit.
                  </p>
                  <p>
                    La version mise en commun a ensuite été mise au propre sur
                    Figma et enrichie de nouvelles pages et de commentaires sur
                    le fonctionnement de <i>SWAP</i>.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/swap/wireframe-1280.webp"
                    srcSet="
                      src/assets/projects/swap/wireframe-480.webp 480w,
                      src/assets/projects/swap/wireframe-768.webp 768w,
                      src/assets/projects/swap/wireframe-1280.webp 1280w
                      "
                    sizes="
                      (max-width: 480px) 100vw,
                      (max-width: 768px) 100vw,
                      768px
                      "
                    alt="Maquette Figma basse fidélité, accompagnée de commentaires sur le fonctionnement de l'application."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Design System */}
          <section aria-labelledby="swap-section_8" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_8">Design System</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Un design system a été conçu sur le projet afin de garantir
                    la cohérence visuel d'un projet de groupe.
                  </p>
                  <p>Celui-ci se base sur le design system de Google.</p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/swap/design_system-1280.webp"
                    srcSet="
                      src/assets/projects/swap/design_system-480.webp 480w,
                      src/assets/projects/swap/design_system-768.webp 768w,
                      src/assets/projects/swap/design_system-1280.webp 1280w
                      "
                    sizes="
                      (max-width: 480px) 100vw,
                      (max-width: 768px) 100vw,
                      768px
                    "
                    alt="Extrait de composants du design system créé pour le projet"
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Maquette interactive */}
          <section aria-labelledby="swap-section_9" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="swap-section_9">Maquette interactive</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La finalité du projet était la création d'une maquette
                    interactive haute fidélité, s'approchant au plus près
                    possible du fonctionnement souhaité pour SWAP.
                  </p>
                  <p>Celle-ci a été réalisée sur Figma.</p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <iframe
                    width="100%"
                    className="h-[227px] sm:h-[235px] md:h-[307px] lg:h-[511px] xl:h-[584px] xxl:h-[686px]"
                    src="https://embed.figma.com/proto/VvqOd05wya8qIULu7e4gBY/SWAP?page-id=32%3A2&node-id=417-7793&p=f&viewport=30%2C-242%2C0.54&scaling=scale-down-width&starting-point-node-id=417%3A7793&embed-host=portfolio&page-selector=false"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default Swap;
