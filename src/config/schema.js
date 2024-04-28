import { object, string, ref, number, date } from "yup";

export const SerialCodeSchema = object().shape({
    serialCode: number()
        .positive()
        .integer()
        .required("Serial code is required")
        .typeError("Serial code must be a number"),
});

export const LoginSchema = object().shape({
    email: string().trim().email("Invalid email address").required("Email is required"),
    password: string().trim().required("Password is required"),
});

export const SignUpSchema = object().shape({
    email: string().trim().email("Invalid email address").required("Email is required"),
    password: string().trim().required("Password is required"),
});

export const ForgotPasswordSchema = object().shape({
    email: string().trim().email("Invalid email address").required("Email is required"),
});

export const ResetPasswordSchema = object().shape({
    currentPassword: string().trim().required("Current password is required"),
    password: string().trim().required("Password is required"),
    confirmPassword: string()
        .trim()
        .oneOf([ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

export const SchoolRegisterSchema = object().shape({
    schoolName: string().trim().required("School name is required"),
    schoolAddress: string().trim().required("School address is required"),
    schoolCity: string().trim().required("City is required"),
    schoolState: string().trim().required("State is required"),
    schoolEmail: string().trim().email("Invalid email address").required("Email is required"),
    schoolPhone: string().trim().required("Phone number is required"),
    superAdminPassword: string().trim().required("Password is required"),
    superAdminEmail: string().trim().email("Invalid email address").required("Email is required"),
    schoolType: string().trim().required("School type is required"),
});

export const UsersRolesSchema = object().shape({
    name: string().trim().required("Name is required"),
    email: string().trim().email("Invalid email address").required("Email is required"),
    phone: string().trim().required("Phone number is required"),
    userType: string().trim().required("User Type is required"),
    gender: string().trim().required("Gender is required"),
    address: string().trim().required("Address is required"),
    contactPerson: string().trim().required("Contact Person is required"),
    relationship: string().trim().required("Relationship is required"),
    institution: string().trim().required("Institution is required"),
    institutionAddress: string().trim().required("Institution address is required"),
    attendedClasses: string().trim().required("Attended classes is required"),
    lastAttendedEducation: string().trim().required("Last education attended  is required"),
    class: string().trim().required("Class is required"),
    originState: string().trim().required("State of origin is required"),
    schoolType: string().trim().required("School type is required"),
    dob: date()
        .nullable()
        .transform((curr, orig) => (orig === "" ? null : curr))
        .required("Date of Birth is required")
        .typeError("Invalid DOB"),
    code: number()
        .positive()
        .integer()
        .required("Code is required")
        .typeError("Code must be a number"),
});
export const promotionSchema = object().shape({
    student: string().trim().required("Please Select a Student"),
    session: string().trim().required("New Session is required"),
    class: string().trim().required("Please Select a Class"),
    newClass: string().trim().required("Please Select a New Class"),
    academicSession: string().trim().required("Please Select  Academic Session"),
});
export const timeTableSchema = object().shape({
    term: string().trim().required("Please Select a Term"),
    class: string().trim().required("Please Select a Class"),
    subject: string().trim().required("Please Select a subject"),
});
export const AdmissionLetterSchema = object().shape({
    title: string().trim().required("Title is Required"),
    description: string().trim().required("description is required"),
});

export const ApplicationSchema = object().shape({
    email: string().trim().email("Invalid email address").required("Email is required"),
    guardianPhone: string().trim().required("Phone number is required"),
    address: string().trim().required("Address is required"),
    relationship: string().trim().required("Relationship is required"),
    gender: string().trim().required("Please select a gender"),
    name: string().trim().required("Name is required"),
    originState: string().trim().required("State of origin is required"),
    dob: date()
        .nullable()
        .transform((curr, orig) => (orig === "" ? null : curr))
        .required("Date of Birth is required")
        .typeError("Invalid DOB"),
    phone: string().trim().required("Phone number is required"),
    prevEducation: string().trim().required("Previous education is required"),
    institution: string().trim().required("Institution is required"),
    institutionAddress: string().trim().required("Institution address is required"),
    class: string().trim().required("Class is required"),
    attendedClasses: string().trim().required("Attended classes is required"),
    institutionContactName: string().trim().required("Institution contact's name is required"),
    institutionContactPhone: string()
        .trim()
        .required("Institution contact's phone number is required"),
    birthCertificate: string().trim().required("Birth certificate is required"),
});
export const TeachersCommentSchema = object().shape({
    comment: string().trim().required("Enter a comment"),
    name: string().trim().required("Name is required"),
    term: string().trim().required("Please Select a Term"),
    class: string().trim().required("Please Select a Class"),
    subject: string().trim().required("Please Select a subject"),
});
export const ReferralSchema = object().shape({
    notify: string().trim().required("Please select who to notify"),
    referralType: string().trim().required("Please Select a referral type"),
    points: string().trim().required("Point is rquired"),
    referralCode: string().trim().required("Referral code is required"),
    date: string().trim().required("date is required"),
});

export const AddRoleSchema = object().shape({
    roleName: string().trim().required("Role name is required"),
});

export const PaymentTypeSchema = object().shape({
    secretKey: string().trim().required("Secret key is required"),
    publicKey: string().trim().required("Public key is required"),
});
