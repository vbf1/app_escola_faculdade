import { IClass } from "./class.interface";

export interface IStudents {
  id: string;
  name: string;
  email: string;
  password: string;
  type_user_id: number;
  class_id: number;
  class: IClass;
}
