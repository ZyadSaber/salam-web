// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [ {
            type: 'list',
            name: 'mode',
            message: 'what do you want to create',
            choices: [
                {
                name: "pages",
                Value: "pages"
                },
                {
                name: "common",
                Value: "Common component"
                },
                {
                name: "components",
                Value: "Normal component"
                }
        ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter Name for your new package'
        },
        {
            type: 'input',
            name: 'component_name',
            message: 'Enter component name for your new package'
        },
       
     ],
        actions: [{
            type: 'add',
            path: '{{mode}}/{{name}}/src/style.css',
            templateFile: 'Templates/style.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/src/component.tsx',
            templateFile: 'Templates/component.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/src/interface.ts',
            templateFile: 'Templates/interface.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/src/constant.ts',
            templateFile: 'Templates/constant.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/src/index.ts',
            templateFile: 'Templates/index.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/README.MD',
            templateFile: 'Templates/README.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/package.json',
            templateFile: 'Templates/package.hbs'
        },{
            type: 'add',
            path: '{{mode}}/{{name}}/tsconfig.json',
            templateFile: 'Templates/tsconfig.hbs'
        },
    ]
    });
};