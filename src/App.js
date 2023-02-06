import { useEffect, useState } from "react";
import GroupBox from "./GroupBox";
import "./styles.css";

const data = [
  {
    groupname: "apple",
    groupChild: [
      { id: "1", childName: "apple1", useYn: "Y" },
      { id: "2", childName: "apple2", useYn: "Y" }
    ]
  },
  {
    groupname: "banana",
    groupChild: [
      { id: "3", childName: "banana1", useYn: "Y" },
      { id: "4", childName: "banana2", useYn: "n" }
    ]
  }
];

export default function App() {
  const [checkedItem, setCheckedItem] = useState(new Set());

  //초기 체크데이터 설정
  useEffect(() => {
    data.forEach((el) => {
      el.groupChild.forEach((item) => {
        if (item.useYn === "Y") {
          checkedItem.add(item.id);
        }
      });
    });
    setCheckedItem(checkedItem);
    console.log("init", checkedItem);
  }, []);

  //전체 체크 데이터 셋팅
  const allHandle = (e) => {
    const tempSet = new Set();
    data.forEach((el) => {
      el.groupChild.forEach((item) => {
        if (e.target.checked) {
          tempSet.add(item.id);
        }
      });
    });
    setCheckedItem(tempSet);
  };

  //개별 체크박스
  const checkedItemHandler = (id, isChecked) => {
    console.log(id, isChecked);
    const tempSet = new Set(checkedItem);
    if (isChecked) {
      tempSet.add(id);
    } else {
      tempSet.delete(id);
    }
    setCheckedItem(tempSet);
    console.log(checkedItem);
  };

  return (
    <div className="App">
      <input
        type="checkbox"
        onClick={(e) => {
          allHandle(e);
        }}
      />
      전체체크
      <button
        onClick={() => {
          console.log("btn", checkedItem);
        }}
      >
        btn
      </button>
      {data.map((e) => (
        <GroupBox
          key={e.groupname}
          groupData={e}
          checkedItemHandler={checkedItemHandler}
          checkedItem={checkedItem}
        />
      ))}
    </div>
  );
}
