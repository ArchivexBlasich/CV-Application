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
    <div className="education">
      <label>
        Company:{" "}
        <input
          type="text"
          value={work.company}
          onChange={(e) => workHandlers.handleCompanyChange(work.id, e)}
        />
      </label>
      <br />
      <label>
        Dates:{" "}
        <input
          type="text"
          value={work.dates}
          onChange={(e) => workHandlers.handleDatesChange(work.id, e)}
        />
      </label>
      <br />
      <label>
        Position Title:{" "}
        <input
          type="text"
          value={work.positionTitle}
          onChange={(e) => workHandlers.handlePositionTitleChange(work.id, e)}
        />
      </label>
      <br />
      <label>
        Main Responsibilities:{" "}
        <textarea
          value={work.mainResponsibilities}
          onChange={(e) => workHandlers.handleMainResponsibilitiesChange(work.id, e)}
        />
      </label>
    </div>
  );
}

export default Work;
export type { WorkForm, WorkHandlers };
