import Education from "./Education";
import type { EducationForm, EducationHandlers } from "./Education";
import DeleteIcon from "../../assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import AddIcon from "../../assets/add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import ArrowDown from "../../assets/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";

interface ListEducationHandlers extends EducationHandlers {
  addEducation: () => void;
  deleteEducation: (id: string) => void;
}

type ListEducation = {
  educationList: EducationForm[];
  listEducationHandlers: ListEducationHandlers;
  isActive: boolean;
  onShow: () => void;
};

function ListEducationForm({
  educationList,
  listEducationHandlers,
  isActive,
  onShow,
}: ListEducation) {
  if (!isActive) {
    return (
      <section className="education-list close-card" onClick={onShow}>
        <p>
          <strong>Education</strong>
        </p>
        <ArrowDown />
      </section>
    );
  }
  return (
    <section className="education-list card">
      <div className="header">
        <h2>Education</h2>
        <button onClick={listEducationHandlers.addEducation}>
          <AddIcon />
        </button>
      </div>
      {educationList.map((education) => (
        <div key={education.id} className="education">
          <Education
            education={education}
            educationHandlers={listEducationHandlers}
          />
          <button
            onClick={() => listEducationHandlers.deleteEducation(education.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      ))}
    </section>
  );
}

export default ListEducationForm;
export type { ListEducationHandlers };
