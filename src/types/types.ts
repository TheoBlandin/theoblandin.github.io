export interface ProjectOverview {
    title: string,
    image: string,
    description: string,
    tags: string[],
    link: string
}

export interface Project {
    presentation : Presentation,
    flow: Flow[]
}

export interface Presentation {
    intro: string[],
    context: string[],
    tools: string[],
    role: string[],
    links: { link: string; label: string }[]
}

export interface Flow {
    title: string,
    text: string[],
    images?: { src: string, alt: string }[]
}