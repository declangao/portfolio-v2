export type WorkExperience = {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string;
  duties: string[];
  tags: string[];
};

export type Project = {
  name: string;
  slug: string;
  thumbnail: string;
  images: string[];
  githubUrl?: string | string[];
  previewUrl?: string | string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  techStack?: string[];
};

export type Message = {
  name: string;
  email: string;
  subject: string;
  message: string;
  id?: string;
};
