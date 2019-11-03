'use strict';
// @yasinkuyu

Object.defineProperty(exports, "__esModule", { value: true });

const vscode = require("vscode");
const utils = require("./utils");

function activate(context) {

    var current_position = [];
  
    var disposableOpenUrl = vscode.commands.registerCommand('extension.convert', (val) => {
        
        var editor = vscode.window.activeTextEditor;
       
        editor.edit(editBuilder => {
            editBuilder.replace(current_position, val);
        });
 
        vscode.window.showInformationMessage('Converted: ' + val);
    });
    
    var hover = vscode.languages.registerHoverProvider({ scheme: '*', language: '*' }, {
        provideHover(document, position, token) {
			
			var input = document.getText(document.getWordRangeAtPosition(position));
            var range = document.getWordRangeAtPosition(position);

            current_position = range;
            
            // https://github.com/yasinkuyu/brackets-units
            var UNITS_REGEX = /(\d*\.?\d+)\s?(px|em|rem|ex|%|in|cm|mm|pt|pc+)/igm;

            var units = new RegExp(UNITS_REGEX);
            
            var match = units.exec(input);
         
			if (match) {

                var value = match[1];
                var unit = match[2];

                let message = 'VSCode Units Convert: ' +
                    ' **' + input + '** -> ' +
                    ' ' + '\n' +
                    '';
 
                    const item = new vscode.MarkdownString(message);
                    item.isTrusted = true;

                    var list = ['px','rem','%','in','cm','mm','pt','pc'];

                    list.forEach(key => {

                        var val = utils.convert(value, unit, key);
                        item.appendMarkdown(' ['+ val + '](command:extension.convert?'+ encodeURI(JSON.stringify(val)) +')   \n');
                        
                    });

                    item.appendMarkdown('\n\n @yasinkuyu ');

                    return new vscode.Hover(item);
                }

                context.subscriptions.push(disposableOpenUrl);
            
        }
    });

    context.subscriptions.push(hover);
}

exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map