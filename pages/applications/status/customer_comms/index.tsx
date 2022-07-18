import StatusLayout from "@components/layouts/status_layout";
import Button from "@components/widgets/button";
import SecondButton from "@components/widgets/buttonSecondary";
import ButtonIcon from "@components/widgets/buttonWithIcon";
export default function CustomerComms() {
  return (
    <StatusLayout>
      <Button title="New Task" onClick={() => console.log("clicked")}></Button>
      <br />
      <SecondButton
        title="View All Tasks"
        onClick={() => console.log("clicked")}
      ></SecondButton>
      <br />
      <Button
        title="New Message"
        onClick={() => console.log("clicked")}
      ></Button>
      <br />
      <SecondButton
        title="View All Messages"
        onClick={() => console.log("clicked")}
      ></SecondButton>
      <br />
      <ButtonIcon icon="add" title="Add" onClick={() => {}}></ButtonIcon> <br />
      <ButtonIcon icon="upload" title="Upload" onClick={() => {}}></ButtonIcon>
    </StatusLayout>
  );
}
