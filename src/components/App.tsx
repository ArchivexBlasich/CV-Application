import { useState } from "react";
import { GeneralInformation, ListEducation, ListWork } from "./Forms";
import type { GeneralInformationForm, EducationForm, WorkForm } from "./Forms";
import type { ListEducationHandlers, ListWorkHandlers } from "./Forms";
import "../styles/App.css";
import "../styles/GeneralInformation.css";
import "../styles/ListForms.css";

const initialGeneralInfo: GeneralInformationForm = {
  firstName: "Fabricio",
  lastName: "Blasich",
  phone: "2966223216",
  email: "fabricioblasich@mail.com",
};

const initialEducation: EducationForm[] = [
  {
    institution: "National University of Tucuman",
    year: "2021 - 2026",
    degree: "Computer Engineer",
    id: crypto.randomUUID(),
  },
];

const initialWork: WorkForm[] = [
  {
    company: "",
    dates: "",
    positionTitle: "",
    mainResponsibilities: "",
    id: crypto.randomUUID(),
  },
];

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationList, setEducationList] = useState(initialEducation);
  const [workList, setWorkList] = useState(initialWork);
  const [activeIndex, setActiveIndex] = useState(0);

  const generalInfoHandlers = {
    handleFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setGeneralInfo({ ...generalInfo, firstName: e.target.value }),
    handleLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setGeneralInfo({ ...generalInfo, lastName: e.target.value }),
    handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setGeneralInfo({ ...generalInfo, phone: e.target.value }),
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setGeneralInfo({ ...generalInfo, email: e.target.value }),
  };

  const educationHandlers: ListEducationHandlers = {
    handleInstitutionChange: (
      id: string,
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEducationList(
        educationList.map((education) => {
          return education.id === id
            ? { ...education, institution: e.target.value }
            : { ...education };
        })
      );
    },
    handleYearChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
      setEducationList(
        educationList.map((education) => {
          return education.id === id
            ? { ...education, year: e.target.value }
            : { ...education };
        })
      );
    },
    handleDegreeChange: (
      id: string,
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setEducationList(
        educationList.map((education) => {
          return education.id === id
            ? { ...education, degree: e.target.value }
            : { ...education };
        })
      );
    },
    addEducation: () => {
      setEducationList([
        ...educationList,
        {
          institution: "",
          year: "",
          degree: "",
          id: crypto.randomUUID(),
        },
      ]);
    },
    deleteEducation: (id: string) => {
      setEducationList(
        educationList.filter((education) => education.id !== id)
      );
    },
  };

  const workHandlers: ListWorkHandlers = {
    handleCompanyChange: (
      id: string,
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setWorkList(
        workList.map((work) => {
          return work.id === id
            ? { ...work, company: e.target.value }
            : { ...work };
        })
      );
    },
    handleDatesChange: (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
      setWorkList(
        workList.map((work) => {
          return work.id === id
            ? { ...work, dates: e.target.value }
            : { ...work };
        })
      );
    },
    handlePositionTitleChange: (
      id: string,
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setWorkList(
        workList.map((work) => {
          return work.id === id
            ? { ...work, positionTitle: e.target.value }
            : { ...work };
        })
      );
    },
    handleMainResponsibilitiesChange: (
      id: string,
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setWorkList(
        workList.map((work) => {
          return work.id === id
            ? { ...work, mainResponsibilities: e.target.value }
            : { ...work };
        })
      );
    },
    addWork: () => {
      setWorkList([
        ...workList,
        {
          company: "",
          dates: "",
          positionTitle: "",
          mainResponsibilities: "",
          id: crypto.randomUUID(),
        },
      ]);
    },
    deleteWork: (id: string) => {
      setWorkList(workList.filter((work) => work.id !== id));
    },
  };

  return (
    <>
      <main className="container">
        <div className="cv-edition">
          <GeneralInformation
            generalInfo={generalInfo}
            generalInfoHandlers={generalInfoHandlers}
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
          />
          <ListEducation
            educationList={educationList}
            listEducationHandlers={educationHandlers}
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
          />
          <ListWork
            workList={workList}
            listWorkHandlers={workHandlers}
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
          />
        </div>
      </main>

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
    </>
  );
}

export default App;
