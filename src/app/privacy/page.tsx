import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pt-36 pb-20">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Fill out contact forms or request consultations</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Interact with our website and services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use different types of cookies to enhance your experience:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Necessary Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Essential for the website to function properly, including
                      security, load balancing, and basic functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website
                      through services like Google Analytics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Used to track visitors across websites and display
                      relevant advertisements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Enable enhanced functionality like live chat, social media
                      integration, and personalized experiences.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage and improve user experience</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Manage your cookie preferences</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-gray-900 dark:text-white font-medium">
                    NomanuAI
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: consulting@nomanuai.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Phone: +63 975 948 3289
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
