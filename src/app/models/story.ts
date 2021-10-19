import { Subject } from "./subject";

export interface Story {
    id: number,
    title: string,
    story: string,
    subject: Subject
}