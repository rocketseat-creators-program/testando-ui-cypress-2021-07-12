// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import avatar from "assets/img/faces/ada.jpeg";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import React, { useState } from "react";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState({});
  const [githubProfile, setGithubProfile] = useState("frontfabi");
  const getFromGit = (profile) => {
    const apiUrl = `https://api.github.com/users/${profile}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData({
          name: data.name,
          username: data.login,
          avatar: data.avatar_url,
          description: data.bio,
        });
      });
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (e) =>
                        setFormData({ ...formData, username: e.target.value }),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="Job Title"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (e) =>
                        setFormData({ ...formData, jobTitle: e.target.value }),
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Full Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      onChange: (e) =>
                        setFormData({ ...formData, name: e.target.value }),
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Description"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      onChange: (e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        }),
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => setUserData(formData)}>
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={userData.avatar || avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>
                {userData.jobTitle || "CEO / CO-FOUNDER"}
              </h6>
              <h4 className={classes.cardTitle}>
                {userData.name || "Ada Lovelace"} (@
                {userData.username || "firstDev"})
              </h4>
              <p className={classes.description}>
                {userData.description ||
                  `Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...`}
              </p>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="GitHub Profile"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (e) => setGithubProfile(e.target.value),
                    }}
                  />
                </GridItem>
                <Button
                  color="primary"
                  onClick={() => getFromGit(githubProfile)}
                >
                  Get from GitHub
                </Button>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
