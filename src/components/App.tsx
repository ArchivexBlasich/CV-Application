import { Fragment, useState } from "react";
import { GeneralInformation } from "./Forms";
import { ListEducation } from "./Forms";
import type { EducationForm, GeneralInformationForm } from "./Forms";

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
  {
    institution: "National University of Buenos Aires",
    year: "2019 - 2023",
    degree: "Economy",
    id: crypto.randomUUID(),
  },
];

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationList, setEducationList] = useState(initialEducation);
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

  const educationHandlers = {
    handleInstitutionChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) =>
      {
        setEducationList(educationList.map(education => {
            return (education.id === id) 
            ? {...education, institution:e.target.value}
            : {...education};
        }))
    },
    handleYearChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) =>
      {
        setEducationList(educationList.map(education => {
            return (education.id === id) 
            ? {...education, year: e.target.value }
            : {...education};
        }))
    },
    handleDegreeChange: (id:string, e: React.ChangeEvent<HTMLInputElement>) =>
      {
        setEducationList(educationList.map(education => {
            return (education.id === id) 
            ? {...education, degree: e.target.value  }
            : {...education};
        }))
    },
  };

  return (
    <>
      <GeneralInformation
        generalInfo={generalInfo}
        generalInfoHandlers={generalInfoHandlers}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      />

      <ListEducation
        educationList={educationList}
        educationHandlers={educationHandlers}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      />

      <div id="classView" className="container">
        <div className="generalInfo">
          <h1>{[generalInfo.firstName, generalInfo.lastName].join(" ")}</h1>
          <h3>{generalInfo.email}</h3>
          <h5>{generalInfo.phone}</h5>
        </div>
        <br />
        <div className="generalInfo">
          {educationList.map((education) => (
            < Fragment key={education.id}>
              <h1>{education.institution}</h1>
              <h3>{education.degree}</h3>
              <h5>{education.year}</h5>
            </ Fragment >
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
