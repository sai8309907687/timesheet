"use client";
import React from "react";
import { Users, Clock, TrendingUp, DollarSign } from "lucide-react";
import { AgCharts } from "ag-charts-react";
import { useSignals } from "@preact/signals-react/runtime";
import { useTranslation } from "react-i18next";
import { summaryCards, bottomCards, generateClientData, generateProjectData } from "./common/data";
import { getBarChartOptions, getPieChartOptions } from "./common/grid";
import { Bell, Shield } from "lucide-react";
import { ThemeMode } from "@/utils/app.event";
import { ArticleLayout } from "@/layouts/article-layout";
import { ContentLayout } from "@/layouts/content-layout";
import { TypeSelect } from "@/types/type.select";
import TypeIcon from "@/types/type.icon";

const iconMap: any = {
  users: Users,
  clock: Clock,
  "trending-up": TrendingUp,
  "dollar-sign": DollarSign,
};

export default function DashboardPage() {
  useSignals();
  const { t } = useTranslation();
  const theme = ThemeMode.value === "dark" ? "dark" : "light";

  const hoursByClientOptions = getBarChartOptions(generateClientData(), theme);
  const hoursByProjectTypeOptions = getPieChartOptions(generateProjectData(), theme);

  const moduleOptions = [
    { key: "module-selector", label: "Module Selector" },
    { key: "mobile-app", label: "Mobile App" },
    { key: "employee-portal", label: "Employee Portal" },
    { key: "manager-portal", label: "Manager Portal" },
    { key: "admin-portal", label: "Admin Portal" },
  ];

  return (
    <section className="w-full">
      <ArticleLayout>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-primary">
              {t("adminDashboardTitle")}
            </h3>
            <p className="text-gray-900 dark:text-gray-300">
              {t("adminDashboardSubtitle")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <TypeIcon name="Bell" size={24} className="text-gray-600 dark:text-gray-400" />
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </div>

            <div className="w-[180px]">
              <TypeSelect
                options={moduleOptions}
                value="admin-portal"
                onChange={(val) => console.log(val)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>

      <ContentLayout>
        <div className="flex flex-col gap-6 w-full">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryCards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <div
                  key={index}
                  className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-primary font-bold text-md">
                      {t(card.titleKey)}
                    </span>
                    <div className={`p-2 rounded-lg ${card.color}`}>
                      {Icon && <Icon size={20} />}
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-1">
                    {card.value}
                  </div>

                  <div className="text-sm text-gray-400">
                    {t(card.subtitleKey)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow h-full">
              <h3 className="text-lg font-bold text-primary mb-4">
                {t("dashboardHoursByClientTitle")}
              </h3>
              <div className="h-[300px] w-full">
                <AgCharts options={hoursByClientOptions} />
              </div>
            </div>

            <div className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow h-full">
              <h3 className="text-lg font-bold text-primary mb-4">
                {t("dashboardHoursByProjectTypeTitle")}
              </h3>
              <div className="h-[300px] w-full">
                <AgCharts options={hoursByProjectTypeOptions} />
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomCards.map((card, index) => (
              <div
                key={index}
                className="card bg-white shadow-sm border border-gray-100 p-6 rounded-xl"
              >
                <h3 className="text-primary font-bold text-md mb-4">
                  {t(card.titleKey)}
                </h3>

                {card.isLink ? (
                  <button className="btn btn-link p-0 text-xl font-bold text-gray-900 dark:text-gray-300 no-underline hover:underline">
                    {card.valueKey ? t(card.valueKey) : card.value}
                  </button>
                ) : (
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-300">
                    {card.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
    </section>

  );
}
