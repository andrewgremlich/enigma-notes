import { FiFolder, FiFile } from "react-icons/fi";
import TreeView from "react-accessible-treeview";
import { flattenTree } from "react-accessible-treeview";

import { FileViewIconStyle } from "./style";

const folder = {
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

const data = flattenTree(folder);

export const ViewerContents = () => {
	const newFile = () => {
		console.log("new file");
	};

	const newFolder = () => {
		console.log("new folder");
	};

	return (
		<TreeView
			data={data}
			aria-label="File Fiew Tree View"
			nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
				<div
					{...getNodeProps()}
					style={{ paddingLeft: 20 * (level - 1) }}
					className={`flex pb-2 ${
						element.children && element.children.length > 0
							? "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out"
							: ""
					}`}
				>
					{element.children && element.children.length > 0 ? (
						<FiFolder
							size={20}
							className={FileViewIconStyle}
							onClick={newFolder}
						/>
					) : (
						<FiFile size={20} className={FileViewIconStyle} onClick={newFile} />
					)}
					{element.name}
				</div>
			)}
		/>
	);
};
