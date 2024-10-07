import { flattenTree } from "react-accessible-treeview";

export const calendarViewData = [
	{
		dateCreated: "2021-07-03",
		data: "This is a calendar node",
	},
	{
		dateCreated: "2021-07-04",
		data: "This is another calendar node",
	},
	{
		dateCreated: "2021-07-05",
		data: "This is yet another calendar node",
	},
];

export const folder = {
	name: "",
	children: [
		{
			name: "src",
			children: [{ name: "index.js" }, { name: "styles.css" }],
		},
		{
			name: "node_modules",
			children: [
				{
					name: "react-accessible-treeview",
					children: [{ name: "bundle.js" }],
				},
				{ name: "react", children: [{ name: "bundle.js" }] },
			],
		},
		{
			name: ".npmignore",
		},
		{
			name: "package.json",
		},
		{
			name: "webpack.config.js",
		},
	],
};

export const SideBarData = flattenTree(folder);
