export type TSection = {
  title: string;
  href: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
};

export type TProgram = {
  day: number;
  date: string;
  title: string;
  activities: Array<TActivity>;
};

export type TActivity = {
  time: string;
  activity: string;
  type: string;
  icon: React.ElementType;
  description?: string;
  link?: string;
};
