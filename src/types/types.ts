export interface Project {
    title: string,
    image: string,
    description: string,
    tags: string[],
    link: string
}

export interface Presentation {
    intro: string[],
    context: string[],
    tools: string[],
    role: string[],
    links: { link: string; label: string }[]
}