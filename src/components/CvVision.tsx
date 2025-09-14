import type { GeneralInformationForm, EducationForm, WorkForm } from "./Forms";

type CvVisionParam = {
  generalInfo: GeneralInformationForm;
  educationList: EducationForm[];
  workList: WorkForm[];
};

function CvVision({ generalInfo, educationList, workList }: CvVisionParam) {
  return (
    <div className="container cv-container">
      <section className="cv-view">
        <header className="cv-header">
          <h1 className="cv-name">
            {[generalInfo.firstName, generalInfo.lastName].join(" ")}
          </h1>
          <p className="cv-contact">
            {generalInfo.email} · {generalInfo.phone}
          </p>
        </header>

        <section className="cv-section">
          <h2>Education</h2>
          <ul>
            {educationList.map((education) => (
              <li key={education.id} className="cv-item">
                <h3>{education.institution}</h3>
                <p className="cv-meta">
                  {education.degree} — {education.year}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2>Work Experience</h2>
          <ul>
            {workList.map((work) => (
              <li key={work.id} className="cv-item">
                <h3>
                  {work.positionTitle} — {work.company}
                </h3>
                <p className="cv-meta">{work.dates}</p>
                <p>{work.mainResponsibilities}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default CvVision;
