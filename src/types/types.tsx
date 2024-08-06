export enum SYSTEM_ROLES {
    SYSADM = "SystemAdmin",
    ADM = "Admin",
    USR = "User",
}

export type CompanyTypes = {
    id: string;
    name: string;
}

export type UserTypes = {
    id: string;
    first: string;
    last: string;
    email: string;
    role: SYSTEM_ROLES;
    job_title: string;
    icon?: JSX.Element;
    company_id: string;
    detail: string;
}

export type ScheduleTypes = {
    id: string;
    count_worked: number;
    count_onTime: number;
    count_late: number;
    count_noShow: number;
    schedule: Date[];
}