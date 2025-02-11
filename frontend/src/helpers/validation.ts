export const isValidEmail = (email?: string) => {
    if (!email) {
        return false;
    }
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};