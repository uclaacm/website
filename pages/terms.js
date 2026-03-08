import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

function TermsOfService() {
  return (
    <Layout>
      <NextSeo
        title="Terms of Service | ACM at UCLA"
        description="Terms of Service for the ACM at UCLA website."
      />
      <div className="content-container-tight">
        <h1>Terms of Service</h1>
        <p><em>Last updated: March 2026</em></p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the ACM at UCLA website (uclaacm.com), you agree to be bound
          by these Terms of Service. If you do not agree, please do not use this site.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          This website is provided for informational purposes about ACM at UCLA, its events,
          committees, and programs. You agree to use it only for lawful purposes and in a way
          that does not infringe the rights of others.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this site — including text, images, logos, and graphics — is owned by
          ACM at UCLA or its respective contributors and is protected by applicable intellectual
          property laws. You may not reproduce or redistribute content without prior written
          permission, except as permitted by open-source licenses where applicable.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          This site may contain links to external websites. ACM at UCLA is not responsible for
          the content or privacy practices of those sites.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          This site is provided &quot;as is&quot; without warranties of any kind. ACM at UCLA makes no
          guarantees about the accuracy, completeness, or availability of the content.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          ACM at UCLA shall not be liable for any damages arising from your use of or inability
          to use this website.
        </p>

        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service at any time. Continued use of the site after
          changes constitutes your acceptance of the revised terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions about these terms can be directed to{' '}
          <a href="mailto:acm@ucla.edu">acm@ucla.edu</a>.
        </p>
      </div>
    </Layout>
  );
}

export default TermsOfService;
