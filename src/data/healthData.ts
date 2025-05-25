export interface HealthStatus {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'bad';
  date: string;
}

export const healthStatuses: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    status: 'good',
    date: 'Date: 26 Oct 2021'
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'bad',
    date: 'Date: 26 Oct 2021'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    date: 'Date: 26 Oct 2021'
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'bad',
    date: 'Date: 26 Oct 2021'
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    status: 'good',
    date: 'Date: 26 Oct 2021'
  }
];

export const bodyParts = [
  { 
    id: 'heart', 
    position: { top: '30%', left: '53%' },
    status: 'good',
    displayText: 'Healthy Heart'
  },
  { 
    id: 'lungs', 
    position: { top: '28%', left: '60%' },
    status: 'bad',
    displayText: 'Lungs'
  },
  { 
    id: 'teeth', 
    position: { top: '15%', left: '53%' },
    status: 'warning',
    displayText: 'Teeth'
  },
  { 
    id: 'bone', 
    position: { top: '55%', left: '53%' },
    status: 'bad',
    displayText: 'Bone'
  },
  { 
    id: 'leg', 
    position: { top: '75%', left: '45%' },
    status: 'good',
    displayText: 'Healthy Leg'
  }
];