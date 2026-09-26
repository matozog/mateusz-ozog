export interface IEducationData {
  date: string;
  university: string;
  fieldOfStudy: string;
  studentTitle: string;
  thesisTopic: string;
}

export interface ITechnology {
  label: string;
  icon: string;
}

export interface IWorkExperience {
  company: string;
  position: string;
  responsibilities: string;
  date: string;
  technologies?: ITechnology[];
}

export interface IProject {
  title: string;
  linkToGithub: string;
  linkToWebpage: string;
}
