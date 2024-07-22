import { useCallback } from "react";
import { ReactTags, type Tag } from "react-tag-autocomplete";

import { defaultNotePartStyle } from "@/utils/style";

import "./style.css";

type TagNoteProps = {
  tags: Tag[];
  updateTags: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
};

export const TagNote = ({ removeTag, updateTags, tags }: TagNoteProps) => {
  // const [suggestions, setSuggestions] = useState<Tag[]>(tags);

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

  // const groupChildrenByFirstCharacter = (children: ReactNode[]) => {
  //   const groups: { [key: string]: { suggestion: Tag; child: ReactNode }[] } =
  //     {};

  //   for (const child of Children.toArray(children) as ReactElement[]) {
  //     if (!isValidElement(child)) {
  //       continue;
  //     }

  //     const suggestion = suggestions.find((suggestion) =>
  //       child.key?.endsWith(`${String(suggestion.value)}-${suggestion.label}`),
  //     );
  //     const firstChar = suggestion?.label.charAt(0).toUpperCase();

  //     if (!firstChar) {
  //       continue;
  //     }

  //     if (!suggestion) {
  //       continue;
  //     }

  //     groups[firstChar] ??= [];
  //     groups[firstChar].push({ suggestion, child });
  //   }

  //   return groups;
  // };

  // const CustomTagList: TagListRenderer = ({
  //   children,
  //   classNames,
  //   ...tagListProps
  // }) => {
  //   const groupedTags = groupChildrenByFirstCharacter(
  //     Children.toArray(children),
  //   );

  //   return (
  //     <>
  //       {Object.keys(groupedTags).map((key) => (
  //         <div key={key} className="tag-group">
  //           <p>{`Countries starting with the letter "${key}":`}</p>
  //           <ul className={classNames.tagList} {...tagListProps}>
  //             {groupedTags[key].map(({ suggestion, child }) => (
  //               <li
  //                 className={classNames.tagListItem}
  //                 key={String(suggestion.value)}
  //               >
  //                 {child}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //     </>
  //   );
  // };

  return (
    <aside className={defaultNotePartStyle}>
      <ReactTags
        allowNew
        ariaDescribedBy="note-tags"
        collapseOnSelect
        onAdd={onAdd}
        onDelete={onDelete}
        selected={tags}
        suggestions={[]}
        // renderTagList={CustomTagList}
      />
    </aside>
  );
};
