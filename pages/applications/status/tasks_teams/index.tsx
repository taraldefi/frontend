import StatusLayout from "@components/layouts/status_layout";
import { TaskTable } from "@components/widgets/table/taskTable";
import { TeamTable } from "@components/widgets/table/teamTable";

const TeamData = [
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Credit",
    lastAction: "Upload Document",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Compliance",
    lastAction: "Review Credit Report",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Account Opening",
    lastAction: "Prepare account opening",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Credit",
    lastAction: "Upload Document",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Compliance",
    lastAction: "Review Credit Report",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Account Opening",
    lastAction: "Prepare account opening",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Credit",
    lastAction: "Upload Document",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Compliance",
    lastAction: "Review Credit Report",
    dateOfAction: "20.10.2019",
  },
  {
    member: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    department: "Account Opening",
    lastAction: "Prepare account opening",
    dateOfAction: "20.10.2019",
  },
];

const TaskData = [
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
  {
    assignee: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    task: {
      title: "Upload documentations",
      description:
        "Description of the task if the assignor has anything written about it.",
    },
    assignor: {
      user: "/assets/images/1.png",
      name: "Cameron Williamson",
    },
    date: "19.10.2019",
  },
];
export default function TaskTeam() {
  var x: number = Object.keys(TaskData).length;
  var y: number = Object.keys(TeamData).length;
  return (
    <StatusLayout showexport={true}>
      <TaskTable TableData={TaskData} value={x} />
      <TeamTable TableData={TeamData} value={y} />
    </StatusLayout>
  );
}
