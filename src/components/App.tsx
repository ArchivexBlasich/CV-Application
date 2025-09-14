import { useState } from "react";
import { GeneralInformation, ListEducation, ListWork } from "./Forms";
import type { GeneralInformationForm, EducationForm, WorkForm } from "./Forms";
import type { ListEducationHandlers, ListWorkHandlers } from "./Forms";
import CvVision from "./CvVision";
import html2pdf from "html2pdf.js";
import "../styles/App.css";
import "../styles/GeneralInformation.css";
import "../styles/ListForms.css";
import PdfIcon from "../assets/picture_as_pdf_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg?react";

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

  function handDownloadPdf() {
    const element = document.querySelector(".cv-view");
    if (!element) return;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${generalInfo.firstName}_${generalInfo.lastName}_cv.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4", // This tells the library to use a standard A4 page
        orientation: "portrait",
      },
    };

    html2pdf()
      .from(element as HTMLElement)
      .set(opt)
      .save();
  }

  return (
    <>
      <main className="container">
        <header>
          <div className="logo">CV</div>
          <div>
            <h1>CV Builder</h1>
            <p className="lead">Create a professional CV.</p>
          </div>
          <button onClick={handDownloadPdf}>
            <PdfIcon />
          </button>
        </header>
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

      <CvVision
        generalInfo={generalInfo}
        educationList={educationList}
        workList={workList}
      />
    </>
  );
}

export default App;
