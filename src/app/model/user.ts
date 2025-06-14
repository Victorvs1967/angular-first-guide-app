export interface User {
  fullName: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}

interface UserProfile {
  name: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
}

interface Skill {
  name: string;
  level: 'beginner' | 'intermidiate' | 'expert';
}

interface Experience {
  compani: string;
  role: string;
  years: number;
}
