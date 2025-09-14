import Work from "./Work";
import type { WorkForm, WorkHandlers } from "./Work";
import DeleteIcon from "../../assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import AddIcon from "../../assets/add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import ArrowDown from "../../assets/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";

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
      <section className="work-list close-card" onClick={onShow}>
        <p>
          <strong>Work Experience</strong>
        </p>
        <ArrowDown />
      </section>
    );
  }
  return (
    <section className="work-list card">
      <div className="header">
        <h2>Work Experience</h2>
        <button onClick={listWorkHandlers.addWork}>
          <AddIcon />
        </button>
      </div>
      {workList.map((work) => (
        <div key={work.id} className="work">
          <Work work={work} workHandlers={listWorkHandlers} />
          <button onClick={() => listWorkHandlers.deleteWork(work.id)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </section>
  );
}

export default ListWorkForm;
export type { ListWorkHandlers };
