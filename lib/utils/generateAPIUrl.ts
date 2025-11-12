import Constants from "expo-constants";

export const generateAPIUrl = (path: string) => {
    const origin = Constants.experienceUrl.replace("exp://", "http://");
    return `${origin}${path}`;
};