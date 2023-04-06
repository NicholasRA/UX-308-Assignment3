// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
    const surveyJson = {
        title: "Equipment Safety",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Equipment Safety. <br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "authorizedToOperate",
                title: "You are only authorized to operate equipment...",
                choices: [
                    "If you are very certain you will be careful",
                    "Are an authorized and trained employee",
                    "You are the only one who knows how",
                    "None of these answer are correct"
                ],
                correctAnswer: "Are an authorized and trained employee"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "warningsOnEquipment",
                title: "Upon seeing warning signs on equipment it is important to...",
                choices: [
                    "Look over them and make sure you understand them",
                    "Heed them",
                    "Ask your supervisor if you are unclear as to what they are saying",
                    "All of the above"
                ],
                correctAnswer: "All of the above"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "workplaceHazards",
                title: "Workplace hazards involving equipment includes...",
                choices: [
                    "Loss of extremities",
                    "Exposure to electricity",
                    "Loud noise",
                    "All of the above"
                ],
                correctAnswer: "All of the above"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "machineGuards",
                title: "Machine guards are...",
                choicesOrder: "random",
                choices: [
                    "Officials hired to guard equipment",
                    "Plates and covers placed over dangerous pieces of equipment",
                    "Unnecessary",
                    "Can be tampered with by employees"
                ],
                correctAnswer: "Plates and covers placed over dangerous pieces of equipment"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "operatingDirections",
                title: "Equipment Operating directions are...",
                choices: [
                    "For rookies",
                    "Guidelines, not rules",
                    "Very distinct instructions to never be deviated from",
                    "None of the above"
                ],
                correctAnswer: "Very distinct instructions to never be deviated from"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "jammedTool",
                title: "If a tool isn’t working or is jammed you should...",
                choices: [
                    "Answer B and D are both correct",
                    "Try to fix the jam",
                    "Turn off/unplug the equipment",
                    "Stand back 10 ft or more",
                    "Tell a superior"
                ],
                correctAnswer: "Tell a superior"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "emergencyButton",
                title: "The emergency stop button is for...",
                choicesOrder: "random",
                choices: [
                    "Everyday breaking and starting of equipment",
                    "Only for higher-ups",
                    "For my use if someone is caught up in equipment or machinery",
                    "Only for the emergency service"
                ],
                correctAnswer: "For my use if someone is caught up in equipment or machinery"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "missingMachineGuard",
                title: "When a machine-guard is gone I should...",
                choices: [
                    "Not use the equipment",
                    "Put a cover over the equipment",
                    "Inform a superior",
                    "A & C are correct"
                ],
                correctAnswer: "A & C are correct"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "equipmentInterlocks",
                title: "Equipment Interlocks are to be utilized",
                choicesOrder: "random",
                choices: [
                    "When preventing the equipment from being used in an unsafe environment",
                    "While connecting two pieces of equipment",
                    "While assisting new employees in using machinery",
                    "For the monitoring of equipment"
                ],
                correctAnswer: "When preventing the equipment from being used in an unsafe environment"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "damagedOrDetachedTool",
                title: "When you come across a damaged or detached tool you should...",
                choicesOrder: "random",
                choices: [
                    "Inform a superior",
                    "Be careful with it",
                    "Attempt fixing it",
                    "B & C are correct"
                ],
                correctAnswer: "Inform a superior"
            }]
        }],
        completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
        completedHtmlOnCondition: [{
            expression: "{correctAnswers} == 0",
            html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
        }, {
            expression: "{correctAnswers} == {questionCount}",
            html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }]
      };
    
    const survey = new Model(surveyJson);

    return <Survey model={survey} />;
}

