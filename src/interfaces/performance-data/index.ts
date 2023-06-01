import { PlayerInterface } from 'interfaces/player';

export interface PerformanceDataInterface {
  id?: string;
  player_id: string;
  data: string;
  timestamp: Date;

  player?: PlayerInterface;
  _count?: {};
}
