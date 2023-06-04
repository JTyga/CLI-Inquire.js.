const fs = require('fs');
const inquirer = require('inquirer');
const { exec } = require('child_process');


function getOperatingSystem() {
  return process.platform;
}


function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Fehler beim Ausführen des Befehls: ${error}`);
    } else {
      console.log(`Ausgabe: ${stdout}`);
    }
  });
}


inquirer
  .prompt([
    {
      type: 'input',
      name: 'command',
      message: 'Geben Sie den Befehl ein, den Sie ausführen möchten:',
    },
  ])
  .then((answers) => {
    const command = answers.command;

    
    const operatingSystem = getOperatingSystem();
    console.log(`Sie befinden sich auf dem Betriebssystem: ${operatingSystem}`);

    
    executeCommand(command);
  });
