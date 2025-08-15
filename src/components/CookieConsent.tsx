"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Settings } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === "necessary") return; // Can't change necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm">
        <div className="container-width py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Icon and Content */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use cookies to analyze website traffic, personalize
                  content, and provide social media features. You can manage
                  your preferences or learn more in our{" "}
                  <Link
                    href="/privacy"
                    className="text-brand-orange hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-orange border border-gray-300 dark:border-gray-600 rounded-lg hover:border-brand-orange transition-colors duration-200"
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Customize
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-medium text-white bg-brand-orange hover:bg-brand-orange-dark rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Check className="w-4 h-4 inline mr-2" />
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use different types of cookies to enhance your browsing
                experience. You can choose which cookies to allow below.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Necessary Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Essential for the website to function properly. These
                      cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-brand-orange rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website
                      by collecting anonymous information.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        handlePreferenceChange(
                          "analytics",
                          !preferences.analytics
                        )
                      }
                      aria-label={`${
                        preferences.analytics ? "Disable" : "Enable"
                      } analytics cookies`}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.analytics
                          ? "bg-brand-orange"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                          preferences.analytics ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Marketing Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Used to track visitors and display relevant ads and
                      marketing campaigns.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        handlePreferenceChange(
                          "marketing",
                          !preferences.marketing
                        )
                      }
                      aria-label={`${
                        preferences.marketing ? "Disable" : "Enable"
                      } marketing cookies`}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.marketing
                          ? "bg-brand-orange"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                          preferences.marketing ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enable enhanced functionality like live chat, social media
                      integration, and personalization.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() =>
                        handlePreferenceChange(
                          "functional",
                          !preferences.functional
                        )
                      }
                      aria-label={`${
                        preferences.functional ? "Disable" : "Enable"
                      } functional cookies`}
                      className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.functional
                          ? "bg-brand-orange"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                          preferences.functional ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Necessary Only
              </button>
              <button
                onClick={savePreferences}
                className="flex-1 px-4 py-2 text-sm font-medium text-white bg-brand-orange hover:bg-brand-orange-dark rounded-lg transition-colors duration-200"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
