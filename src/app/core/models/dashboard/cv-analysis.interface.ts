import { AttachmentEntity } from './rejected-cv.model';

export interface Reference {
    reference_name: string;
    reference_desig: string;
    reference_mobile: string;
    reference_mail: string;
}

export interface WebsiteUrl {
    websiteName: string;
    url: string;
}

export interface EducationHistory {
    instituitionName: string;
    grade: string;
    from: string;
    to: string;
    location: string;
}

export interface WorkHistory {
    companyName: string;
    position: string;
    from: string;
    to: string;
    location: string;
}

export interface ResumeCard {
    applicantId: number;
    name: string;
    designation: string;
    skills: string;
    status: string;
    attachmentEntities: AttachmentEntity[];
}

export interface Applicant {
    applicantId: number;
    applicantName: string;
    emailId: string;
    mobile_no: string;
    dob: string;
    jobLocation: string;
    gender: string;
    designation: string;
    experienceYear: number;
    experienceMonth: number;
    applicationType: string;
    reference: Reference;
    languages: string;
    address: string;
    state: string;
    pincode: string;
    softwares: string;
    skill: string;
    aboutYou: string;
    currentCTC: string;
    expectedCTC: string;
    applicationStatus: string;
    submitDate: string;
    assigned: number;
    websiteUrl: WebsiteUrl[];
    educationHistory: EducationHistory[];
    workHistory: WorkHistory[];
    attachmentEntities: AttachmentEntity[];
    deleted: boolean;
}

