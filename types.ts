
export type Tab = 'Journey' | 'Costs' | 'Modalities' | 'Evidence' | 'Export';
export type Modality = 'Rybelsus' | 'Ozempic' | 'Wegovy';

export interface Source {
  id: string;
  name: string;
  location: string;
  excerpt: string;
  citation: string;
}

export interface PathData {
  description: string;
  qolImpact: string;
  qolScore: number;
}

export interface TimelineData {
  yearRange: string;
  pathA: PathData;
  pathB: PathData;
  qolNarrative: string;
  costBand: string;
  sources: string[];
}

export interface ModalityDetail {
  id: Modality;
  title: string;
  subtitle: string;
  withoutCKLM: { row: string; content: string; sources: string[] }[];
  withCKLM: { row: string; content: string; sources: string[] }[];
  keyMessage: string;
}
