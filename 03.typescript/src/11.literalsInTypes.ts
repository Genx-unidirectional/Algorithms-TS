type Lead = "sm" | "md" | "lg" | "x";

type EmailContent = "message" | "questions";

type EmailLead = `${Lead}${EmailContent}`;
