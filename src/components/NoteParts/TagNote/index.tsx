import { useState, useCallback } from "react";
import { ReactTags, type Tag } from "react-tag-autocomplete";

import { defaultNotePartStyle } from "@/utils/style";

import "./style.css";

type TagNoteProps = {
	tags: Tag[];
	updateTags: (tag: Tag) => void;
	removeTag: (tag: Tag) => void;
};

function isValid(value: string) {
	return /^[a-z]{4,12}$/i.test(value);
}

export const TagNote = ({ removeTag, updateTags, tags }: TagNoteProps) => {
	const onAdd = useCallback(
		(newTag: Tag) => {
			updateTags(newTag);
		},
		[updateTags],
	);

	const onDelete = useCallback(
		(tagIndex: number) => {
			removeTag(tags[tagIndex]);
		},
		[removeTag, tags],
	);

	const onValidate = useCallback((value: string) => isValid(value), []);

	// function groupChildrenByFirstCharacter(children) {
	//   const groups = {}

	//   children.forEach((child) => {
	//     const suggestion = suggestions.find((suggestion) =>
	//       child.key.endsWith(`${suggestion.value}-${suggestion.label}`)
	//     )
	//     const firstChar = suggestion.label.charAt(0).toUpperCase()

	//     groups[firstChar] ??= []
	//     groups[firstChar].push({ suggestion, child })
	//   })

	//   return groups
	// }

	// function CustomTagList({ children, classNames, ...tagListProps }) {
	//   const groupedTags = groupChildrenByFirstCharacter(React.Children.toArray(children))

	//   return (
	//     <>
	//       {Object.keys(groupedTags).map((key) => (
	//         <div key={key} className="tag-group">
	//           <p>{`Countries starting with the letter "${key}":`}</p>
	//           <ul className={classNames.tagList} {...tagListProps}>
	//             {groupedTags[key].map(({ suggestion, child }) => (
	//               <li className={classNames.tagListItem} key={suggestion.value}>
	//                 {child}
	//               </li>
	//             ))}
	//           </ul>
	//         </div>
	//       ))}
	//     </>
	//   )
	// }

	return (
		<aside className={defaultNotePartStyle}>
			<ReactTags
				allowNew
				ariaDescribedBy="note-tags"
				collapseOnSelect
				onAdd={onAdd}
				onDelete={onDelete}
				onValidate={onValidate}
				selected={tags}
				suggestions={[]}
				// renderTagList={CustomTagList}
			/>
		</aside>
	);
};
