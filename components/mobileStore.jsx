import React from "react";
import MobileStoreButton from "react-mobile-store-button";
export default function HeroButton() {
  const appUrl =
    "https://play.google.com/store/apps/details?id=com.appseba.android.mealmanager";

  return (
    <MobileStoreButton
      store="android"
      url={appUrl}
      linkProps={{ title: "Android Store Button" }}
    />
  );
}
