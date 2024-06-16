import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import IssuesBoard from "./components/IssuesBoard";
import IssueForm from "./components/IssueForm";
import createAxiosByinterceptors from "./request";
import "./App.css";

function App() {
  const [issues, setIssues] = useState([]);
  const requstInstance = createAxiosByinterceptors();

  const getIssues = () => {
    requstInstance.get("/issues").then((res) => {
      setIssues(res.data);
    });
  };
  const addIssue = (title, description) => {
    requstInstance.post("/issues", { title, description }).then((res) => {
      setIssues([...issues, res.data]);
    });
  };
  const deleteIssue = (id) => {
    requstInstance.delete(`/issues/${id}`).then(() => {
      setIssues(issues.filter((item) => item.id !== id));
    });
  };
  const updateIssue = (id, title, description) => {
    requstInstance.post(`/issues/${id}`, { title, description }).then((res) => {
      setIssues(issues.map((item) => (item.id === id ? res.data : item)));
    })
  };
  useEffect(() => {
    getIssues();
  }, []);
  return (
    <Box className="App" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      paddingY: "20px",
    }}>
      <IssuesBoard data={issues} deleteIssue={deleteIssue} updateIssue={updateIssue}/>
      <IssueForm addIssue={addIssue}/>
    </Box>
  );
}

export default App;
