import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/profile.css";
import api from "../api/axios";

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [previewImage, setPreviewImage] = useState("");

  const [profile, setProfile] = useState({
    fullName: "",
    email: localStorage.getItem("email") || "",
    gender: "male",
    address: "",
    universityName: "",
    city: "",
    guardianName: "",
    guardianPhoneNumber: "",
    personalMobileNumber: "",
    profileUrl: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await api.get("/profile");

      const data = res.data;

      setProfile({
        fullName: data.fullName ?? "",
        email: localStorage.getItem("email") || "",
        gender: data.gender ?? "male",
        address: data.address ?? "",
        universityName: data.universityName ?? "",
        city: data.city ?? "",
        guardianName: data.guardianName ?? "",
        guardianPhoneNumber: data.guardianPhoneNumber ?? "",
        personalMobileNumber: data.personalMobileNumber ?? "",
        profileUrl: data.profileUrl ?? "",
      });

      if (data.profileUrl) {
        setPreviewImage(data.profileUrl);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      if (selectedImage) {
        formData.append("profileImage", selectedImage);
      }

      formData.append("fullName", profile.fullName);
      formData.append("gender", profile.gender);
      formData.append("address", profile.address);
      formData.append("universityName", profile.universityName);
      formData.append("city", profile.city);
      formData.append("guardianName", profile.guardianName);
      formData.append(
        "guardianPhoneNumber",
        profile.guardianPhoneNumber
      );
      formData.append(
        "personalMobileNumber",
        profile.personalMobileNumber
      );

      const res = await api.patch("/profile", formData);

      const data = res.data;

      setProfile({
        fullName: data.fullName ?? "",
        email: data.email ?? "",
        gender: data.gender ?? "male",
        address: data.address ?? "",
        universityName: data.universityName ?? "",
        city: data.city ?? "",
        guardianName: data.guardianName ?? "",
        guardianPhoneNumber: data.guardianPhoneNumber ?? "",
        personalMobileNumber: data.personalMobileNumber ?? "",
        profileUrl: data.profileUrl ?? "",
      });

      if (data.profileUrl) {
        setPreviewImage(data.profileUrl);
      }

      alert("Profile Updated Successfully");
    } catch (err) {
      console.log(err.response?.data);
      alert(
        err.response?.data?.message ||
          "Failed to update profile."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="profile-container">

        <h1>My Profile</h1>

        <form
          className="profile-card"
          onSubmit={handleSubmit}
        >

          <div className="profile-avatar">

            {previewImage ? (

              <img
                src={previewImage}
                alt="Profile"
                className="profile-img"
              />

            ) : (

              <span>

                {profile.fullName
                  ? profile.fullName
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()
                  : "US"}

              </span>

            )}

          </div>

          <div className="profile-grid">

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email (Read Only)</label>

              <input
                type="email"
                value={localStorage.getItem("email") || ""}
                readOnly
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>

                        <div className="form-group">
              <label>Address</label>

              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>University Name</label>

              <input
                type="text"
                name="universityName"
                value={profile.universityName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Guardian Name</label>

              <input
                type="text"
                name="guardianName"
                value={profile.guardianName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Guardian Phone</label>

              <input
                type="tel"
                name="guardianPhoneNumber"
                value={profile.guardianPhoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Personal Mobile</label>

              <input
                type="tel"
                name="personalMobileNumber"
                value={profile.personalMobileNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>
                Profile Image (JPEG/PNG, max 2MB)
              </label>

              <input
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageUpload}
              />
            </div>

          </div>

          <div className="save-section">

            <button
              type="submit"
              className="save-btn"
            >
              Save Profile
            </button>

          </div>

        </form>

      </div>

    </>
  );
}

export default Profile;