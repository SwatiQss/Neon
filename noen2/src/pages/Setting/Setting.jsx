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
     <p>You can change the settings for your personal data and other information.</p>
     </div>

      <div className="section">
        <h2>Personal and Account Information</h2>
        <div className="para-toggle">
        <p>Would you like to share your personal information with us to know you better?</p>
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

      <div className="section">
        <h2>Consent for sharing information with operators</h2>
        <div className="para-toggle">
        <p>Would you like to share your personal information with the operator to serve you better?</p>
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

      <div className="section">
        <h2>Manage your data</h2>
        
        <div className="para-toggle">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</p>
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

      <div className="section">
        <h2>Password and Security</h2>
        
        <div className="para-toggle">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</p>
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

      <div className="section">
        <h2>Notifications</h2>
        <p>Which type of notifications would you like to receive?</p>
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

      <div className="section">
        <h2>Language</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod?</p>
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
