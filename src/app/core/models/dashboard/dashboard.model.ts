export interface DashboardData {
    date: moment.Moment;
    user: User;
    notification: Notification[];
    organizers: Organizer[];
    summary: Summary;
    oldSummary?: OldSummary;
}

export interface User {
    name: string;
    designation: string;
    image: Image;
    cvCount: number;
}

export interface Summary {
    applicants: number;
    shortlisted: number;
    onHold: number;
    rejected: number;
}

export interface OldSummary {
    applicants: number[];
    shortlisted: number[];
    onHold: number[];
    rejected: number[];
}

export interface Organizer {
    employeeId: string;
    name: string;
    noOfAssignedApplication: number;
    image?: Image;
}

export interface Notification {
    message: string;
    date: string;
    time: string;
    usersList: Image[];
}

export interface Image {
    url: string;
}
