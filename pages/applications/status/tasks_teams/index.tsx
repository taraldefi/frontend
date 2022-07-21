import StatusLayout from "@components/layouts/status_layout";
import { TaskTable } from "@components/widgets/table/taskTable";
import { TeamTable } from "@components/widgets/table/teamTable";
import { TaskData } from "./task_data";
import { TeamData } from "./team_data";
export default function TaskTeam() {
  var x: number = Object.keys(TaskData).length;
  var y: number = Object.keys(TeamData).length;
  return (
    <StatusLayout  showexport={true}>
      <TaskTable TableData={TaskData} value={x} />
      <TeamTable TableData={TeamData} value={y} />
    </StatusLayout>
  );
}
