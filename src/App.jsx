import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from './components/LoadingScreen';

const Home = lazy(() => import('./pages/index'));
const MembersHome = lazy(() => import('./pages/membersHome'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const AcceptableUsePolicy = lazy(() => import('./pages/legal/AcceptableUsePolicy'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));
// import Waitlist from './pages/Waitlist';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default App;
