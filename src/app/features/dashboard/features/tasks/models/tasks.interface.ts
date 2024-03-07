export type TaskFormModeType = 'Add' | 'Update';

export interface ITasks {
  category: ICategory;
  tasks: ITask[];
}
export interface ICategory {
  name: string;
  border: string;
  background: string;
  color: string;
  icon: string;
}
export interface ITask {
  id: number;
  categoryId: number;
  title: string;
  image: string;
}
