interface GeneralInformationForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

interface GeneralInfoHandlers {
  handleFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function GeneralInformation({
  generalInfo,
  generalInfoHandlers,
  isActive,
  onShow,
}: {
  generalInfo: GeneralInformationForm;
  generalInfoHandlers: GeneralInfoHandlers;
  isActive: boolean;
  onShow: () => void;
}) {
  if (!isActive) {
    return (
      <div className="container" onClick={onShow}>
        <p>
          <strong>General Information</strong>
        </p>
      </div>
    );
  }
  return (
    <div className="container">
      <label>
        First Name:{" "}
        <input
          type="text"
          value={generalInfo.firstName}
          onChange={generalInfoHandlers.handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last Name:{" "}
        <input
          type="text"
          value={generalInfo.lastName}
          onChange={generalInfoHandlers.handleLastNameChange}
        />
      </label>
      <br />
      <label>
        Phone:{" "}
        <input
          type="text"
          value={generalInfo.phone}
          onChange={generalInfoHandlers.handlePhoneChange}
        />
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          type="email"
          value={generalInfo.email}
          onChange={generalInfoHandlers.handleEmailChange}
        />
      </label>
    </div>
  );
}

export default GeneralInformation;
export type { GeneralInformationForm };
