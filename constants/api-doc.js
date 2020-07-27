export const APIProperty = [
  {
    id: '0',
    title: 'initialForm',
    required: true,
    type: 'Array',
    link: {
      ref: 'props',
      nested: true,
      text: 'initialForm',
      anchor: 'initialForm',
    },
    desc: 'That is array of objects, which contain all properties for form setup',
    code: `const sayHelloForm = [
      {
        name: 'name',
        value: '',
        validate: {},
        options: {},
      },
    ];
    
const {} = easyHook({ initialForm: sayHelloForm });`,
    table: [
      {
        key: 'name',
        type: 'string',
        default: '-',
        required: 'true',
        description: 'Name of input, unique identifier of each field',
      },
      {
        key: 'value',
        type: 'any',
        default: 'undefined',
        required: 'true',
        description: 'Value for this field',
      },
      {
        key: 'error',
        type: 'string',
        default: 'empty string',
        required: 'false',
        description: 'String error, which returned from validation function',
      },
      {
        key: 'touched',
        type: 'boolean',
        default: 'false',
        required: 'false',
        description: 'The value indicates whether it has been changed before',
      },
      {
        key: 'validate',
        type: 'object of rules',
        default: 'empty object',
        required: 'false',
        description: 'Object with functions for validate, function receive two arguments, current value and object with otherValues',
      },
      {
        key: 'options',
        type: 'object',
        default: 'undefined',
        required: 'false',
        description: 'Object for rest user properties, it can be - type, placeholder, label, some options etc',
      },
    ],
  },
  {
    id: '1',
    title: 'defaultValues',
    desc: `The values with which to initialize your form, 
      keys in object should be matched with 'name' property in form item`,
    type: 'Object',
    link: {
      ref: 'props',
      nested: true,
      text: 'defaultValues',
      anchor: 'defaultValues',
    },
    code: `
    const {} = easyHook({ defaultValues: { name: 'John' } });
      `,
  },
  {
    id: '2',
    title: 'resetAfterSubmit',
    desc: 'Flag for reset form after success submit',
    type: 'Boolean',
    link: {
      ref: 'props',
      nested: false,
      last: true,
      text: 'resetAfterSubmit',
      anchor: 'resetAfterSubmit',
    },
    code: `
    const {} = easyHook({ resetAfterSubmit: true }); // default is false
      `,
  },
  // api
  {
    id: '10',
    title: 'formArray',
    type: 'Array',
    link: {
      ref: 'api',
      nested: true,
      text: 'formArray',
      anchor: 'formArray',
    },
    desc: `Array of fields what you pass to the hook,
      contain all properties which need for form,
      and all properties which you pass to the option object.`,
    code: `[
    {
      name: "firstName"
      options: {label: "First Name"}
      value: ""
    },
    ...
]`,
  },
  {
    id: '11',
    title: 'formObject',
    type: 'Object',
    link: {
      ref: 'api',
      nested: true,
      text: 'formObject',
      anchor: 'formObject',
    },
    desc: `Object with all fields what you pass to the hook,
      contain all property, can be useful for non iterable cases`,
    code: `{
    firstName: {
      name: "firstName"
      options: {label: "First Name"}
      value: ""
    },
    ...
}`,
  },
  {
    id: '12',
    title: 'updateEvent',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'updateEvent',
      anchor: 'updateEvent',
    },
    desc: 'Event for onChange, takes event from input and automatically set value to the field',
    code: `
<input value={value} onChange={updateEvent} />
    `,
    codeLanguage: 'html',
  },
  {
    id: '13',
    title: 'resetEvent',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'resetEvent',
      anchor: 'resetEvent',
    },
    desc: 'Event for reset all field values in form manually',
    code: `
const resetForm = () => resetEvent()
    `,
  },
  {
    id: '14',
    title: 'updateDefaultValues',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'updateDefaultValues',
      anchor: 'updateDefaultValues',
    },
    desc: 'For dynamically changing default values property, takes a defaultValues object',
    code: `
const changeDefaultValues = () => updateDefaultValues({ firstName: 'John' }) // { string: any }
    `,
  },
  {
    id: '15',
    title: 'updateFormArray',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'updateFormArray',
      anchor: 'updateFormArray',
    },
    desc: 'For dynamically setting form array, also you can set default values',
    code: `const sayHelloForm = [
  {
    name: 'firstName',
    value: '',
    options: {
      type: 'text',
      placeholder: 'FirstName',
    },
  },
  {
    name: 'lastName',
    value: '',
    options: {
      type: 'text',
      placeholder: 'LastName',
    },
  },
];

const changeDefaultValues = () => updateDefaultValues(sayHelloForm, { firstName: 'John' })`,
  },
  {
    id: '16',
    title: 'submitEvent',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'submitEvent',
      anchor: 'submitEvent',
    },
    desc: 'Takes a callback as a param, return formatted object to callback function',
    code: `const submit = (values) => console.log(values) //  { string: any }

<form onSubmit={submitEvent(submit)}>
...
</form/>`,
    codeLanguage: 'jsx',
  },
  {
    id: '17',
    title: 'setErrorManually',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'setErrorManually',
      anchor: 'setErrorManually',
    },
    desc: 'Event for immediately setting error in field, takes a name and error string as a params.',
    code: `
const setError = () => setErrorManually('lastName', 'Incorrect')
   `,
  },
  {
    id: '18',
    title: 'setValueManually',
    type: 'Function',
    link: {
      ref: 'api',
      nested: true,
      text: 'setValueManually',
      anchor: 'setValueManually',
    },
    desc: 'Event for immediately setting value in field, takes a name and value as a params.',
    code: `
const setValue = () => setValueManually('lastName', 'Anthony')
   `,
  },
  {
    id: '19',
    title: 'pristine',
    type: 'Boolean',
    link: {
      ref: 'api',
      nested: true,
      text: 'pristine',
      anchor: 'pristine',
    },
    desc: 'True when the current form values are the same as the initialValues, false otherwise',
    code: null,
  },
  {
    id: '20',
    title: 'valid',
    type: 'Boolean',
    link: {
      ref: 'api',
      nested: false,
      last: true,
      text: 'valid',
      anchor: 'valid',
    },
    desc: 'True when the form is valid (has no validation errors), false otherwise.',
    code: null,
  },
];
