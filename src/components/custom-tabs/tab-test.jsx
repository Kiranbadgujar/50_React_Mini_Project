import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
  return <h1>Hi</h1>;
}

function RandomComponent1() {
  return <h1>Hello</h1>;
}

function RandomComponent2() {
  return <h1>What's up</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <RandomComponent />,
    },
    {
      label: "Tab 2",
      content: <RandomComponent1 />,
    },
    {
      label: "Tab 3",
      content: <RandomComponent2 />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
