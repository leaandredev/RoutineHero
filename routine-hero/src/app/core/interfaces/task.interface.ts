export interface Task {
  taskId: string;
  picture: string;
  name: string;
  description: string;
  category: string;
  mandatory: boolean;
  daysOfWeek: string[];
  timesOfDay: string[];
  assignedTo: string[];
}
