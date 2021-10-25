import { User } from 'src/app/models/user';
import { Subject } from "./subject";

export interface Story {
    id: number,
    title: string,
    story: string,
    subject: Subject,
    user: User
}