export interface JobSummary {
    designation: string;
    applicants: number;
    receivedDate: number;
    status: string;
    location: string;
}

export interface AssignBoard {
    applicantId: number;
    applicantName: string;
    designation: string;
    assignedDate: number;
    location: string;
    organizer: string;
}
