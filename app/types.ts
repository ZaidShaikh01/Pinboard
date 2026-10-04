export type Card = {
  id: string;
  title: string;
  columnId:string;
  description?: string;
  createdAt: number;
};

export type Column = {
  id: string;
  title: string;
};
