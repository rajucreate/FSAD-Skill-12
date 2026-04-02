import { useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";

function App() {
  const [reload, setReload] = useState(false);
  const [selected, setSelected] = useState(null);

  const refresh = () => {
    setReload(!reload);
  };

  return (
    <div>
      <AddStudent 
        refresh={refresh} 
        selected={selected} 
        setSelected={setSelected} 
      />

      <StudentList 
        reload={reload} 
        setSelected={setSelected}   // 🔥 THIS LINE IS CRITICAL
      />
    </div>
  );
}

export default App;