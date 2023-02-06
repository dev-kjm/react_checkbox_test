import { useEffect, useState } from "react";

export default function Item({ itemData, checkedItemHandler, checkedItem }) {
  const [itemChecked, setItemChecked] = useState(false);

  useEffect(() => {
    setItemChecked(checkedItem.has(itemData.id) ? true : false);
  }, [checkedItem]);

  const itemHandler = (e) => {
    setItemChecked(!itemChecked);

    checkedItemHandler(itemData.id, e.target.checked);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={itemChecked}
        onChange={(e) => {
          itemHandler(e);
        }}
      />
      {itemData.id}
    </li>
  );
}
