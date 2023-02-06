import { useEffect, useState } from "react";
import Item from "./Item";

export default function GroupBox({
  groupData,
  checkedItemHandler,
  checkedItem
}) {
  const [groupChecked, setGroupChecked] = useState(false);

  useEffect(() => {
    if (groupData.groupChild.every((e) => e.useYn === "Y")) {
      setGroupChecked(true);
    }
  }, [groupData]);

  return (
    <>
      <div>
        <input type="checkbox" checked={groupChecked} />
        {groupData.groupname}
      </div>
      <ul>
        {groupData.groupChild.map((el) => (
          <Item
            itemData={el}
            checkedItemHandler={checkedItemHandler}
            checkedItem={checkedItem}
          />
        ))}
      </ul>
    </>
  );
}
