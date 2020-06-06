export const form = [
  {
    name: 'firstName',
    value: '',
    options: {
      label: 'First Name',
    },
  },
  {
    name: 'lastName',
    value: '',
    options: {
      label: 'Last Name',
    },
  },
  {
    name: 'email',
    value: '',
    options: {
      label: 'Email',
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
      type: 'text-area',
    },
  },
];
