import IssueList from "./IssueList";


function IssuesBoard({ data, deleteIssue, updateIssue }) {

  return (
    <IssueList issues={data} deleteIssue={deleteIssue} updateIssue={updateIssue}/>
  );
}

export default IssuesBoard;
