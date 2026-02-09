"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CookieIcon,
  CloseIcon,
  CheckIcon,
  SettingsIcon,
} from "@/components/icons/PremiumIcons";

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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-paper/95 dark:bg-gray-900/95
        border-t border-ink/10 dark:border-white/10 shadow-elevation-high backdrop-blur-xl">
        <div className="container-width py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Icon and Content */}
            <div className="flex items-start gap-3 flex-1">
              <div className="icon-container w-10 h-10 flex-shrink-0 mt-0.5">
                <CookieIcon size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-1">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-ink-secondary dark:text-gray-400 leading-relaxed">
                  We use cookies to analyze website traffic, personalize
                  content, and provide social media features. You can manage
                  your preferences or learn more in our{" "}
                  <Link
                    href="/privacy"
                    className="text-brand hover:text-brand-dark transition-colors duration-300"
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
                className="btn-ghost px-4 py-2 text-sm inline-flex items-center justify-center gap-2"
              >
                <SettingsIcon size={16} />
                <span>Customize</span>
              </button>
              <button
                onClick={acceptNecessary}
                className="btn-secondary px-4 py-2 text-sm"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="btn-primary px-6 py-2 text-sm inline-flex items-center justify-center gap-2"
              >
                <CheckIcon size={16} />
                <span>Accept All</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] bg-ink/50 dark:bg-black/60 backdrop-blur-sm
          flex items-center justify-center p-4">
          <div className="card-glass max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-ink/10 dark:border-white/10">
              <h2 className="heading-sm text-ink dark:text-white">
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 text-ink-tertiary hover:text-ink dark:text-gray-400
                  dark:hover:text-white hover:bg-ink/5 dark:hover:bg-white/5
                  hex-cut-sm transition-all duration-300"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
                We use different types of cookies to enhance your browsing
                experience. You can choose which cookies to allow below.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                      Necessary Cookies
                    </h3>
                    <p className="text-sm text-ink-secondary dark:text-gray-400">
                      Essential for the website to function properly. These
                      cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-brand rounded-full relative cursor-not-allowed">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-sm text-ink-secondary dark:text-gray-400">
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
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                        preferences.analytics
                          ? "bg-brand"
                          : "bg-ink/20 dark:bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${
                          preferences.analytics ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                      Marketing Cookies
                    </h3>
                    <p className="text-sm text-ink-secondary dark:text-gray-400">
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
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                        preferences.marketing
                          ? "bg-brand"
                          : "bg-ink/20 dark:bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${
                          preferences.marketing ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-sm text-ink-secondary dark:text-gray-400">
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
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                        preferences.functional
                          ? "bg-brand"
                          : "bg-ink/20 dark:bg-white/20"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${
                          preferences.functional ? "right-1" : "left-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-ink/10 dark:border-white/10">
              <button
                onClick={acceptNecessary}
                className="btn-secondary flex-1 py-2 text-sm"
              >
                Necessary Only
              </button>
              <button
                onClick={savePreferences}
                className="btn-primary flex-1 py-2 text-sm"
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
