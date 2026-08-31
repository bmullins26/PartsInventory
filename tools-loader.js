const TOOL_DATA_FILES = ['tools-data-01.js','tools-data-02.js','tools-data-03.js','tools-data-04.js','tools-data-05.js'];
// This file documents the loader contract. index.html loads the five files before building TOOLS.
const ALL_TOOLS = [
  ...(typeof TOOLS_01 !== 'undefined' ? TOOLS_01 : []),
  ...(typeof TOOLS_02 !== 'undefined' ? TOOLS_02 : []),
  ...(typeof TOOLS_03 !== 'undefined' ? TOOLS_03 : []),
  ...(typeof TOOLS_04 !== 'undefined' ? TOOLS_04 : []),
  ...(typeof TOOLS_05 !== 'undefined' ? TOOLS_05 : [])
];