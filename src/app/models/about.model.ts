export interface InfoCard {
  pk_info_card?: number;
  title: string;
  description: string;
  icon: string;
}

export interface AboutMe {
  pk_about_me?: number;
  description: string;
  number_projects: number;
  number_technologies: number;
  infoCards: InfoCard[];
}