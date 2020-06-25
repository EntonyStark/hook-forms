export const docs = [
  {
    id: '0',
    title: 'formArray',
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
    id: '1',
    title: 'formObject',
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
    id: '2',
    title: 'updateEvent',
    desc: 'Event for onChange, takes event from input and automatically set value to the field',
    code: `
<input value={value} onChange={updateEvent} />
    `,
    codeLanguage: 'html',
  },
  {
    id: '3',
    title: 'resetEvent',
    desc: 'Event for reset all field values in form manually',
    code: `
const resetForm = () => resetEvent()
    `,
  },
  {
    id: '4',
    title: 'updateDefaultValues',
    desc: 'For dynamically changing default values property, takes a defaultValues object',
    code: `
const changeDefaultValues = () => updateDefaultValues({ firstName: 'John' }) // { string: any }
    `,
  },
  {
    id: '5',
    title: 'updateFormArray',
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
    id: '6',
    title: 'submitEvent',
    desc: 'Takes a callback as a param, return formatted object to callback function',
    code: `const submit = (values) => console.log(values) //  { string: any }

<form onSubmit={submitEvent(submit)}>
...
</form/>`,
    codeLanguage: 'jsx',
  },
  {
    id: '7',
    title: 'setErrorManually',
    desc: 'Event for immediately setting error in field, takes a name and error string as a params.',
    code: `
const setError = () => setErrorManually('lastName', 'Incorrect')
   `,
  },
  {
    id: '8',
    title: 'setValueManually',
    desc: 'Event for immediately setting value in field, takes a name and value as a params.',
    code: `
const setValue = () => setValueManually('lastName', 'Anthony')
   `,
  },
  {
    id: '9',
    title: 'pristine',
    desc: 'True when the current form values are the same as the initialValues, false otherwise',
    code: null,
  },
];
