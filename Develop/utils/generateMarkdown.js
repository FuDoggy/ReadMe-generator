// function to generate markdown for README
function generateMarkdown(data) {
  return`# Title of Application
  ${data.title}


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
  ${data.questions}
`;
}

module.exports = generateMarkdown;
