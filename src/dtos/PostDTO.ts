import { UserDTO } from "./UserDTO";

export interface PostDTO extends UserDTO {
    
    userId: number;
    id: number
    title: string
    body: string;
      
}