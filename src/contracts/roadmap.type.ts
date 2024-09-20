export enum StatusValue {
  COMPLETE = 'complete',
  DEVELOP = 'develop',
  WAIT = 'wait'
}

export type RoadmapItem = {
  title: string;
  date: string;
  status: StatusValue;
  description: string;
};
