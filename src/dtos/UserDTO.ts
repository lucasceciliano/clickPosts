export interface UserDTO {
    id: number;
    name: string;
    email: string
    address: {
      city: string
      zipcode: number
    }
}