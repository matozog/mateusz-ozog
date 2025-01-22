import { ITechnology } from '../sections/experience/experience-card/experience-card';

const ReactTech: ITechnology = {
  icon: 'logos:react',
  label: 'React',
};

const HTMLTech: ITechnology = {
  icon: 'devicon:html5',
  label: 'HTML5',
};

const CSSTech: ITechnology = {
  icon: 'vscode-icons:file-type-css',
  label: 'CSS',
};

const SCSSTech: ITechnology = {
  icon: 'vscode-icons:file-type-scss2',
  label: 'SCSS',
};

const TypeScriptTech: ITechnology = {
  icon: 'logos:typescript-icon',
  label: 'TypeScript',
};

const JavaScriptTech: ITechnology = {
  icon: 'logos:javascript',
  label: 'JavaScript',
};

const BootstrapTech: ITechnology = {
  icon: 'devicon:bootstrap',
  label: 'Bootstrap',
};

const ReduxTech: ITechnology = {
  icon: 'logos:redux',
  label: 'Redux',
};

const ViteTech: ITechnology = {
  icon: 'vscode-icons:file-type-vite',
  label: 'Vite',
};

const JenkinsTech: ITechnology = {
  icon: 'devicon:jenkins',
  label: 'Jenkins',
};

const WebComponentTech: ITechnology = {
  icon: 'logos:webcomponents',
  label: 'Web Components',
};

const JavaTech: ITechnology = {
  icon: 'devicon:java',
  label: 'Java',
};

const WebpackTech: ITechnology = {
  icon: 'logos:webpack',
  label: 'Webpack',
};

export const FETechStack: ITechnology[] = [
  ReactTech,
  HTMLTech,
  SCSSTech,
  CSSTech,
  TypeScriptTech,
  JavaScriptTech,
  ReduxTech,
];

export {
  ReactTech,
  CSSTech,
  HTMLTech,
  BootstrapTech,
  ReduxTech,
  ViteTech,
  JavaScriptTech,
  JenkinsTech,
  SCSSTech,
  TypeScriptTech,
  WebComponentTech,
  JavaTech,
  WebpackTech,
};
