export type PlaceIn = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export const placeInStyle = (placeIn: PlaceIn) => `
${placeIn === "bottom-right" ? "absolute bottom-4 right-10" : ""}
${placeIn === "bottom-left" ? "absolute bottom-4 left-10" : ""}
${placeIn === "top-right" ? "absolute top-3 right-10" : ""}
${placeIn === "top-left" ? "absolute top-3 left-10" : ""}
`;

export const IconStyle = `
text-slate-900
dark:text-slate-100
hover:text-blue-700
dark:hover:text-blue-300
transition-colors
duration-200
ease-in-out
cursor-pointer`;
