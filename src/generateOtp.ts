export const generateOtp = (length: number = 6): string => {
    if (length <= 0 || !Number.isInteger(length)) {
        throw new Error("OTP length must be a positive integer");
    }
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};