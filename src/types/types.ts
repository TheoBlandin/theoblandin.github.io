export interface ProjectOverview {
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Presentation {
  intro: string[];
  context: string[];
  tools: string[];
  role: string[];
  links: { link: string; label: string }[];
}

export interface Persona {
  img: string;
  color: string;
  name: string;
  features: string[];
  bio: string;
  data: {
    want: {
        title: string;
        content: string;
    }
    need: {
        title: string;
        content: string;
    }
    use: {
        title: string;
        content: string;
    }
    block: {
        title: string;
        content: string;
    }
  };
}
