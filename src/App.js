// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contactus';
import Events from './components/Events';
import Departments from './components/Departments';
import Projects from './components/Projects';
import ProjectT from './components/Teams/Projects_Team';
import Techt from './components/Teams/Technical_Team';
import AdminT from './components/Teams/Admin_Team';
import ResearchT from './components/Teams/Research_Team';
import DesignT from './components/Teams/Design_Team';
import DocT from './components/Teams/Documentation_Team';
import SocialsT from './components/Teams/Socials_Team';
import MarketingT from './components/Teams/Marketing_Team';
import OutreachT from './components/Teams/Outreach_Team';
import EventsT from './components/Teams/Events_Team';
import StudyBuddy from './components/Project_Details/StudyBuddy';
import HairStyleRecommendation from './components/Project_Details/HairStyleRecommendation';
import HandCricket from './components/Project_Details/HandCricket';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/project-team" element={<ProjectT />} />
        <Route path="/admin-team" element={<AdminT />} />
        <Route path="/technical-team" element={<Techt />} />
        <Route path="/research-team" element={<ResearchT />} />
        <Route path="/design-team" element={<DesignT />} />
        <Route path="/documentation-team" element={<DocT />} />
        <Route path="/social-media-team" element={<SocialsT />} />
        <Route path="/marketing-team" element={<MarketingT />} />
        <Route path="/outreach-pr-team" element={<OutreachT />} />
        <Route path="/events-mgt-team" element={<EventsT />} />
        <Route path="/project1" element={<HairStyleRecommendation />} />
        <Route path="/project2" element={<HandCricket />} />
        <Route path="/project3" element={<StudyBuddy />} />
      </Routes>
    </Router>
  );
};

export default App;
