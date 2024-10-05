export interface Job {
  id: string;
  title: string;
  role: string;
  timeline: string;
  link: string;
  description: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  liveDemoUrl?: string;
  techStack: string[];
  image: string;
  hoverText?: string;
}
