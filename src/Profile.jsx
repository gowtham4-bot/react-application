import React from "react";
import viteLogo from '/vite.svg';


const Profile = ({profile}) => {
    return (
    
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            backgroundColor:"",
            width:"400px",
            height:"400px",
            paddingTop:"10%"
        }}>
        <div style={{ border: "1px solid black", padding: "20px", maxWidth: "300px",backgroundColor:"black"}}>
            <img
                style={{
                    border: "3px solid skyblue",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginBottom: "15px",
                    justifyContent:"center",
                    backgroundColor:"blue"
                    
                }}
                src={viteLogo}
                alt="Profile"
            />
            <div style={{color:"yellow"}}>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Name: </span>
                    <span>{profile.name}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Department: </span>
                    <span>{profile.Department}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Year: </span>
                    <span>{profile.year}</span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Mobile: </span>
                    <span>{profile.mobile}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span>{profile.address}</span>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/gowtham-palanisamy-3372682a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                LinkedIn profile
                </a>
        </div>
        </div>
    );
};

export default Profile;