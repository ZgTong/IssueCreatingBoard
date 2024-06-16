import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import IssueList from "./IssueList";


function IssuesBoard({ data, deleteIssue, updateIssue }) {

  return (
    <IssueList issues={data} deleteIssue={deleteIssue} updateIssue={updateIssue}/>
  );
}

export default IssuesBoard;
