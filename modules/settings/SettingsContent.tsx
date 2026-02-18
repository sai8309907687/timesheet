'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeSelect } from '@/types/type.select';
import { SessionLang, ThemeMode } from '@/utils/app.event';
import AppStorage, { LANG, THEME } from '@/utils/app.storage';
import { languages } from '@/i18n';
import { useSignals } from '@preact/signals-react/runtime';

/**
 * SettingsContent Component
 * Provides UI for changing language and theme settings.
 */
export const SettingsContent = () => {
    useSignals();
    const { i18n, t } = useTranslation();

    // Map application languages to TypeSelect options
    const languageOptions = languages.map((lang) => ({
        key: lang.code,
        label: lang.locale,
    }));

    // Theme options for Light/Dark mode
    const themeOptions = [
        { key: 'light', label: t('light') },
        { key: 'dark', label: t('dark') },
    ];

    /**
     * Handles language change
     * @param code - The language code (e.g., 'en-US')
     */
    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        SessionLang.value = code;
        AppStorage.setData(LANG, code, true);
    };

    /**
     * Handles theme change
     * @param theme - The theme name ('light' or 'dark')
     */
    const handleThemeChange = (theme: string) => {
        ThemeMode.value = theme;
        // Persist theme to storage as expected by layout.tsx
        AppStorage.setData(THEME, theme, true);

        // Immediately apply theme to the document
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className="space-y-6 pt-2">
            {/* Theme Row */}
            <div className="flex justify-between items-center gap-2">
                <div className="w-[25%]">
                    <h2 className="text-md font-semibold">{t("theme")}</h2>
                </div>
                <div className="w-[75%]">
                    <TypeSelect
                        value={ThemeMode.value}
                        options={themeOptions}
                        onChange={handleThemeChange}
                        placeholder="Select Theme"
                    />
                </div>
            </div>

            {/* Language Row */}
            <div className="flex justify-between items-center gap-2">
                <div className="w-[25%]">
                    <h2 className="text-md font-semibold flex items-center gap-2">
                        {t("language")}
                    </h2>
                </div>
                <div className="w-[75%]">
                    <TypeSelect
                        value={SessionLang.value}
                        options={languageOptions}
                        onChange={handleLanguageChange}
                        placeholder="Select Language"
                    />
                </div>
            </div>
        </div>
    );
};
