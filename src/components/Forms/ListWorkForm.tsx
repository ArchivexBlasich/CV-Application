import Work from "./Work";
import type { WorkForm, WorkHandlers } from "./Work";
import DeleteIcon from "../../assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import AddIcon from "../../assets/add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import { Fragment } from "react/jsx-runtime";

interface ListWorkHandlers extends WorkHandlers {
  addWork: () => void;
  deleteWork: (id: string) => void;
}

type ListWork = {
  workList: WorkForm[];
  listWorkHandlers: ListWorkHandlers;
  isActive: boolean;
  onShow: () => void;
};

function ListWorkForm({
  workList,
  listWorkHandlers,
  isActive,
  onShow,
}: ListWork) {
  if (!isActive) {
    return (
      <div className="container" onClick={onShow}>
        <p>
          <strong>Work Experience</strong>
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Work Experience</h2>
      <button onClick={listWorkHandlers.addWork}>
        <AddIcon />
      </button>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <Work work={work} workHandlers={listWorkHandlers} />
          <button onClick={() => listWorkHandlers.deleteWork(work.id)}>
            <DeleteIcon />
          </button>
        </Fragment>
      ))}
    </div>
  );
}

export default ListWorkForm;
export type { ListWorkHandlers };
