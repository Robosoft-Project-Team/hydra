export interface RejectedCV {
    applicantId: number;
    applicantName: string;
    designation: string;
    jobLocation: string;
    attachmentEntities: AttachmentEntity;
    mobile_no: string;
}

export interface AttachmentEntity {
    file_name: string;
    file_type: string;
    file_size: number;
    type?: any;
    download_link: string;
}
