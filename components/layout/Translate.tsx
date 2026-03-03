"use client";
import Script from "next/script";
import React from "react";

const Translate = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-max h-full  border rounded-md hover:border-blue-500  cursor-pointer duration-300 bg-white">
        <div
          id="google_translate_element"
          className="p-1 h-full translate"
        ></div>
      </div>

      <Script
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <Script
        id="google-translate"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'vi' , includedLanguages : 'vi,en,zh-CN,ko,ja'}, 'google_translate_element');
          }
        `,
        }}
      />
    </div>
  );
};

export default Translate;
