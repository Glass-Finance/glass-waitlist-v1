import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/index';
import MembersHome from './pages/membersHome';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import AcceptableUsePolicy from './pages/legal/AcceptableUsePolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
// import Waitlist from './pages/Waitlist';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Organizations Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Members Landing Page */}
        <Route path="/members" element={<MembersHome />} />

        {/* Legal pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

        {/* Waitlist Signup Page */}
        {/* <Route path="/waitlist" element={<Waitlist />} /> */}

        {/* Contact Page */}
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;


