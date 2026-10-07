export type NavTab = 'inicio' | 'sobre' | 'personagens' | 'galeria' | 'bastidores';

export interface StoryTopic {
  id: 'felipe' | 'infeccao';
  title: string;
  tag: string;
  image: string;
  shortDesc: string;
  fullStory: string[];
  evidence: string[];
}

export interface Character {
  name: string;
  role?: string;
  status?: string;
  actorCredit?: string;
  description: string;
  image?: string;
  imagePosition?: string;
  imageZoom?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
}
