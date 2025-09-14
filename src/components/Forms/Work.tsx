import Input from "../Input";

interface WorkForm {
  company: string;
  dates: string;
  positionTitle: string;
  mainResponsibilities: string;
  id: string;
}

interface WorkHandlers {
  handleCompanyChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDatesChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handlePositionTitleChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleMainResponsibilitiesChange: (
    id: string,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

function Work({
  work,
  workHandlers,
}: {
  work: WorkForm;
  workHandlers: WorkHandlers;
}) {
  return (
    <>
      <div>
        <Input
          title="Company"
          type="text"
          value={work.company}
          id={work.id}
          onChange={(e) => workHandlers.handleCompanyChange(work.id, e)}
        />
      </div>
      <div>
        <Input
          title="Dates:"
          type="text"
          value={work.dates}
          id={work.id}
          onChange={(e) => workHandlers.handleDatesChange(work.id, e)}
        />
      </div>
      <div>
        <Input
          title="Position Title"
          type="text"
          value={work.positionTitle}
          id={work.id}
          onChange={(e) => workHandlers.handlePositionTitleChange(work.id, e)}
        />
      </div>
      <div>
        <label htmlFor={`Main Responsibilities-${work.id}`}>
          Main Responsibilities:{" "}
        </label>
        <textarea
          value={work.mainResponsibilities}
          onChange={(e) =>
            workHandlers.handleMainResponsibilitiesChange(work.id, e)
          }
          id={`Main Responsibilities-${work.id}`}
          rows={8}
        />
      </div>
    </>
  );
}

export default Work;
export type { WorkForm, WorkHandlers };
