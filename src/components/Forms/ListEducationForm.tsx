import Education from "./Education";
import type { EducationForm, EducationHandlers } from "./Education";
import DeleteIcon from "../../assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import AddIcon from "../../assets/add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import { Fragment } from "react/jsx-runtime";

interface ListEducationHandlers extends EducationHandlers{
    addEducation: () => void,
    deleteEducation: (id: string) => void,
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
      <div className="container" onClick={onShow}>
        <p>
          <strong>Education</strong>
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <h2>Education</h2>
      <button onClick={listEducationHandlers.addEducation}>
        <AddIcon />
      </button>
      {educationList.map((education) => (
        <Fragment key={education.id}>
          <Education
            education={education}
            educationHandlers={listEducationHandlers}
          />
          <button onClick={() => listEducationHandlers.deleteEducation(education.id)}>
            <DeleteIcon />
          </button>
        </Fragment>
      ))}
    </div>
  );
}

export default ListEducationForm;
