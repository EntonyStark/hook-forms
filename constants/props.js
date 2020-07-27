export const propsProperty = [
  {
    id: '0',
    title: 'initialForm',
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
    title: 'resetAfterSubmit',
    desc: 'Flag for reset form after success submit',
    code: `
    const {} = easyHook({ resetAfterSubmit: true }); // default is false
      `,
  },
  {
    id: '2',
    title: 'defaultValues',
    desc: `The values with which to initialize your form, 
      keys in object should be matched with 'name' property in form item`,
    code: `
    const {} = easyHook({ defaultValues: { name: 'John' } });
      `,
  },
];
