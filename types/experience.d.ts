export interface Experience {
  id: number;
  category: string;
  institute: string;
  role: string;
  logo: string;
  start: string;
  end: string;
  projects: ProjectInfo[];
}

export interface ProjectInfo {
  title: string;
  period: string;
  desc: string;
}

