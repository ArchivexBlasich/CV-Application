import Input from "../Input";

interface EducationForm {
  institution: string;
  year: string;
  degree: string;
  id: string;
}

interface EducationHandlers {
  handleInstitutionChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleYearChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDegreeChange: (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function Education({
  education,
  educationHandlers,
}: {
  education: EducationForm;
  educationHandlers: EducationHandlers;
}) {
  return (
    <>
      <div>
        <Input
          title="Institution"
          type="text"
          value={education.institution}
          id={education.id}
          onChange={(e) =>
            educationHandlers.handleInstitutionChange(education.id, e)
          }
        />
      </div>
      <div>
        <Input
          title="Year"
          type="text"
          value={education.year}
          id={education.id}
          onChange={(e) => educationHandlers.handleYearChange(education.id, e)}
        />
      </div>
      <div>
        <Input
          title="Degree"
          type="text"
          value={education.degree}
          id={education.id}
          onChange={(e) =>
            educationHandlers.handleDegreeChange(education.id, e)
          }
        />
      </div>
    </>
  );
}

export default Education;
export type { EducationForm, EducationHandlers };
