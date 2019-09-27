import React, { createContext } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { kebabCase } from 'lodash';
import { usePromise } from '../hooks'

const typekitStylesheet = `https://use.typekit.net/fni3eij.css`;

export const IVY_JOURNAL = 'ivyjournal';
export const IVY_JOURNAL_SANS = 'ivystyle-sans';
export const IBM_PLEX_MONO = 'ibm-plex-mono';

// Map of font names to each font's corresponding stylesheet
export const webFonts = {
  [IVY_JOURNAL]: typekitStylesheet,
  [IVY_JOURNAL_SANS]: typekitStylesheet,
  [IBM_PLEX_MONO]: typekitStylesheet,
};

export const fontLists = {
  serif: [IVY_JOURNAL, 'georgia', 'serif'],
  sans: [IVY_JOURNAL_SANS, 'helvetica', 'arial', 'sans-serif'],
  mono: [
    IBM_PLEX_MONO,
    '"Consolas"',
    '"Menlo"',
    '"Monaco"',
    '"Andale Mono"',
    '"Ubuntu Mono"',
    'monospace',
  ],
};

export const fonts = Object.entries(fontLists)
  .map(([key, family]) => [key, family.join(', ')])
  .reduce(
    (prev, [key, family]) => ({
      ...prev,
      [key]: family,
    }),
    {}
  );

const loadFonts = async () => {
  const _fonts = Object.keys(webFonts).map(async key => {
    const font = new FontFaceObserver(key);
    const fontName = kebabCase(key);
    try {
      await font.load();
      return { font: fontName, loaded: true };
    } catch (errors) {
      console.error(errors);
      return { font: fontName, loaded: false };
    }
  });
  try {
    const fontStatuses = await Promise.all(_fonts);
    if (fontStatuses.some(({ loaded }) => loaded === false)) {
      return Promise.reject(
        'There was an error loading some web fonts. Reverting to fallbacks.'
      );
    }
    return {
      loaded: true,
      fonts: fontStatuses.map(({ font }) => font),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fontsInitialState = {
  fonts: [],
  fontsLoaded: false,
  fontsError: undefined,
  fontsLoadingState: undefined,
};

export const FontContext = createContext(fontsInitialState);

export const FontProvider = ({ children }) => {
  const [
    { loaded: fontsLoaded, fonts: _fonts } = {
      loaded: fontsInitialState.fontsLoaded,
      fonts: fontsInitialState.fonts,
    },
    fontsError,
    fontsLoadingState,
  ] = usePromise(loadFonts(), []);
  return (
    <FontContext.Provider
      value={{ fontsLoaded, fonts: _fonts, fontsError, fontsLoadingState }}
    >
      {children}
    </FontContext.Provider>
  );
};

export const useFonts = () => {
  return React.useContext(FontContext);
};
