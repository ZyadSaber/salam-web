// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [ {
            type: 'list',
            name: 'mode',
            message: 'what do you want to create',
            choices: [{
                name: "Pages",
                Value: "Pages"
            }]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Name for your Update'
        },
       
     ],
        actions: [{
            type: 'add',
            path: 'src/{{mode}}/{{name}}/style.css',
            templateFile: 'Templates/style.hbs'
        },{
            type: 'add',
            path: 'src/Pages/{{name}}/component.tsx',
            templateFile: 'Templates/component.hbs'
        },{
            type: 'add',
            path: 'src/Pages/{{name}}/interface.ts',
            templateFile: 'Templates/interface.hbs'
        },{
            type: 'add',
            path: 'src/Pages/{{name}}/constant.ts',
            templateFile: 'Templates/constant.hbs'
        }
    ]
    });
};