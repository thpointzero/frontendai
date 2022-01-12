import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from 'styled-components';
import Login from "./components/login.component";
import Register from "./components/register.component";
import Forgot from "./components/forgotpassword.component"
import Home from "./components/home.component";
import Dude from "./components/dude.component";
import Dude2 from "./components/dude2.component";
import Verifiyemail from "./components/verifiyemail.component";
import CreateWalletDesktop from "./components/CreateWalletDesktop";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import CreateAccountDesktop1 from "./components/CreateAccountDesktop1";
import Connectwallet from "./components/connectwallet";
import Activites from "./components/activites";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from './helpers/history';

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
        <div>
          <nav className="navbar navbar-expand">
            <Link to={"/dude2"} className="navbar-brand">
            <img src="/th0.png" alt="Logo" />
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/dude" component={Dude} />
              <Route exact path="/dude2" component={Dude2} />
              <Route exact path="/dude3" component={CreateAccountDesktop1} />
              <Route exact path="/dude4" component={CreateWalletDesktop} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgot" component={Forgot} />
              <Route exact path="/verifiyemail" component={Verifiyemail} />
              <Route exact path="/connectwallet" component={Connectwallet} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/activity" component={Activites} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
              <Route path="/tutorial" component={Tutorial} />
              <Route exact path="/tutorials" component={TutorialsList} />
            </Switch>
          </div>

          {/* <AuthVerify logOut={this.logOut}/> */}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
const group49Data = {
  src: "/img/5526619-emojis-transparent-png-party-emoji-png-transparent-png-e-1@2x.png",
};

const logIntoYourAccountforgotPasswordDesData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  forgotYourPassword: "Forgot your Password?",
  pleaseEnterYourRe: <>Please enter your registered email, we<br />will send you the email to reset your password</>,
  email: "Email",
  enterYourEmail: "Enter your email",
  resetMyPassword: "Reset my password",
  earnAmazingRewards: <>Earn amazing<br />rewards.</>,
  participateInActiv: <>Participate in activities to earn things<br />such as NFT’s, Badges or mentorships</>,
  group49Props: group49Data,
};

const group492Data = {
  src: "/img/5526619-emojis-transparent-png-party-emoji-png-transparent-png-e-1@2x.png",
};

const logIntoYourAccountDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  welcomeBackLogIntoYourAccount: <>Welcome Back!<br />Log into your Account</>,
  email: "Email",
  enterYourEmail: "Enter your email",
  password: "Password",
  enterAPassword: "Enter a password",
  forgotPassword: "Forgot Password?",
  logIn: "Log In",
  spanText: "Dont have an account yet? ",
  spanText2: "Create one!",
  earnAmazingRewards: <>Earn amazing<br />rewards.</>,
  participateInActiv: <>Participate in activities to earn things<br />such as NFT’s, Badges or mentorships</>,
  group49Props: group492Data,
};

const group352Data = {
  className: "group-36",
};

const group353Data = {
  className: "group-37",
};

const group354Data = {
  className: "group-38",
};

const rewardDashboardDesktop2Data = {
  yourDashboard: "Your Dashboard",
  rewards: "Rewards",
  yourBadges: "Your Badges",
  activities: "Activities",
  badges: "Badges",
  spanText: "Wanna earn more? ",
  spanText2: "Do some activities!",
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  badge1: "/img/badge-1-8@2x.png",
  hospital1: "/img/hospital-1@2x.png",
  hackerBadge: "Hacker Badge",
  thisIsASpecialyC: <>This is a specialy collectors NFT that you<br />got for winning the Marine-Tech Hackathon</>,
  group35Props: group352Data,
  group352Props: group353Data,
  group353Props: group354Data,
};

const group493Data = {
  src: "/img/5526619-emojis-transparent-png-party-emoji-png-transparent-png-e-1@2x.png",
};

const createAccountDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  createAnAccountToGetStarted: <>Create an Account<br />to get started</>,
  place: "Name",
  enterYourName: "Enter your name",
  email: "Email",
  enterYourEmail: "Enter your email",
  password: "Password",
  enterAPassword: "Enter a password",
  createAccount: "Create Account",
  spanText: "Already have an account? ",
  spanText2: "Log in!",
  earnAmazingRewards: <>Earn amazing<br />rewards.</>,
  participateInActiv: <>Participate in activities to earn things<br />such as NFT’s, Badges or mentorships</>,
  group49Props: group493Data,
};

const group212Data = {
  className: "group-21-2",
};

const style45 ={
  backgroundColor: "blue"
};

const rewardDashboardLookingAtARewardDeskData = {
  yourDashboard: "Your Dashboard",
  rewards: "Rewards",
  yourRewards: "Your Rewards",
  activities: "Activities",
  badges: "Badges",
  collectorsNft: "Collectors NFT",
  collectorsNft2: "Collectors NFT",
  collectorsNft3: "Collectors NFT",
  clickToView: "Click to view",
  clickToView2: "Click to view",
  clickToView3: "Click to view",
  gift2: "/img/gift-2@2x.png",
  gift3: "/img/gift-2@2x.png",
  gift4: "/img/gift-2@2x.png",
  spanText: "Wanna earn more? ",
  spanText2: "Do some activities!",
  collectorsNft4: "Collectors NFT",
  clickToView4: "Click to view",
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  gift1: "/img/gift-2@2x.png",
  gift5: "/img/gift-5@2x.png",
  hospital1: "/img/hospital-1@2x.png",
  collectorsNft5: "Collectors NFT",
  thisIsASpecialyC: <>This is a specialy collectors NFT that you<br />got for winning the Marine-Tech Hackathon</>,
  group21Props: group212Data,
};

const group494Data = {
  src: "/img/5526619-emojis-transparent-png-party-emoji-png-transparent-png-e@2x.png",
};

const logIntoYourAccountforgotPasswordDes3Data = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  emailWasSent: "Email was sent",
  text12: <>Please follow the instructions that we<br />sent to your email. If you didnt get them<br />resend the instructions.</>,
  resendInstructions: "Resend instructions",
  text10: <>Earn amazing<br />rewards.</>,
  text11: <>Participate in activities to earn things<br />such as NFT’s, Badges or mentorships</>,
  group49Props: group494Data,
};

const rewardDashboardDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  rewards: "Rewards",
  badges: "Badges",
  yourRewards: "Your Rewards",
  gift1: "/img/gift-2@2x.png",
  collectorsNft: "Collectors NFT",
  clickToView: "Click to view",
  spanText: "Wanna earn more? ",
  spanText2: "Do some activities!",
  gift2: "/img/gift-2@2x.png",
  collectorsNft2: "Collectors NFT",
  clickToView2: "Click to view",
  yourDashboard: "Your Dashboard",
  gift3: "/img/gift-2@2x.png",
  collectorsNft3: "Collectors NFT",
  clickToView3: "Click to view",
  activities: "Activities",
  logout: "Logout",
  logout1: "/img/logout-1@2x.png",
  gift4: "/img/gift-2@2x.png",
  collectorsNft4: "Collectors NFT",
  clickToView4: "Click to view",
};

const rewardDashboardDesktop3Data = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  yourDashboard: "Your Dashboard",
  activities: "Activities",
  logout: "Logout",
  logout1: "/img/logout-1@2x.png",
  rewards: "Rewards",
  badges: "Badges",
  yourBadges: "Your Badges",
  badge1: "/img/badge-1@2x.png",
  hackerBadge: "Hacker Badge",
  clickToView: "Click to view",
  badge12: "/img/badge-1@2x.png",
  hackerBadge2: "Hacker Badge",
  clickToView2: "Click to view",
  badge13: "/img/badge-1@2x.png",
  hackerBadge3: "Hacker Badge",
  clickToView3: "Click to view",
  badge14: "/img/badge-1@2x.png",
  hackerBadge4: "Hacker Badge",
  clickToView4: "Click to view",
  spanText: "Wanna earn more? ",
  spanText2: "Do some activities!",
};

const tH0ActivitiesDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  yourDashboard: "Your Dashboard",
  activities: "Activities",
  logout: "Logout",
  logout1: "/img/logout-1@2x.png",
  applyForSomeActiv: <>Apply for some activities and <br />earn your Blockchain rewards!</>,
  hackathons: "Hackathons",
  hackathonsAreTheN: <>Hackathons are the nuclei of our business! <br />We host 16x industry led Hackathons <br />per annum. We also share our knowledge <br />and experience by hosting client <br />bespoke and white labelled Hackathon’s.</>,
  view: "View",
  icons051: "/img/icons-05-1@2x.png",
  mentorship: "Mentorship",
  weUtiliseOurNetwo: <>We utilise our network and bring experts to<br />the table for conceptual start up projects.<br />Winning and handpicked teams from our<br />Hackathon’s are introduced to our 8-12 week<br />mentoring programme.</>,
  view2: "View",
  icons071: "/img/icons-07-1@2x.png",
  skillsExchange: "Skills Exchange",
  everyoneHasASkill: <>Everyone has a skill to offer! Use your own <br />expertise to exchange knowledge with<br />others. (i.e. I will give you 1 day of my time,<br />for you to give me one day of yours) &amp; earn<br />reward tokens too!</>,
  view3: "View",
  icons091: "/img/icons-09-1@2x.png",
  incubator: "Incubator",
  weReachOutToOur: <>We reach out to our network who wish to<br />invest and/or contribute in conceptual<br />start ups. (approx £5-25k). This offering is<br />for those who have completed our Mentorship<br />Programme.</>,
  view4: "View",
  icons061: "/img/icons-06-1@2x.png",
  image: "Image",
  partnerWithUs: "Partner with us",
  hackathonsAreTheN2: <>Hackathons are the nuclei<br />of our business! We host 16x industry<br />led Hackathons per annum. We also<br />share</>,
  view5: "View",
  businessZone: "Business Zone",
  participantsAreOur: <>Participants are our clients, our clients are<br />our participants! We encourage <br />startup-to-startup and B2B to ‘trade’ with<br />each other via; webinars, round tables,<br />partnership and/or contract opportunities.</>,
  view6: "View",
  icons111: "/img/icons-11-1@2x.png",
  image2: "Image",
  referral: "Referral",
  hackathonsAreTheN3: <>Hackathons are the nuclei<br />of our business! We host 16x industry<br />led Hackathons per annum. We also<br />share</>,
  view7: "View",
  hiringZone: "Hiring Zone",
  freeVacancyAndPor: <>Free vacancy and portfolio upload for our <br />verified community members. Bespoke,<br />Onboarding and Recruitment Process<br />Management options available via TH.O and<br />white labelled Hackathons.</>,
  view8: "View",
  icons101: "/img/icons-10-1@2x.png",
  image3: "Image",
  shareOnSocial: "Share on Social",
  hackathonsAreTheN4: <>Hackathons are the nuclei<br />of our business! We host 16x industry<br />led Hackathons per annum. We also<br />share</>,
  view9: "View",
};

const createWalletDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  number: "1",
  setYourPassword: "Set your password",
  password: "Password",
  chooseAPassword: "Choose a password",
  repeatPassword: "Repeat Password",
  repeatYourPassword: "Repeat your Password",
  xcontinue: "Continue",
  spanText: "Already have a wallet? ",
  spanText2: "Add it!",
};

const addExistingWalletDesktopData = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  number: "1",
  enterWalletNameAddress: "Enter wallet name & address",
  walletName: "Wallet name",
  enterYourWalletName: "Enter your wallet name",
  walletAddress: "Wallet address",
  enterYourWalletAddress: "Enter Your wallet address",
  addYourWallet: "Add your wallet",
  spanText: "Dont have a wallet? ",
  spanText2: "Create one!",
};

const createWalletPhraseDesktop22Data = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  text45: <>Back up the text below on paper and <br />keep it somewhere safe</>,
  previous: "previous",
  finish: "Finish",
  number: "2",
  text46: "Back-up your Security Key",
  place: "ham",
  color: "chocolate",
  tech: "tech",
  jolly: "jolly",
  gun: "gun",
  world: "world",
  crops: "crops",
  jam: "jam",
  soft: "soft",
  game: "game",
  xsuper: "super",
  place2: "box",
  office: "office",
  information11: "/img/information--1--1@2x.png",
  text47: <>This will be your necessary<br />security key for your wallet.<br />Do not lose it, because it <br />cannot be retrieved</>,
};

const createWalletPhraseDesktop2Data = {
  participant_Headshot2RemovebgPrevie: "/img/participant-headshot-2-removebg-preview-1@2x.png",
  previous: "previous",
  number: "2",
  backUpYourSecurityKey: "Back-up your Security Key",
  informationOutline11: "/img/information-outline--1--1@2x.png",
  backUpTheTextBel: <>Back up the text below on paper and <br />keep it somewhere safe</>,
  place: "ham",
  color: "chocolate",
  place2: "box",
  office: "office",
  tech: "tech",
  jam: "jam",
  soft: "soft",
  game: "game",
  xsuper: "super",
  jolly: "jolly",
  gun: "gun",
  world: "world",
  crops: "crops",
  finish: "Finish",
};


