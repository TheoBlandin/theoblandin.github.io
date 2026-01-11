import { useEffect } from "react";

import HeaderProject from "../components/headerProject/HeaderProject";
import PresentationProject from "../components/presentationProject/PresentationProject";

import Data from "../assets/projects/securite_mobile/project.json";
import type { Presentation } from "../types/types";

import { Col, Container, Row } from "react-grid-system";
import PersonaComponent from "../components/persona/PersonaComponent";

import ReactPlayer from "react-player";

import { getAsset } from "../utils/getAsset";

function SecuriteMobile() {
  useEffect(() => {
    document.title = "Sécurité mobile - Théo Blandin";
  }, []);

  const presentationProject: Presentation = Data;

  return (
    <>
      <HeaderProject color="#FFA655" name="Sécurité mobile" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={presentationProject} />

        {/* Visuals */}
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col-reverse md:flex-row gap-2 lg:gap-3 px-3 w-full max-w-[1440px]">
            <div className="bg-surface flex items-center justify-center py-6 px-4 lg:px-10 md:w-[25%]">
              <img
                loading="lazy"
                className="w-full"
                src={getAsset(
                  "/src/assets/projects/securite_mobile/mockup_mobile-1280.webp"
                )}
                srcSet={`
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_mobile-480.webp"
                  )} 480w,
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_mobile-768.webp"
                  )} 768w,
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_mobile-1280.webp"
                  )} 1280w
                `}
                sizes="(max-width: 768px) 100vw, 768px"
                alt="Mockup de l'interface accessible via le téléphone portable de l'utilisateur"
              />
            </div>
            <div className="bg-surface flex-1 flex items-center justify-center py-6 px-4 lg:px-12">
              <img
                loading="lazy"
                className="w-full"
                src={getAsset(
                  "/src/assets/projects/securite_mobile/mockup_monitor-1280.webp"
                )}
                srcSet={`
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_monitor-480.webp"
                  )} 480w,
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_monitor-768.webp"
                  )} 768w,
                  ${getAsset(
                    "/src/assets/projects/securite_mobile/mockup_monitor-1280.webp"
                  )} 1280w
                `}
                sizes="(max-width: 768px) 100vw, 768px"
                alt="Mockup du tableau de bord la borne de sécurité"
              />
            </div>
          </div>
        </div>

        <Container className="w-full flex flex-col gap-12">
          {/* Problème */}
          <section
            aria-labelledby="securite_mobile-section_1"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_1">Problème</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La protection des données personnelles représente
                    aujourd'hui un enjeu majeur, mais reste encore mal comprise
                    par le grand public. Le projet auquel j'ai été intégré
                    visait à répondre à cette problématique de sensibilisation
                    en démontrant, de manière concrète, la quantité
                    d'informations qu'il est possible de récolter sur un
                    appareil simplement connecté à un réseau Wi-Fi public.
                  </p>
                  <p>
                    L'interface existante, conçue pour un usage de recherche,
                    n'était toutefois pas adaptée à un public non initié. Ma
                    mission a donc été de proposer une nouvelle interface
                    offrant une expérience à la fois rapide, autonome et
                    pédagogique.
                  </p>
                  <p>
                    La problématique était la suivante :{" "}
                    <span className="bold">
                      Comment pourrions-nous susciter l'intérêt des utilisateurs
                      pour la cybersécurité de manière pédagogique et non
                      alarmiste ?
                    </span>
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>

          {/* Solution */}
          <section
            aria-labelledby="securite_mobile-section_2"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_2">Solution</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La nouvelle interface du produit se compose en réalité de
                    deux parties complémentaires :
                  </p>
                  <ul className="list-disc list-outside ms-8 flex flex-col gap-1">
                    <li>
                      <span className="bold">La borne</span> : un écran
                      d'ordinateur non interactif qui invite les utilisateurs à
                      scanner un QR Code pour se connecter, puis se transforme
                      en tableau de bord actualisé en temps réel grâce aux
                      informations collectées sur l'appareil.
                    </li>
                    <li>
                      <span className="bold">L'interface mobile</span> : un site
                      web accessible uniquement depuis le réseau local,
                      permettant aux utilisateurs d'explorer plus en détail les
                      données récoltées sur leur appareil.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>

          {/* Étude de l'existant */}
          <section
            aria-labelledby="securite_mobile-section_3"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_3">Étude de l'existant</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La première étape du processus de refonte a été l'étude de
                    l'interface existante, afin d'en ressortir les éléments
                    positifs et les éléments améliorables pour la construction
                    de la nouvelle interface.
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
                    src={getAsset(
                      "/src/assets/projects/securite_mobile/old_ui-1280.webp"
                    )}
                    srcSet={`
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/old_ui-480.webp"
                      )} 480w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/old_ui-768.webp"
                      )} 768w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/old_ui-1280.webp"
                      )} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Ancienne interface du projet accompagnée de commentaires"
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Personas */}
          <section
            aria-labelledby="securite_mobile-section_4"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_4">Personas</h2>
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
                    img: "/src/assets/projects/securite_mobile/ines_paillez-1280.webp",
                    color: "yellow",
                    name: "Inès Paillez",
                    features: [
                      "Impressionnable",
                      "42 ans",
                      "Agent d'entretien",
                      "Sportive",
                      "Mère",
                      "Réseaux sociaux",
                    ],
                    bio: "Inès, 42 ans, travaille en tant qu'agent d'entretien chez Orange. En plus de son travail, elle mène une vie bien remplie avec sa famille et notamment ses deux enfants âgés de 13 et 10 ans. Elle fait également beaucoup de sport et partage son quotidien à un large public sur les réseaux sociaux tels qu'Instagram et TikTok. Hormis cela, elle n'a pas beaucoup d'accroches avec le numérique et n'y connaît pas grand-chose. Elle se considère dépassée par l'aspect technique.",
                    data: {
                      want: {
                        title: "Ce qu'elle veut faire",
                        content: "Protéger sa famille des dangers du numérique",
                      },
                      need: {
                        title: "Ce qu'elle souhaiterait",
                        content: "Avoir accès à des informations accessibles",
                      },
                      use: {
                        title: "Ce qu'elle va utiliser",
                        content: "Les conseils de sécurité",
                      },
                      block: {
                        title: "Ce qui la bloque",
                        content: "Son manque de notions informatique",
                      },
                    },
                  }}
                />
                <PersonaComponent
                  persona={{
                    img: "/src/assets/projects/securite_mobile/charlie_obel-1280.webp",
                    color: "orange",
                    name: "Charlie Obel",
                    features: [
                      "Affable",
                      "20 ans",
                      "Stagiaire en communication",
                      "Engagé",
                      "Curiosité",
                      "Peu connecté",
                    ],
                    bio: "Charlie, 20 ans, est stagiaire chez Orange dans le pôle communication. De nature curieuse, iel s'intéresse à différents sujets et aime partager ce qu'iel apprend avec ses amis. Ayant grandi avec Internet, iel est à l'aise avec le numérique. Iel ne l'utilise néanmoins que très peu en dehors de son travail, et possède un vieux téléphone qui lui sert quasi exclusivement à envoyer des SMS.",
                    data: {
                      want: {
                        title: "Ce qu'iel veut faire",
                        content: "Apprendre de nouvelles choses",
                      },
                      need: {
                        title: "Ce qu'iel souhaiterait",
                        content:
                          "Partager ses nouvelles connaissances avec ses amis",
                      },
                      use: {
                        title: "Ce qu'iel va utiliser",
                        content: "Le compte rendu téléchargeable",
                      },
                      block: {
                        title: "Ce qui lae bloque",
                        content: "Son utilisation restreinte du téléphone",
                      },
                    },
                  }}
                />
                <PersonaComponent
                  persona={{
                    img: "/src/assets/projects/securite_mobile/oscar_blot-1280.webp",
                    color: "green",
                    name: "Oscar Blot",
                    features: [
                      "Prétentieux",
                      "35 ans",
                      "Ingénieur réseau",
                      "Linux",
                      "Bricoleur",
                      "Extraverti",
                    ],
                    bio: "Oscar, 35 ans, est ingénieur réseau chez Orange. Passionné par le numérique depuis son enfance, il maîtrise parfaitement son domaine. Pendant son temps libre, il aime bricoler des dispositifs de domotique pour sa maison ou se plonger dans la lecture. Ses vastes connaissances peuvent parfois le rendre prétentieux, notamment face à des dispositifs de sensibilisation au numérique. Extraverti, il n'hésite pas à partager ses remarques, qu'elles soient positives ou critiques.",
                    data: {
                      want: {
                        title: "Ce qu'il veut faire",
                        content: "Prouver qu'il s'y connait en informatique",
                      },
                      need: {
                        title: "Ce qu'il souhaiterait",
                        content: "Comprendre d'où viennent les informations",
                      },
                      use: {
                        title: "Ce qu'il va utiliser",
                        content: "Les informations sur l'appareil audité",
                      },
                      block: {
                        title: "Ce qui le bloque",
                        content: "Son manque de remise en question",
                      },
                    },
                  }}
                />
              </Col>
            </Row>
          </section>

          {/* Idéation */}
          <section
            aria-labelledby="securite_mobile-section_5"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_5">Idéation</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Le programme déjà développé me donnait accès à un ensemble
                    d'informations collectées sur l'appareil connecté. Après les
                    avoir recensé, je me suis posé les questions suivantes pour
                    chacune d'entre elles :
                  </p>
                  <ul className="list-disc list-outside ms-8 flex flex-col gap-1">
                    <li>
                      Cette donnée est-elle réellement pertinente pour
                      l'utilisateur ?
                    </li>
                    <li>
                      Où doit-elle être affichée ? Sur l'écran de la borne ? Sur
                      le site mobile ? Sur les deux ?
                    </li>
                    <li>
                      Comment la représenter de manière claire et compréhensible
                      ? Existe-t-il un composant du Design System d'Orange
                      adapté, ou dois-je m'inspirer d'autres références ?
                    </li>
                    <li>
                      Ai-je besoin d'informations complémentaires pour rendre
                      cette donnée exploitable ou intéressante pour
                      l'utilisateur ? Et, si oui, peuvent-elles être obtenues ?
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>

          {/* Parcours utilisateur */}
          <section
            aria-labelledby="securite_mobile-section_6"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_6">Parcours utilisateur</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Parcours utilisateur simplifié, représentant les actions
                    possibles sur l'écran d'ordinateur (la borne) et le
                    téléphone de la personne.
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
                    src={getAsset(
                      "/src/assets/projects/securite_mobile/userflow-1280.webp"
                    )}
                    srcSet={`
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/userflow-480.webp"
                      )} 480w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/userflow-768.webp"
                      )} 768w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/userflow-1280.webp"
                      )} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Schéma illustrant le parcours utilisateur depuis l'écran de connexion."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Maquettage et tests utilisateurs */}
          <section
            aria-labelledby="securite_mobile-section_7"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_7">Maquettage et tests utilisateurs</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Le travail de maquettage s'est déroulé en parallèle des
                    tests utilisateurs, permettant un processus itératif.
                    L'interface a ainsi évolué à travers plusieurs versions
                    avant d'être développée.
                  </p>
                  <p>
                    Les sessions de tests utilisateurs ont été organisées avec
                    plusieurs employés d'Orange qui ont accepté de se prêter à
                    l'exercice. Au total, cinq testeurs ont pu donner leurs
                    retours au cours de sessions individuelles menées sur
                    plusieurs semaines, revenant d'une semaine à l'autre pour
                    observer et évaluer les évolutions des maquettes.
                  </p>
                  <p>
                    Chaque session débutait par une contextualisation du profil
                    de l'utilisateur. S'ensuivait un temps d'échange durant
                    lequel le testeur découvrait l'interface, posait ses
                    questions et partageait ses remarques. Enfin,
                    l'utilisabilité globale était mesurée à l'aide d'un
                    questionnaire SUS, permettant de suivre l'évolution de
                    l'expérience utilisateur au fil des itérations des
                    maquettes.
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
                    src={getAsset(
                      "/src/assets/projects/securite_mobile/figma_evolution-1280.webp"
                    )}
                    srcSet={`
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/figma_evolution-480.webp"
                      )} 480w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/figma_evolution-768.webp"
                      )} 768w,
                      ${getAsset(
                        "/src/assets/projects/securite_mobile/figma_evolution-1280.webp"
                      )} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Trois versions successives de la maquette avec annotations, illustrant le processus itératif et les ajustements réalisés suite aux retours de l'équipe et des testeurs."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Développement */}
          <section
            aria-labelledby="securite_mobile-section_9"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="securite_mobile-section_9">Développement</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La nouvelle interface a été développée avec le framework
                    Angular, en s'appuyant sur le code pré-existant. La carte de
                    visualisation du trafic a été créé avec l'aide
                    d'OpenStreetMap.
                  </p>
                  <p>
                    Pour la partie visuelle, Boosted, une variante de Bootstrap
                    adaptée au design system d'Orange, a été utilisé.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <div
                    className="w-full"
                    style={{ position: "relative", paddingTop: "56.25%" }}
                  >
                    <ReactPlayer
                      src="https://youtu.be/1kTZcAuLMqk"
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: 0, left: 0 }}
                      controls
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default SecuriteMobile;
