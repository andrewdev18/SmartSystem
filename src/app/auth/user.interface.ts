import { Class } from "../classes/classes.interface";

export interface User {
    id?: number;
    username: string;
    password?: string;
    role: string;
    name: string;
    teacher?: Teacher;
    student?: Student;
}

export interface Teacher {
    id?: number;
    userId: number;
    user?: User;
}

export interface Student {
    id?: number;
    userId: number;
    user?: User;
    level: number;
    classId?: number;
    class?: Class
}
