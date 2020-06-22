const required = (v) => (v.trim() === '' ? 'Required' : '');
const checkEmail = (v) => (/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v) ? '' : 'Not valid email');

export const form = [
  {
    name: 'firstName',
    value: '',
    options: {
      label: 'First Name',
    },
    validate: {
      required,
    },
  },
  {
    name: 'lastName',
    value: '',
    options: {
      label: 'Last Name',
    },
    validate: {
      required,
    },
  },
  {
    name: 'email',
    value: '',
    options: {
      label: 'Email',
    },
    validate: {
      required,
      checkEmail,
    },
  },
  {
    name: 'sex',
    value: '',
    options: {
      label: 'Sex',
      type: 'radio',
      buttons: [
        { title: 'Male', value: 'male' },
        { title: 'Female', value: 'female' },
      ],
    },
    validate: {
      required,
    },
  },
  {
    name: 'role',
    value: '',
    options: {
      label: 'Role',
      type: 'select',
      options: [
        { title: 'User', value: 'user' },
        { title: 'Administrator', value: 'admin' },
        { title: 'Moderator', value: 'moderator' },
      ],
    },
    validate: {
      required,
    },
  },
  {
    name: 'verified',
    value: false,
    options: {
      label: 'Verified',
      type: 'checkbox',
    },
  },
  {
    name: 'bio',
    value: '',
    options: {
      label: 'Bio',
      type: 'textarea',
    },
    validate: {
      required,
    },
  },
];
