import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  MapPin,
  ShoppingCart,
  Heart,
  FileText,
  Download,
  HelpCircle,
  LogOut,
} from "lucide-react";
import "./Profile.scss";

interface MenuItem {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  className?: string;
}

const Profile: React.FC = () => {
  const [showCurrentPassword, setShowCurrentPassword] =
    useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("Account Details");
  const [selectedCountryCode, setSelectedCountryCode] =
    useState<string>("+966");

  const menuItems: MenuItem[] = [
    { icon: User, label: "Account Details" },
    { icon: MapPin, label: "Address" },
    { icon: ShoppingCart, label: "Orders" },
    { icon: Heart, label: "Wishlist" },
    { icon: FileText, label: "Reports" },
    { icon: Download, label: "Downloads" },
    { icon: HelpCircle, label: "Support" },
  ];

  return (
    <section className="profile-page">
      <div className="profile">
        <div className="profile__container">
          <div className="profile__grid">
            {/* Sidebar */}
            <aside className="profile__sidebar">
              <div className="profile__sidebar-content">
                <h2 className="profile__title">My Account</h2>
                <nav className="profile__menu">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveSection(item.label)}
                        className={`profile__menu-item ${
                          activeSection === item.label ? "active" : ""
                        } ${item.className || ""}`}
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                  <button className="profile__menu-item logout">
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="profile__content">
              {/* Account Details */}
              {activeSection === "Account Details" && (
                <>
                  <h2 className="profile__section-title">
                    Personal Information
                  </h2>
                  <div className="profile__form">
                    {/* Name Fields */}
                    <div className="form__row">
                      <div className="form__group">
                        <label className="form__label">
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form__input" />
                      </div>
                      <div className="form__group">
                        <label className="form__label">
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form__input" />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="form__row">
                      <div className="form__group">
                        <label className="form__label">
                          Email address <span className="required">*</span>
                        </label>
                        <input type="email" className="form__input" />
                      </div>
                      <div className="form__group">
                        <label className="form__label">
                          Phone Number <span className="required">*</span>
                        </label>
                        <div className="phone__input">
                          <select
                            value={selectedCountryCode}
                            onChange={(e) =>
                              setSelectedCountryCode(e.target.value)
                            }
                            className="phone__code"
                          >
                            <option value="+966">+966</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+91">+91</option>
                          </select>
                          <input type="tel" className="phone__number" />
                        </div>
                      </div>
                    </div>

                    {/* Username and Photo */}
                    <div className="form__row">
                      <div className="form__group">
                        <label className="form__label">
                          Username <span className="required">*</span>
                        </label>
                        <input type="text" className="form__input" />
                      </div>
                      <div className="form__group">
                        <label className="form__label">Photo</label>
                        <div className="photo__upload">
                          <div className="photo__preview">
                            <User className="photo__placeholder" size={24} />
                          </div>
                          <div className="photo__actions">
                            <button className="photo__btn photo__btn--change">
                              Change
                            </button>
                            <button className="photo__btn photo__btn--remove">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Password Section */}
                    <div className="password__section">
                      <h3 className="password__title">Password change</h3>

                      <div className="password__fields">
                        <div className="password__field">
                          <label className="form__label">
                            Current password
                          </label>
                          <div className="password__input">
                            <input
                              type={showCurrentPassword ? "text" : "password"}
                              className="form__input"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowCurrentPassword(!showCurrentPassword)
                              }
                              className="password__toggle"
                            >
                              {showCurrentPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="password__field">
                          <label className="form__label">New password</label>
                          <div className="password__input">
                            <input
                              type={showNewPassword ? "text" : "password"}
                              className="form__input"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              className="password__toggle"
                            >
                              {showNewPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="password__field">
                          <label className="form__label">
                            Confirm new password
                          </label>
                          <div className="password__input">
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              className="form__input"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="password__toggle"
                            >
                              {showConfirmPassword ? (
                                <EyeOff size={20} />
                              ) : (
                                <Eye size={20} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="profile__actions">
                      <button className="btn-save">Save Change</button>
                    </div>
                  </div>
                </>
              )}

              {activeSection === "Address" && (
                <>
                  <h2 className="profile__section-title">Billing Address</h2>
                  <div className="profile__form">
                    <div className="form__group">
                      <label className="form__label">Street</label>
                      <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                      <label className="form__label">City</label>
                      <input type="text" className="form__input" />
                    </div>
                    <div className="form__group">
                      <label className="form__label">Postal Code</label>
                      <input type="text" className="form__input" />
                    </div>
                  </div>
                </>
              )}

              {activeSection === "Orders" && (
                <>
                  <h2 className="profile__section-title">My Orders</h2>
                  <p>Здесь будет список заказов</p>
                </>
              )}

              {activeSection === "Wishlist" && (
                <>
                  <h2 className="profile__section-title">My Wishlist</h2>
                  <p>Здесь будут избранные товары</p>
                </>
              )}

              {activeSection === "Reports" && (
                <>
                  <h2 className="profile__section-title">Reports</h2>
                  <p>Здесь будет аналитика и отчёты</p>
                </>
              )}

              {activeSection === "Downloads" && (
                <>
                  <h2 className="profile__section-title">Downloads</h2>
                  <p>Здесь будут доступные загрузки</p>
                </>
              )}

              {activeSection === "Support" && (
                <>
                  <h2 className="profile__section-title">Support</h2>
                  <p>Здесь будет служба поддержки / FAQ</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
