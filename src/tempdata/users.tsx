import { FaUserCircle } from "react-icons/fa"
import { CompanyTypes, ScheduleTypes, UserTypes, SYSTEM_ROLES } from "../types/types"

export const PROJECT_COMPANY: CompanyTypes[] = [
    {
        id: 'CO0001',
        name: 'OneThree Company',
    },
]

export const PROJECT_USERS: UserTypes[] = [
    {
        id: 'USR001',
        first: 'Joshua',
        last: 'Connor',
        email: 'connor.joshua@gmail.com',
        role: SYSTEM_ROLES.SYSADM,
        job_title: 'System Administrator',
        icon: <FaUserCircle className="text-4xl" />,
        company_id: 'CO0001',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, felis non iaculis condimentum, lacus erat dapibus lacus, ac fermentum odio nibh eu diam.',
    },
]

