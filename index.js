const inquirer = require("inquirer");
const fs = require("fs");


inquirer
    .prompt([
        {
            type:   'input',
            name:   'title',
            message: 'Please provide the title of your project.',
        },
        {
            type:   'input',
            name:   'Description',
            message: 'Please provide your project description.',
        },
        {
            type:   'input',
            name:   'Installation',
            message: 'Please provide your project installation instruction.',
        },
        {
            type:   'input',
            name:   'Usage',
            message: 'Please provide your project usage information',
        },
        {
            type:   'input',
            name:   'guideline',
            message: 'Please provide your project contribution guidelines',
        },
        {
            type:   'input',
            name:   'Tests',
            message: '',
        },   
    ])
    .then((response) => {
        let readMeText = `
        ## Title
        ${}
        
        
        
        
        
        `


    }




    // .then((response) => {
    //     console.log(response)
    //     fs.watchFile("newReadMe.md", readMeText(answers), function (err) {
    //         if (err) console.log(err);
    
            
        



// fs.writeFile("read.md", readmeText, function (err) {

//     if (err)
//         console.log(err);

// })
// });