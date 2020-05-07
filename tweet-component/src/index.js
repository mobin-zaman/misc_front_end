import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import moment from "moment";

const FileList = ({ files }) => (
  <table>
    <tbody>
      {files.map((file) => (
        <FileListItem file={file} key={file.id} />
      ))}
    </tbody>
  </table>
);

const FileListItem = ({ file }) => (
  <tr>
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <td>
      <Time tile={file.updated_at} />
    </td>
  </tr>
);

const CommitMessage = ({ commit }) => <td>{commit.message}</td>;

const FileName = ({ file }) => (
  <>
    <td>
      <FileIcon file={file} />
    </td>
    <td>{file.name}</td>
  </>
);

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span>{timeString}</span>;
};

const FileIcon = ({ file }) => {
  let icon = null;
  switch (file.type) {
    case "folder":
      icon = "fa-folder";
      break;
    default:
    case "file":
      icon = "fa-file-text-o";
  }
  return <i className={`fa ${icon}`} />;
};

const data = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit",
    },
  },
  {
    id: 3,
    name: "README",
    type: "file",
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(<FileList files={data} />, document.querySelector("#root"));
