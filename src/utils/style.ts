export type PlaceIn = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export const placeInStyle = (placeIn: PlaceIn) => `
${placeIn === "bottom-right" ? "absolute bottom-2 right-2" : ""}
${placeIn === "bottom-left" ? "absolute bottom-2 left-2" : ""}
${placeIn === "top-right" ? "absolute top-2 right-2" : ""}
${placeIn === "top-left" ? "absolute top-2 left-2" : ""}
`;