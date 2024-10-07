import TreeView, { type INode } from "react-accessible-treeview";
import type { IFlatMetadata } from "react-accessible-treeview/dist/TreeView/utils";
import { FiFile, FiFolder } from "react-icons/fi";

type TreeViewerContentsProps = {
  data: INode<IFlatMetadata>[];
};

export const TreeViewerContents = ({ data }: TreeViewerContentsProps) => {
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
            <FiFolder size={20} />
          ) : (
            <FiFile size={20} />
          )}
          {element.name}
        </div>
      )}
    />
  );
};
