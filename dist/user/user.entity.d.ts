export declare enum UserRole {
    ADMIN = "admin",
    MANAGER = "manager",
    GUEST = "guest"
}
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    createdAt: Date;
}
