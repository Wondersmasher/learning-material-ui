import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import { useState } from "react";
import SharedLayout from "./components/SharedLayout";
function App() {
  const [notes, setNotes] = useState([
    {
      note: "lkafjlkafafjadkjfak fkajfklkakfkalkflkaf",
      title: "trials",
      category: "work",
      id: 0,
    },
    {
      note: "lkafjlkafafjadkjfak fkajfklkakfkalkflkaf",
      title: "trials",
      category: "work",
      id: 1,
    },
    {
      note: "lkafjlkafafjadkjfak fkajfklkakfkalkflkaf",
      title: "trials",
      category: "work",
      id: 2,
    },
    {
      note: "lkafjlkafafjadkjfak fkajfklkakfkalkflkaf",
      title: "trials",
      category: "work",
      id: 3,
    },
    {
      note: "lkafjlkafafjadkjfak fkajfklkakfkalkflkaf",
      title: "trials",
      category: "work",
      id: 4,
    },
  ]);
  console.log(notes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Notes notes={notes} setNotes={setNotes} />} />
          <Route
            path="/create-note"
            element={<CreateNote notes={notes} setNotes={setNotes} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
