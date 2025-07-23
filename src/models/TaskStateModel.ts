import type { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: string | null;
  currentCycle: number;
  config: {
    worktime: number;
    shortBreak: number;
    longBreak: number;
  };
};
