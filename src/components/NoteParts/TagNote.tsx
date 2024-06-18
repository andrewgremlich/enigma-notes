import { useState, useCallback } from "react";
import { ReactTags, type Tag } from "react-tag-autocomplete";

import { defaultNotePartStyle } from "@/utils/style";

function isValid(value: string) {
	return /^[a-z]{4,12}$/i.test(value);
}

export const TagNote = () => {
	const [selected, setSelected] = useState<Tag[]>([]);

	const onAdd = useCallback(
		(newTag: Tag) => {
			setSelected([...selected, newTag]);
		},
		[selected],
	);

	const onDelete = useCallback(
		(tagIndex: number) => {
			setSelected(selected.filter((_, i) => i !== tagIndex));
		},
		[selected],
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
				labelText="Tag Note"
				onAdd={onAdd}
				onDelete={onDelete}
				onValidate={onValidate}
				selected={selected}
				suggestions={[]}
        // renderTagList={CustomTagList}
			/>
			<p id="custom-tags-description" style={{ color: "gray" }}>
				<em>
					Tags must be between 4 and 12 characters in length and only contain
					the letters A-Z
				</em>
			</p>
		</aside>
	);
};
