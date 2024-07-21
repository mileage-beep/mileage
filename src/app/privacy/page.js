"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";

const Privacy = () => {
  const lastUpdated = "July 20, 2024";

  return (
    <div className="container mx-auto p-4 bg-[#fffdd6]">
      <h1 className="text-7xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-center mb-4">Last updated: {lastUpdated}</p>

      <div className="space-y-6">
        <Section title="Introduction">
          <p>
            At Female Mileage Calculator, we respect your privacy and are
            committed to protecting it through our compliance with this policy.
            This policy describes the types of information we may collect from
            you or that you may provide when you use our website, and our
            practices for collecting, using, maintaining, protecting, and
            disclosing that information.
          </p>
          <p>
            Please read this policy carefully to understand our policies and
            practices regarding your information and how we will treat it. If
            you do not agree with our policies and practices, your choice is not
            to use our website.
          </p>
        </Section>

        <Section title="Information We Collect">
          <p>
            Our website is designed to function without collecting personal
            data. We do not collect or store any personally identifiable
            information such as names, email addresses, or phone numbers. The
            calculator on our website operates entirely within your browser and
            does not send any of the entered data to our servers.
          </p>
          <p>
            However, like many websites, we may automatically collect certain
            non-personal information when you visit our site, including:
          </p>
          <ul className="list-disc list-inside">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Date and time of your visit</li>
            <li>Pages you viewed</li>
          </ul>
          <p>
            This information is used for analytical purposes to improve our
            website and user experience. It is not used to personally identify
            visitors.
          </p>
        </Section>

        <Section title="Use of Cookies">
          <p>
            Our website uses cookies to enhance user experience. Cookies are
            small text files that are placed on your computer by websites that
            you visit. They are widely used to make websites work more
            efficiently and to provide information to the owners of the site.
          </p>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside">
            <li>To analyze our web traffic using an analytics package</li>
            <li>To improve our website functionality</li>
          </ul>
          <p>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser settings to decline cookies if you prefer.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            We do not use third-party advertising services on our website.
            However, we do use Google Analytics to help us understand how our
            website is being used. Google Analytics may set cookies on your
            browser or read cookies that are already there. Google Analytics may
            also receive information about you from apps you have downloaded
            that partner with Google.
          </p>
          <p>
            For more information about how Google uses your data when you use
            our website, please visit{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="Bitcoin Donations">
          <p>
            If you choose to donate Bitcoin to our website, please be aware of
            the following:
          </p>
          <ul className="list-disc list-inside">
            <li>
              We do not collect personal data through our Bitcoin donation
              process.
            </li>
            <li>
              Bitcoin transactions are processed through the Bitcoin network,
              not through our servers.
            </li>
            <li>
              While Bitcoin transactions are pseudonymous, they are recorded on
              a public blockchain and are traceable.
            </li>
            <li>
              We do not link Bitcoin donation addresses with any personal data.
            </li>
          </ul>
          <p>By donating Bitcoin, you consent to these terms.</p>
        </Section>

        <Section title="Data Security">
          <p>
            We have implemented measures designed to secure your personal
            information from accidental loss and from unauthorized access, use,
            alteration, and disclosure. However, as our website does not collect
            personal information, the primary security concern is protecting the
            integrity of our website and ensuring that the calculator functions
            as intended.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Our website is not intended for children under 18 years of age. We
            do not knowingly collect personal information from children under
            18. If you are under 18, do not use or provide any information on
            this website.
          </p>
        </Section>

        <Section title="Changes to Our Privacy Policy">
          <p>
            We may update our privacy policy from time to time. We will post any
            changes on this page and update the &quot;Last updated&quot; date at
            the top of this policy.
          </p>
        </Section>

        <Section title="Contact Information">
          <p>
            If you have any questions or comments about this privacy policy,
            please contact us through the provided channels on our website.
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export default Privacy;
