import { BackdoorHeader } from "@/polymet/components/backdoor-header";
import { BackdoorFooter } from "@/polymet/components/backdoor-footer";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      <BackdoorHeader onJoinClick={() => window.location.href = '/'} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          BackDoor Privacy Policy
        </h1>
        <p className="text-zinc-400 mb-12">Last Updated: October 21, 2025</p>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
              Welcome to BackDoor ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at trybackdoor.com and our related services (collectively, the "Service").
            </p>
            <p className="leading-relaxed">
              By using the Service, you consent to the data practices described in this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Personal Information You Provide</h3>
            <p className="leading-relaxed mb-3">
              We collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li><strong>Register for an account:</strong> Name, email address, phone number</li>
              <li><strong>Make a reservation:</strong> Dining preferences, party size, special requests</li>
              <li><strong>Communicate with us:</strong> Feedback, support requests, correspondence</li>
              <li><strong>Participate in promotions:</strong> Survey responses, contest entries</li>
              <li><strong>Make payments:</strong> Payment card information (processed through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 Information Automatically Collected</h3>
            <p className="leading-relaxed mb-3">
              When you access the Service, we automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, links clicked, referral sources</li>
              <li><strong>Location Data:</strong> Approximate geographic location based on IP address (with your consent, we may collect precise location data)</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.3 Information from Third Parties</h3>
            <p className="leading-relaxed mb-3">
              We may receive information about you from third parties, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li><strong>Restaurant Partners:</strong> Reservation confirmations, dining history, feedback</li>
              <li><strong>Payment Processors:</strong> Transaction verification, fraud detection</li>
              <li><strong>Social Media Platforms:</strong> If you connect your social media accounts to the Service</li>
              <li><strong>Analytics Providers:</strong> Aggregated usage statistics and demographic information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 Service Delivery</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Facilitate restaurant reservations and bookings</li>
              <li>Send reservation confirmations and reminders via SMS and email</li>
              <li>Process payments and transactions</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.2 Service Improvement</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Analyze usage patterns to improve the Service</li>
              <li>Develop new features and functionality</li>
              <li>Conduct research and analytics</li>
              <li>Personalize your experience on the Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.3 Communication</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Send service-related notifications and updates</li>
              <li>Provide promotional offers and marketing communications (with your consent)</li>
              <li>Send newsletters and information about new restaurants or features</li>
              <li>Conduct surveys and request feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">3.4 Legal and Security</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Enforce our Terms of Service and other policies</li>
              <li>Detect, prevent, and address fraud, security issues, and technical problems</li>
              <li>Protect the rights, property, and safety of BackDoor, our users, and the public</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
            <p className="leading-relaxed mb-4 font-semibold text-yellow-500">
              We do not sell your personal information to third parties.
            </p>
            <p className="leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Restaurant Partners</h3>
            <p className="leading-relaxed mb-4">
              We share necessary information (name, party size, contact information, special requests) with restaurants to facilitate your reservations.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 Service Providers</h3>
            <p className="leading-relaxed mb-3">
              We engage third-party companies and individuals to perform services on our behalf, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Payment processing (Stripe)</li>
              <li>SMS and email delivery (Twilio)</li>
              <li>Analytics and data analysis</li>
              <li>Customer support</li>
              <li>Marketing and advertising</li>
              <li>Cloud hosting and storage</li>
            </ul>
            <p className="leading-relaxed mb-4">
              These service providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.3 Business Transfers</h3>
            <p className="leading-relaxed mb-4">
              If BackDoor is involved in a merger, acquisition, asset sale, or bankruptcy, your information may be transferred as part of that transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.4 Legal Requirements</h3>
            <p className="leading-relaxed mb-4">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, government agencies).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.5 Protection of Rights</h3>
            <p className="leading-relaxed mb-3">
              We may disclose your information when we believe it is necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Enforce our Terms of Service or other policies</li>
              <li>Protect the rights, property, or safety of BackDoor, our users, or others</li>
              <li>Investigate and prevent fraud, security issues, or illegal activities</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">4.6 With Your Consent</h3>
            <p className="leading-relaxed">
              We may share your information with third parties when you give us explicit consent to do so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly (e.g., authentication, security)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Service (e.g., Google Analytics)</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements based on your interests</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 Managing Cookies</h3>
            <p className="leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but this may affect your ability to use certain features of the Service.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.3 Do Not Track Signals</h3>
            <p className="leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature. Our Service does not currently respond to DNT signals, as there is no industry standard for how to interpret them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
            <p className="leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Access and Correction</h3>
            <p className="leading-relaxed mb-4">
              You have the right to access and update your personal information through your account settings or by contacting us.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 Deletion</h3>
            <p className="leading-relaxed mb-4">
              You may request deletion of your personal information, subject to certain exceptions (e.g., legal obligations, fraud prevention).
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.3 Opt-Out of Marketing</h3>
            <p className="leading-relaxed mb-4">
              You can opt out of receiving promotional emails by clicking the "unsubscribe" link in any marketing email. You can opt out of SMS messages by replying "STOP" to any text message.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.4 Data Portability</h3>
            <p className="leading-relaxed mb-4">
              You may request a copy of your personal information in a structured, machine-readable format.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.5 Objection and Restriction</h3>
            <p className="leading-relaxed mb-4">
              You may object to or request restriction of certain processing of your personal information.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.6 California Privacy Rights (CCPA)</h3>
            <p className="leading-relaxed mb-3">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">6.7 European Privacy Rights (GDPR)</h3>
            <p className="leading-relaxed mb-3">
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Right to access, rectification, erasure, and data portability</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>

            <p className="leading-relaxed text-yellow-500 font-semibold">
              To exercise any of these rights, please contact us at privacy@trybackdoor.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
            <p className="leading-relaxed mb-3">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure socket layer (SSL) technology</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
            <p className="leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
            <p className="leading-relaxed mb-3">
              Factors that influence our retention periods include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>The duration of your relationship with BackDoor</li>
              <li>Legal and regulatory requirements</li>
              <li>Fraud prevention and security purposes</li>
              <li>Resolving disputes and enforcing agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed mb-4">
              The Service is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
            </p>
            <p className="leading-relaxed">
              If you believe we have collected information from a child under 18, please contact us at privacy@trybackdoor.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Links and Services</h2>
            <p className="leading-relaxed mb-4">
              The Service may contain links to third-party websites, applications, or services that are not owned or controlled by BackDoor. This Privacy Policy does not apply to third-party websites or services. We are not responsible for the privacy practices of third parties.
            </p>
            <p className="leading-relaxed">
              We encourage you to review the privacy policies of any third-party websites or services you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
            <p className="leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence, including the United States. These countries may have data protection laws that differ from those in your country.
            </p>
            <p className="leading-relaxed mb-3">
              When we transfer your information internationally, we implement appropriate safeguards to protect your information in accordance with this Privacy Policy and applicable law, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Standard contractual clauses approved by the European Commission</li>
              <li>Privacy Shield certification (where applicable)</li>
              <li>Other legally recognized transfer mechanisms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed mb-3">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Posting the updated Privacy Policy on the Service</li>
              <li>Updating the "Last Updated" date at the top of this Privacy Policy</li>
              <li>Sending an email notification (for significant changes)</li>
            </ul>
            <p className="leading-relaxed">
              Your continued use of the Service after the effective date of the updated Privacy Policy constitutes your acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="text-white font-semibold mb-2">BackDoor Privacy Team</p>
              <p className="text-zinc-300">Email: <a href="mailto:privacy@trybackdoor.com" className="text-yellow-500 hover:text-yellow-400">privacy@trybackdoor.com</a></p>
              <p className="text-zinc-300">Support Email: <a href="mailto:support@trybackdoor.com" className="text-yellow-500 hover:text-yellow-400">support@trybackdoor.com</a></p>
              <p className="text-zinc-300">Website: <a href="https://trybackdoor.com" className="text-yellow-500 hover:text-yellow-400">https://trybackdoor.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Additional Information for Specific Jurisdictions</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">14.1 California Residents</h3>
            <p className="leading-relaxed mb-3">
              <strong>California Shine the Light Law:</strong> California residents may request information about our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please contact us at privacy@trybackdoor.com.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>CCPA Categories of Information Collected:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li>Identifiers (name, email, phone number, IP address)</li>
              <li>Commercial information (reservation history, transaction records)</li>
              <li>Internet activity (browsing history, interactions with the Service)</li>
              <li>Geolocation data</li>
              <li>Inferences (preferences, characteristics, behavior)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">14.2 European Economic Area (EEA) Residents</h3>
            <p className="leading-relaxed mb-3">
              <strong>Legal Basis for Processing:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4 mb-4">
              <li><strong>Consent:</strong> When you provide explicit consent for specific processing activities</li>
              <li><strong>Contract:</strong> To fulfill our contractual obligations to you</li>
              <li><strong>Legitimate Interests:</strong> To improve our Service, prevent fraud, and ensure security</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
            <p className="leading-relaxed">
              <strong>Data Controller:</strong> BackDoor is the data controller responsible for your personal information.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">14.3 Nevada Residents</h3>
            <p className="leading-relaxed">
              Nevada residents have the right to opt-out of the sale of certain covered information. We do not sell your covered information as defined under Nevada law. If you have questions, please contact us at privacy@trybackdoor.com.
            </p>
          </section>

          <section className="border-t border-zinc-800 pt-8 mt-8">
            <p className="text-zinc-400 font-semibold mb-2">Effective Date: October 21, 2025</p>
            <p className="text-zinc-400 italic">
              By using the BackDoor Service, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </section>
        </div>
      </div>

      <BackdoorFooter />
    </div>
  );
}
