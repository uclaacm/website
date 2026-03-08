import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

function PrivacyPolicy() {
  return (
    <Layout>
      <NextSeo
        title="Privacy Policy | ACM at UCLA"
        description="Privacy Policy for the ACM at UCLA website."
      />
      <div className="content-container-tight">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: March 2026</em></p>

        <h2>1. Introduction</h2>
        <p>
          ACM at UCLA (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
          This Privacy Policy explains what information we collect when you visit uclaacm.com
          and how we use it.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We do not directly collect personal information through this website. However,
          third-party services we use (such as Google Analytics, Netlify, and embedded forms)
          may collect usage data such as IP addresses, browser type, and pages visited.
        </p>

        <h2>3. Mailing List</h2>
        <p>
          If you subscribe to our mailing list, your email address is stored. We use it solely to send ACM at UCLA announcements and newsletters.
          You may unsubscribe at any time via the link in any email we send.
        </p>

        <h2>4. Cookies</h2>
        <p>
          This website may use cookies or similar technologies through third-party services
          for analytics and functionality purposes. You can disable cookies in your browser
          settings, though some features may not function properly.
        </p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell your personal information. We do not share your information with
          third parties except as required by law or as necessary to operate our services
          (e.g., hosting providers).
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. The &quot;last updated&quot; date at the
          top of this page will reflect any changes.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:acm@ucla.edu">acm@ucla.edu</a>.
        </p>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
