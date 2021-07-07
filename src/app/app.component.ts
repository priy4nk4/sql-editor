import { Component, ViewChild } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditorComponent } from './editor/editor.component';
import 'brace';
import 'brace/mode/sql';
import "brace/theme/chrome";
import "brace/mode/yaml";
// import 'ace-builds/webpack-resolver';
import { DataService } from './data.service';
import { order } from './model/order.model';
import { query } from './model/query.model';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atlan';
  editorOptions = { theme: 'vs-dark', language: 'sql' };
  code = 'SELECT * FROM Table_1';
  tableData: order[] = [];
  isExecute: boolean = false;
  isExpandOrder: boolean = false;
  isExpandCustomer: boolean = false;
  isExpandEmployee: boolean = false;

  constructor(private modalservice: NgbModal, private data: DataService){}

  @ViewChild('editor') editor!:  AceEditorComponent;
 
  options:any = {maxLines: 1000, printMargin: false};
  text:any = '';
  sqlQuery!: string;

  onChange(code: any) {
    this.sqlQuery = code;
  } 

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
  shareRecord() {
    const modalRef = this.modalservice.open(EditorComponent);
    if(this.sqlQuery) {
      modalRef.componentInstance.isShare = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }
  runQuery(){
    let param : query = {queryString: this.sqlQuery};
    if(this.sqlQuery) {
      this.data.getData(param).subscribe(res=> {
        this.tableData = res;
        this.isExecute = true;
        const modalRef = this.modalservice.open(EditorComponent);
        modalRef.componentInstance.isExecute = true;
      })
    } else {
      const modalRef = this.modalservice.open(EditorComponent);
      modalRef.componentInstance.isEmpty = true;
    }
  
  }

  SaveQuery() {
    //save the query i.e this.sqlQuery
    const modalRef = this.modalservice.open(EditorComponent);
    if(this.sqlQuery) {
      modalRef.componentInstance.isSave = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }

  ExportTocsv() {
    const modalRef = this.modalservice.open(EditorComponent);
    if(this.sqlQuery) {
      modalRef.componentInstance.isReport = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }

  expandOrder(){
    this.isExpandOrder = !this.isExpandOrder;
  }
  expandCustomer(){
    this.isExpandCustomer = !this.isExpandCustomer;
  }
  expandEmployee(){
    this.isExpandEmployee = !this.isExpandEmployee;
  }
}

