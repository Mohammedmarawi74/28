
export interface Goal {
  id: string;
  text: string;
  icon: string;
}

export interface Entity {
  id: string;
  name: string;
}

export type LogoPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface InfographicData {
  headerImage: string;
  logoUrl?: string;
  logoPosition?: LogoPosition;
  mainTitle: string;
  subTitle: string;
  eventLocation: string;
  eventDate: string;
  goals: Goal[];
  entities: Entity[];
  footerWebsite: string;
  footerSocial: string;
  footerPhone: string;
  customCss?: string;
  colors: ThemeColors;
}

export type ActiveTab = 'content' | 'ai' | 'custom';
