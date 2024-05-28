import { Resizable } from "re-resizable";
import { FiFilePlus, FiFolderPlus } from "react-icons/fi";
import TreeView, { flattenTree } from "react-accessible-treeview";

import { FileViewIconStyle, FileViewStyle } from "./style";
import { NoteTypeSelector } from "../NoteTypeSelector";
import { Settings } from "../Settings";

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

export const FileView = () => {
	const newFile = () => {
		console.log("new file");
	};

	const newFolder = () => {
		console.log("new folder");
	};

	return (
		<Resizable
			defaultSize={{
				width: "30%",
			}}
			minWidth={200}
			maxWidth={400}
			className={FileViewStyle}
		>
			<div className="relative w-full">
				<TreeView
					data={data}
					aria-label="File Fiew Tree View"
					nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
						<div
							{...getNodeProps()}
							style={{ paddingLeft: 20 * (level - 1) }}
							className="flex"
						>
							{element.name}
							<FiFilePlus
								size={20}
								className={FileViewIconStyle}
								onClick={newFile}
							/>

							<FiFolderPlus
								size={20}
								className={FileViewIconStyle}
								onClick={newFolder}
							/>
						</div>
					)}
				/>
				<Settings placeIn="bottom-left" />
				<NoteTypeSelector placeIn="bottom-right" />
			</div>
		</Resizable>
	);
};
