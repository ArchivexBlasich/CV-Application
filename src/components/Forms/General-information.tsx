import ArrowDown from "../../assets/keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg?react";
import TextInput from "../Input";

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
      <section className="general-information close-card" onClick={onShow}>
        <p>
          <strong>General Information</strong>
        </p>
        <ArrowDown />
      </section>
    );
  }
  return (
    <section className="general-information card">
      <h2>General Information</h2>
      <TextInput
        title="First Name"
        type="text"
        value={generalInfo.firstName}
        id="First Name"
        onChange={generalInfoHandlers.handleFirstNameChange}
      />
      <br />
      <TextInput
        title="Last Name"
        type="text"
        value={generalInfo.lastName}
        id="Last Name"
        onChange={generalInfoHandlers.handleLastNameChange}
      />
      <br />
      <TextInput
        title="Phone"
        type="text"
        value={generalInfo.phone}
        id="Phone"
        onChange={generalInfoHandlers.handlePhoneChange}
      />
      <br />
      <TextInput
        title="Email"
        type="email"
        value={generalInfo.email}
        id="Email"
        onChange={generalInfoHandlers.handleEmailChange}
      />
    </section>
  );
}

export default GeneralInformation;
export type { GeneralInformationForm };
