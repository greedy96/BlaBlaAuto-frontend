import { User } from './user.model';

export interface Ride {
  id: number;
  ride_from: string;
  ride_to: string;
  seats: number;
  occupied_seats: number;
  date: Date;
  price: number;
  passengers?: User[];
  is_passenger: boolean;
}
