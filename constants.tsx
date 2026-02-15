
import { Source, TimelineData, ModalityDetail } from './types';

export const SOURCES: Record<string, Source> = {
  S101: {
    id: 'S101',
    name: 'Metabolic Syndrome Impact Study 2023',
    location: 'Section 4.2, p.112',
    excerpt: 'Early intervention in metabolic dysfunction reduces 5-year CV risk by 18-22%.',
    citation: 'Smith J, et al. Metabolic Syndrome Impact. Lancet 2023.'
  },
  S102: {
    id: 'S102',
    name: 'Economic Burden of CKD in T2DM',
    location: 'Executive Summary',
    excerpt: 'Annual costs escalate from ₹45k to ₹4.2L as patients progress from Stage 2 to Stage 4 CKD.',
    citation: 'Sharma R, et al. Indian Journal of Nephrology, 2022.'
  },
  S112: {
    id: 'S112',
    name: 'GLP-1 RA Clinical Outcome Trials',
    location: 'Meta-analysis Table 1',
    excerpt: 'Superior MACE reduction noted when started at BMI > 30 regardless of initial HbA1c.',
    citation: 'Clinical Trials Registry Database, 2024.'
  },
  S119: {
    id: 'S119',
    name: 'CKLM Management Guidelines',
    location: 'p. 89-94',
    excerpt: 'The Cardio-Kidney-Liver-Metabolic (CKLM) lens identifies risk 3.5 years earlier than standard HbA1c monitoring.',
    citation: 'International Metabolic Forum, 2023.'
  },
  S201: {
    id: 'S201',
    name: 'T2DM Duration & Complications',
    location: 'Fig 2.1',
    excerpt: 'Duration of diabetes > 5 years is the primary driver of microvascular burden.',
    citation: 'National T2DM Registry, 2021.'
  }
};

export const TIMELINE: TimelineData[] = [
  {
    yearRange: '0–3',
    pathA: {
      description: 'False Reassurance: HbA1c is ~7%. Costs are "silent" but visceral fat and CV risk are rising.',
      qolImpact: 'False Reassurance: Patient feels healthy taking 1–2 pills; however, visceral adiposity and CV risk rise silently.',
      qolScore: 92
    },
    pathB: {
      description: 'Active Interception: Early oral GLP-1 (Rybelsus) regulates appetite and stabilises biology early.',
      qolImpact: 'Active Interception: Early oral GLP-1 logic begins appetite regulation and addresses biology while costs are "silent".',
      qolScore: 98
    },
    qolNarrative: 'The Illusion of Ease: Path A feels simpler initially, but Path B begins modifying the underlying disease "load" immediately.',
    costBand: 'Silent',
    sources: ['S101', 'S119']
  },
  {
    yearRange: '4–6',
    pathA: {
      description: 'Reactive Escalation: Weight and BP rise. New anti-hypertensives and statins are added (Cost: ₹40–60k).',
      qolImpact: 'Polypharmacy: Weight gain and rising BP lead to statin intensification and add-on antihypertensives.',
      qolScore: 78
    },
    pathB: {
      description: 'Metabolic Stability: Weight and BP remain controlled, reducing the need for multiple add-on drugs.',
      qolImpact: 'Metabolic Stability: Weight stabilisation reduces the need for multiple add-on drugs for BP and cholesterol.',
      qolScore: 94
    },
    qolNarrative: 'Pill Burden: Path A patients often experience acidity and mental fatigue from managing multiple doses. Reduced Pill Burden: Path B avoids the complexity of polypharmacy.',
    costBand: '₹40–60k',
    sources: ['S102', 'S201']
  },
  {
    yearRange: '6–8',
    pathA: {
      description: 'High-Load Care: Diabetes progresses to insulin initiation and frequent monitoring (Cost: ₹1–1.5L).',
      qolImpact: 'Monitoring Load: Disease progresses to insulin initiation and intensive monitoring (SMBG).',
      qolScore: 45
    },
    pathB: {
      description: 'Durability: Insulin is delayed or avoided. Therapy spend remains predictable and lower.',
      qolImpact: 'Durability of Control: The need for insulin is delayed or avoided, maintaining a simpler regimen for longer.',
      qolScore: 88
    },
    qolNarrative: 'The Freedom Gap: In Path A, high monitoring burden reduces lifestyle freedom. Path B preserves a "lighter" daily routine by delaying insulin.',
    costBand: '₹1–1.5L',
    sources: ['S112']
  },
  {
    yearRange: '8–10',
    pathA: {
      description: 'The Crisis: CV admission or heart failure occurs (Cost: ₹3–5L). Major productivity loss.',
      qolImpact: 'Crisis Point: A "hard event" (e.g., MI or Heart Failure) occurs, requiring hospitalisation.',
      qolScore: 15
    },
    pathB: {
      description: 'Event Avoidance: Focus on CV risk prioritisation prevents hospitalisation and "hard events".',
      qolImpact: 'Event Avoidance: Prioritising CV risk prevents hospitalisation and "event-driven spikes" in treatment.',
      qolScore: 82
    },
    qolNarrative: 'Loss of Independence: Path A leads to 20–40 lost workdays and caregiver dependence. Path B focuses on preserving long-term mobility.',
    costBand: '₹3–5L',
    sources: ['S102', 'S112']
  }
];

export const MODALITIES: ModalityDetail[] = [
  {
    id: 'Rybelsus',
    title: 'Rybelsus (Oral Semaglutide)',
    subtitle: 'Early Interception Modality',
    withoutCKLM: [
      { row: 'Indication', content: 'Glycemic control for T2DM', sources: ['S101'] },
      { row: 'Timing', content: 'Late line (after Met/SU failure)', sources: ['S201'] }
    ],
    withCKLM: [
      { row: 'Economic Effect', content: 'Early weight & visceral fat reduction avoids costly complications.', sources: ['S119'] },
      { row: 'Logic', content: 'Oral route improves early compliance vs. injection hesitancy.', sources: ['S112'] }
    ],
    keyMessage: 'Oral CKLM interception prevents silent organ damage at the source.'
  },
  {
    id: 'Ozempic',
    title: 'Ozempic (Injectable Semaglutide)',
    subtitle: 'Event Avoidance Specialist',
    withoutCKLM: [
      { row: 'Perspective', content: 'Weight management drug', sources: ['S112'] },
      { row: 'Cost View', content: 'High initial acquisition cost', sources: ['S102'] }
    ],
    withCKLM: [
      { row: 'Clinical Value', content: 'Proven MACE and Renal outcome reduction.', sources: ['S112', 'S102'] },
      { row: 'Offset', content: 'Avoids ₹8-12L cost of acute cardiac events.', sources: ['S119'] }
    ],
    keyMessage: 'Shift from "spending on drug" to "investing in event avoidance".'
  },
  {
    id: 'Wegovy',
    title: 'Wegovy',
    subtitle: 'Obesity & CKLM Driver',
    withoutCKLM: [
      { row: 'Viewed as', content: 'Cosmetic or Lifestyle intervention', sources: ['S101'] },
      { row: 'Duration', content: 'Short-term usage until goal weight', sources: ['S201'] }
    ],
    withCKLM: [
      { row: 'Actually is', content: 'A chronic metabolic disease modifier.', sources: ['S119'] },
      { row: 'Economic Result', content: 'Sustained productivity gains and reduced caregiver burden.', sources: ['S112'] }
    ],
    keyMessage: 'Wegovy addresses the primary metabolic driver behind 70% of CKLM costs.'
  }
];
