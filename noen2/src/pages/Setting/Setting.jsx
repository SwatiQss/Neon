import React, { useState } from "react";
import "../../styles/settings.scss"

const Settings= () => {
  const [settings, setSettings] = useState({
    sharePersonalInfo: false,
    shareWithOperators: false,
    notifications: {
      emails: true,
      newsletters: true,
      personalized: false,
    },
    language: "English",
  });

  const handleToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleNotificationToggle = (field) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: !prev.notifications[field],
      },
    }));
  };

  const handleLanguageChange = (language) => {
    setSettings((prev) => ({
      ...prev,
      language,
    }));
  };

  return (
    <div className="settings">
     <div className="settings-top">
     <h1>Good morning Charlie!</h1>
     <div className="information">You can change the settings for your personal data and other information.</div>
     </div>
     <div className="heighter">
     </div>
      <div className="section">
        <div className="heading-section">Personal and Account Information</div>
        <div className="para-toggle">
        <div className="para-section">Would you like to share your personal information with us to know you better?</div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.sharePersonalInfo}
            onChange={() => handleToggle("sharePersonalInfo")}
          />
          <span className="slider"></span>
        </label>

        </div>
       
      </div>
      <hr className='divider'/>
      <div className="section">
        <div className="heading-section">Consent for sharing information with operators</div>
        <div className="para-toggle">
        <div className="para-section">Would you like to share your personal information with the operator to serve you better?</div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.shareWithOperators}
            onChange={() => handleToggle("shareWithOperators")}
          />
          <span className="slider"></span>
        </label>
        </div>
        
      </div>
      <hr className='divider'/>
      <div className="section">
        <div className="heading-section">Manage your data</div>
        
        <div className="para-toggle">
        <div className="para-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.shareWithOperators}
            onChange={() => handleToggle("shareWithOperators")}
          />
          <span className="slider"></span>
        </label>
        </div>
      </div>
      <hr className='divider'/>
      <div className="section">
        <div className="heading-section">Password and Security</div>
        
        <div className="para-toggle">
        <div className="para-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.shareWithOperators}
            onChange={() => handleToggle("shareWithOperators")}
          />
          <span className="slider"></span>
        </label>
        </div>
      </div>
      <hr className='divider'/>
      <div className="section">
        <div className="heading-section">Notifications</div>
        <div className="para-section">Which type of notifications would you like to receive?</div>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.notifications.emails}
            onChange={() => handleNotificationToggle("emails")}
          />
          <span className="slider"></span>
          Emails
        </label>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.notifications.newsletters}
            onChange={() => handleNotificationToggle("newsletters")}
          />
          <span className="slider"></span>
          Newsletters
        </label>
        <label className="toggle">
          <input
            type="checkbox"
            checked={settings.notifications.personalized}
            onChange={() => handleNotificationToggle("personalized")}
          />
          <span className="slider"></span>
          Personalized notifications
        </label>
      </div>
      <hr className='divider'/>
      <div className="section">
        <div className="heading-section">Language</div>
        <div className="para-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</div>
        <div className="radio-group">
          {["English", "French", "Arabic"].map((lang) => (
            <label key={lang} className="radio">
              <input
                type="radio"
                name="language"
                value={lang}
                checked={settings.language === lang}
                onChange={() => handleLanguageChange(lang)}
              />
              {lang}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
