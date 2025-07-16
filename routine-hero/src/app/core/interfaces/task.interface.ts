export interface Task {
  taskId: string;
  picture: string;
  name: string;
  description: string;
  category: string;
  mandatory: boolean;
  assignedTo: string[];
  frequency: string;
  daysOfWeek: string[];
  timesOfDay: string[];
  points: number;
  order: number;
}
