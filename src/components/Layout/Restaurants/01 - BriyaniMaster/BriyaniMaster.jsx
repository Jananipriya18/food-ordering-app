import React, {useState} from 'react'

import { Button } from "react-bootstrap";


export default function BriyaniMaster() {
    const [activeTab, setActiveTab] = useState("first");
    const handleTabClick = (tabKey) => {
      setActiveTab(tabKey);
    };
  return (
    <div>
      <div className="goalsContents">
        <Button
          variant={activeTab === "first" ? "warning" : "outline-warning"}
          onClick={() => handleTabClick("first")}
        >
          Indian cuisine
        </Button>
        <Button
          variant={activeTab === "second" ? "success" : "outline-success"}
          onClick={() => handleTabClick("second")}
        >
          Chinese cuisine
        </Button>

        <div className="mt-3">
          {activeTab === "first" && <div>

            Indian meals
            
            
            </div>}
          {activeTab === "second" && <div>
            
            CHinese meals
            </div>}
        </div>
      </div>
    </div>
  )
}
