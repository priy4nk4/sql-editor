import { Component, ViewChild } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'brace';
import 'brace/mode/sql';
import "brace/theme/chrome";
import "brace/mode/yaml";
// import 'ace-builds/webpack-resolver';
import { DataService } from './data.service';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(private modalservice: NgbModal, private data: DataService){}

  @ViewChild('editor') editor!:  AceEditorComponent;
 
  options:any = {maxLines: 1000, printMargin: false};
  text:any = '';
 

  ngAfterViewInit() {
      this.editor.setTheme("eclipse");

      this.editor.getEditor().setOptions({
          enableBasicAutocompletion: true
      });

      this.editor.getEditor().commands.addCommand({
          name: "showOtherCompletions",
          bindKey: "Ctrl-.",
          exec: function (editor: any) {
            console.log(editor);
          }
      })
      this.editor.setOptions({
        enableBasicAutocompletion: true,
        
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
  }

}

