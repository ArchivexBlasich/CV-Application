interface EducationForm {
  institution: string;
  year: string;
  degree: string;
  id: string;
}

interface EducationHandlers {
  handleInstitutionChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDegreeChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Education({
  education,
  educationHandlers,
}: {
  education: EducationForm;
  educationHandlers: EducationHandlers;
}) {
  return (
    <div className="education">
      <label>
        Institution:{" "}
        <input
          type="text"
          value={education.institution}
          onChange={e => educationHandlers.handleInstitutionChange(education.id, e)}
        />
      </label>
      <br />
      <label>
        Year:{" "}
        <input
          type="text"
          value={education.year}
          onChange={e => educationHandlers.handleYearChange(education.id, e)}
        />
      </label>
      <br />
      <label>
        Degree:{" "}
        <input
          type="text"
          value={education.degree}
          onChange={e => educationHandlers.handleDegreeChange(education.id, e)}
        />
      </label>
    </div>
  );
}

export default Education;
export type { EducationForm, EducationHandlers };
