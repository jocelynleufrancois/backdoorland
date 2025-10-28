import { BackdoorHeader } from "@/polymet/components/backdoor-header";
import { BackdoorFooter } from "@/polymet/components/backdoor-footer";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-black">
      <BackdoorHeader onJoinClick={() => window.location.href = '/'} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          BackDoor Terms of Service
        </h1>
        <p className="text-zinc-400 mb-12">Last Updated: October 21, 2025</p>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              Welcome to BackDoor ("we," "our," or "us"). By accessing or using the BackDoor website at trybackdoor.com (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="leading-relaxed">
              BackDoor is a marketplace platform that connects users with last-minute restaurant reservation opportunities. We facilitate access to available tables at participating restaurants, particularly during peak dining times. BackDoor acts solely as an intermediary platform and does not own, operate, or control any restaurants listed on the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts and Registration</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Account Creation</h3>
            <p className="leading-relaxed mb-4">
              To access certain features of the Service, you may be required to create an account by providing your name, phone number, and email address. You agree to provide accurate, current, and complete information during registration.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.2 Account Security</h3>
            <p className="leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">4.3 Account Termination</h3>
            <p className="leading-relaxed">
              We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including but not limited to violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Reservation Services</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Reservation Availability</h3>
            <p className="leading-relaxed mb-4">
              BackDoor provides information about available restaurant reservations. Availability is subject to change without notice, and we do not guarantee that any particular reservation will be available at the time of your request.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 Reservation Confirmation</h3>
            <p className="leading-relaxed mb-4">
              All reservations are subject to confirmation by the participating restaurant. BackDoor does not guarantee that any reservation request will be accepted.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.3 Reservation Modifications and Cancellations</h3>
            <p className="leading-relaxed mb-4">
              Reservation modification and cancellation policies are determined by individual restaurants. You are responsible for understanding and complying with the specific policies of each restaurant where you make a reservation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.4 No-Show Policy</h3>
            <p className="leading-relaxed">
              Failure to honor a confirmed reservation without proper cancellation may result in penalties, including but not limited to suspension or termination of your BackDoor account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Fees and Payments</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Service Fees</h3>
            <p className="leading-relaxed mb-4">
              BackDoor may charge service fees for facilitating reservations. All applicable fees will be clearly disclosed before you confirm a reservation.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 Payment Processing</h3>
            <p className="leading-relaxed mb-4">
              Payments are processed through third-party payment processors. By providing payment information, you authorize us to charge the applicable fees to your designated payment method.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.3 Refunds</h3>
            <p className="leading-relaxed mb-4">
              Refund policies vary by restaurant and reservation type. BackDoor is not responsible for issuing refunds for reservations, except as required by applicable law or as explicitly stated in our refund policy.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.4 Pricing Changes</h3>
            <p className="leading-relaxed">
              We reserve the right to modify our fees at any time. Changes to fees will be communicated through the Service or via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. User Conduct</h2>
            <p className="leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Make fraudulent or speculative reservations</li>
              <li>Resell or transfer reservations without authorization</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use automated systems or software to extract data from the Service</li>
              <li>Harass, abuse, or harm other users or restaurant partners</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Restaurant Partner Relationships</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">8.1 Third-Party Services</h3>
            <p className="leading-relaxed mb-4">
              Restaurants listed on BackDoor are independent third parties. BackDoor is not responsible for the quality, safety, or legality of services provided by restaurants.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">8.2 Restaurant Policies</h3>
            <p className="leading-relaxed mb-4">
              Each restaurant maintains its own policies regarding reservations, dining experiences, food preparation, and customer service. You are responsible for complying with restaurant-specific policies.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">8.3 Disputes with Restaurants</h3>
            <p className="leading-relaxed">
              Any disputes regarding food quality, service, pricing, or other restaurant-related matters should be resolved directly with the restaurant. BackDoor is not liable for any disputes between users and restaurants.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Intellectual Property</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.1 Ownership</h3>
            <p className="leading-relaxed mb-4">
              The Service, including all content, features, functionality, and design elements, is owned by BackDoor and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.2 Limited License</h3>
            <p className="leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes in accordance with these Terms.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">9.3 Restrictions</h3>
            <p className="leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any material from the Service, except as necessary for normal use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. SMS and Communication Consent</h2>
            <p className="leading-relaxed">
              By providing your phone number, you consent to receive SMS text messages from BackDoor regarding reservation confirmations, updates, promotional offers, and service-related notifications. Message and data rates may apply. You may opt out of SMS communications at any time by replying "STOP" to any message or by contacting us at support@trybackdoor.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Privacy</h2>
            <p className="leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Disclaimers</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">12.1 "As Is" Basis</h3>
            <p className="leading-relaxed mb-4 uppercase text-zinc-400">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">12.2 No Guarantee</h3>
            <p className="leading-relaxed mb-4">
              BackDoor does not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected. We do not guarantee the accuracy, completeness, or reliability of any content or information available through the Service.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">12.3 Restaurant Services</h3>
            <p className="leading-relaxed">
              BackDoor makes no representations or warranties regarding the quality, safety, or legality of restaurant services, the truth or accuracy of restaurant listings, or the ability of restaurants to honor reservations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Limitation of Liability</h2>
            <p className="leading-relaxed mb-4 uppercase text-zinc-400">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BACKDOOR AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 ml-4 mb-4">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="leading-relaxed uppercase text-zinc-400">
              IN NO EVENT SHALL BACKDOOR'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS RELATING TO THE SERVICE EXCEED THE AMOUNT YOU PAID TO BACKDOOR IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
            <p className="leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless BackDoor and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.1 Governing Law</h3>
            <p className="leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">15.2 Arbitration</h3>
            <p className="leading-relaxed mb-4">
              Any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Austin, Texas.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">15.3 Class Action Waiver</h3>
            <p className="leading-relaxed mb-4">
              You agree that any arbitration or proceeding shall be limited to the dispute between you and BackDoor individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">15.4 Exceptions</h3>
            <p className="leading-relaxed">
              Notwithstanding the foregoing, either party may seek equitable relief in court to protect intellectual property rights or confidential information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Modifications to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">18. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">19. Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and BackDoor regarding the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">20. Waiver</h2>
            <p className="leading-relaxed">
              No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">21. Contact Information</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-4">
              <p className="text-white font-semibold mb-2">BackDoor</p>
              <p className="text-zinc-300">Email: <a href="mailto:hello@trybackdoor.com" className="text-yellow-500 hover:text-yellow-400">hello@trybackdoor.com</a></p>
              <p className="text-zinc-300">Website: <a href="https://trybackdoor.com" className="text-yellow-500 hover:text-yellow-400">https://trybackdoor.com</a></p>
            </div>
          </section>

          <section className="border-t border-zinc-800 pt-8 mt-8">
            <p className="text-zinc-400 italic">
              By using the BackDoor Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>

      <BackdoorFooter />
    </div>
  );
}
