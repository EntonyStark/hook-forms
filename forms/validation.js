export const formArray = [
  {
    name: 'firstName',
    value: '',
    options: {
      label: 'First Name',
    },
    validate: {
      required: (v) => (v.trim() === '' ? 'Required' : ''),
    },
  },
  {
    name: 'lastName',
    value: '',
    options: {
      label: 'Last Name',
    },
    validate: {
      required: (v) => (v.trim() === '' ? 'Required' : ''),
    },
  },
  {
    name: 'email',
    value: '',
    options: {
      label: 'Email',
    },
    validate: {
      required: (v) => (v.trim() === '' ? 'Required' : ''),
      checkEmail: (v) => (/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v) ? '' : 'Not valid email'),
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
      required: (v) => (v.trim() === '' ? 'Required' : ''),
    },
  },
  {
    name: 'role',
    value: '',
    options: {
      label: 'Role',
      type: 'select',
      options: [
        { title: '', value: '' },
        { title: 'User', value: 'user' },
        { title: 'Administrator', value: 'admin' },
        { title: 'Moderator', value: 'moderator' },
      ],
    },
    validate: {
      required: (v) => (v.trim() === '' ? 'Required' : ''),
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
      required: (v) => (v.trim() === '' ? 'Required' : ''),
    },
  },
];
