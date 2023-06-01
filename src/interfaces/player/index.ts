import { PerformanceDataInterface } from 'interfaces/performance-data';
import { PlayerTrainingPlanInterface } from 'interfaces/player-training-plan';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  performance_data?: PerformanceDataInterface[];
  player_training_plan?: PlayerTrainingPlanInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    performance_data?: number;
    player_training_plan?: number;
  };
}
