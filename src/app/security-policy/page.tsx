import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy - NomanuAI",
  description: "Our commitment to security, privacy, and protecting your data",
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Security Policy
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At NomanuAI, we take security seriously. This policy outlines our
              commitment to protecting your data and maintaining the highest
              security standards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Protection & Privacy
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>All data is encrypted in transit and at rest</li>
              <li>
                We use industry-standard security protocols (HTTPS, TLS 1.3)
              </li>
              <li>
                Personal information is never shared with third parties without
                consent
              </li>
              <li>
                We comply with GDPR and other relevant privacy regulations
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Form Security
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>All forms use secure HTTPS connections</li>
              <li>Input validation and sanitization prevent malicious code</li>
              <li>CSRF protection prevents cross-site request forgery</li>
              <li>Rate limiting prevents abuse and spam</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Infrastructure Security
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>Hosted on secure cloud infrastructure with 99.9% uptime</li>
              <li>Regular security audits and penetration testing</li>
              <li>Automated vulnerability scanning</li>
              <li>24/7 monitoring and incident response</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              No Deceptive Practices
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We are committed to transparency and ethical business practices:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
              <li>No misleading or deceptive content</li>
              <li>Clear and honest communication about our services</li>
              <li>No collection of unnecessary personal information</li>
              <li>Transparent pricing and service terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For security concerns or questions about this policy:
            </p>
            <ul className="list-none pl-0 mb-6 text-gray-600 dark:text-gray-300">
              <li>Email: security@nomanuai.com</li>
              <li>Phone: +63 975 948 3289</li>
              <li>Response time: Within 24 hours</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-8">
              <p className="text-green-800 dark:text-green-200 text-sm">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
