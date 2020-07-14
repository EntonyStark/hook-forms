export const URLS = {
  home: '/',
  constructor: '/constructor',
  getStarted: '/get-started',
  examples: {
    simple: '/examples/simple',
    validation: '/examples/validation',
  },
  doc: {
    api: '/doc/api',
    props: '/doc/props',
  },
};

export const examples = {
  simple: 'simple',
  validation: 'validation',
};

export const packageTitle = 'Hook Easy Form';

export const ownerGitHubInfo = {
  login: 'ArtemStepanovDev',
  id: 55385736,
  node_id: 'MDQ6VXNlcjU1Mzg1NzM2',
  avatar_url: 'https://avatars1.githubusercontent.com/u/55385736?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/ArtemStepanovDev',
  html_url: 'https://github.com/ArtemStepanovDev',
  followers_url: 'https://api.github.com/users/ArtemStepanovDev/followers',
  following_url: 'https://api.github.com/users/ArtemStepanovDev/following{/other_user}',
  gists_url: 'https://api.github.com/users/ArtemStepanovDev/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/ArtemStepanovDev/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/ArtemStepanovDev/subscriptions',
  organizations_url: 'https://api.github.com/users/ArtemStepanovDev/orgs',
  repos_url: 'https://api.github.com/users/ArtemStepanovDev/repos',
  events_url: 'https://api.github.com/users/ArtemStepanovDev/events{/privacy}',
  received_events_url: 'https://api.github.com/users/ArtemStepanovDev/received_events',
  type: 'User',
  site_admin: false,
  contributions: 22,
};


export const INPUT = 'text';
export const RADIO = 'radio';
export const SELECT = 'select';
export const CHECKBOX = 'checkbox';
export const TEXTAREA = 'textarea';

export const constructorFormElement = {
  id: '0',
  name: '',
  value: '',
  options: { type: INPUT, label: 'Default Label', countOfOptions: 0 },
  validate: {},
  defaultUserValidate: { required: false, maxLength: '', pattern: '' },
  includeValidate: false,
  countOfElement: 1,
};

export const constructorElementsOptions = [
  { value: INPUT, text: 'Input' },
  { value: RADIO, text: 'Radio' },
  { value: SELECT, text: 'Select' },
  { value: CHECKBOX, text: 'Checkbox' },
  { value: TEXTAREA, text: 'Textarea' },
];

export const constructorBlockHeight = 550;
