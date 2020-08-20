// function to generate markdown for README
function generateMarkdown(data) {
  return`# ${data.title}




  ## Description of Application
  ${data.description}




  ## Table of Contents
  ${data.tableofcontents}




  ## Installation Instructions
  ${data.installation}
 
 


  ## Usage Instructions
  ${data.usage}




  ## Licenses Used
  ${data.license}




  ## Contributors
  ${data.contributing}




  ## Test Instructions
  ${data.tests}




  ## Additional User Questions
  https://github.com/${data.questions1}
  
  ${data.questions2}

  
`;
}

module.exports = generateMarkdown;
