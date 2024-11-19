import { ReactNode } from "react";

export type IChildren = {
  children: ReactNode;
};


// API Interfaces

/* Super User Interface */
export interface UserRequestBody {
  first_name: string;
  last_name: string;
  role: string;
  user_id: string;
  email: string;
  phone: string;
  password: string;
}