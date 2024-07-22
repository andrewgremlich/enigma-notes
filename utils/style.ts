export type PlaceIn = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export const placeInStyle = (placeIn: PlaceIn) => `
${placeIn === "bottom-right" ? "absolute bottom-4 right-10" : ""}
${placeIn === "bottom-left" ? "absolute bottom-4 left-10" : ""}
${placeIn === "top-right" ? "absolute top-3 right-10" : ""}
${placeIn === "top-left" ? "absolute top-3 left-10" : ""}
`;

export const defaultInputStyle = `
p-2
border-2
border-slate-200
dark:border-slate-800
rounded-md
focus:outline-none
focus:border-blue-700
dark:focus:border-blue-300
transition-all
duration-300
ease-in-out
`;

export const PrimaryButtonStyle = `
bg-blue-700
dark:bg-blue-300
text-white
p-2
rounded-md
shadow-md
hover:shadow-lg
transition-all
duration-300
ease-in-out
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

export const defaultNoteStyle = `
max-w-screen-lg
w-full
h-full
mx-auto
py-4
px-8
`;

export const defaultNotePartStyle = `
bg-slate-200
dark:bg-slate-800
hover:shadow-yellow-900
dark:hover:shadow-yellow-100
cursor-pointer

px-6
py-4
rounded-md
shadow-lg
mb-10

transition-all
duration-300
ease-in-out
`;
