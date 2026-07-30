import api from "./axios";

export const getProfile = async () => {
    const res = await api.get("/profile");
    return res.data;
};

export const updateProfile = async (profile) => {
    const res = await api.put("/profile", profile);
    return res.data;
};

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await api.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return res.data;
};