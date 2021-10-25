import { Story } from 'src/app/models/story';
import { Role } from './Role';
export interface User {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
    stories: Story[];
}