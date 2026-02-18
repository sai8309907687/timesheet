"use client";
import React from "react";
// import { ProgressBar } from "@/util/app.event";
import { useSignals } from "@preact/signals-react/runtime";

import PageLoader from "./PageLoading";

import { ProgressBar } from "@/utils/app.event";

export default function AppProgressBar() {
  useSignals();

  return ProgressBar.value && <PageLoader />;
}
