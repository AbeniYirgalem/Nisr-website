export function formatDate(dateInput: any) {
    if (!dateInput) return "N/A";
    const date = "toDate" in dateInput ? dateInput.toDate() : dateInput;
    return date.toLocaleDateString("en-GB");
}