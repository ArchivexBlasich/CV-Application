import Education from "./Education";
import type { EducationForm, EducationHandlers } from "./Education";

function ListEducationForm({
  educationList,
  educationHandlers,
  isActive,
  onShow,
}: {
  educationList: EducationForm[];
  educationHandlers: EducationHandlers;
  isActive: boolean;
  onShow: () => void;
}) {
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
      {educationList.map((education) => (
          <Education
            key={education.id}
            education={education}
            educationHandlers={educationHandlers}
          />
      ))}
    </div>
  );
}

export default ListEducationForm;
