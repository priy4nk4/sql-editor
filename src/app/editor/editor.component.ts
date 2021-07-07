import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { query } from '../model/query.model';
import { DataService } from '../data.service';
import { order } from '../model/order.model';
import { ModalComponent } from '../modal/modal.component';
import { AceEditorComponent } from 'ng2-ace-editor';
import { config } from 'ace-builds';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'brace';
import 'brace/mode/sql';
import "brace/theme/chrome";


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title = 'atlan';
  code = 'SELECT * FROM Table_1';
  tableData: order[] = [];
  isExecute: boolean = false;
  options:any = {maxLines: 1000, printMargin: false};
  text:any = '';
  @ViewChild('editor') editor!:  AceEditorComponent;
  sqlQuery!: string;

  constructor(private modalservice: NgbModal,
    private data: DataService ) {
      config.set(
        "basePath",
        "https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/"
      );
      config.set("fontSize", "14px");
      config.setModuleUrl(
         "ace/mode/javascript_worker",
         "https://cdn.jsdelivr.net/npm/ace-builds@1.4.8/src-noconflict/worker-javascript.js"
      );


     }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.editor.setText(this.code);
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
      enableLiveAutocompletion: true
  });
}

  onChange(code: any) {
    this.sqlQuery = code;

  }

  runQuery(){
    let param : query = {queryString: this.sqlQuery};
    this.data.currentQuery = this.sqlQuery;
    this.data.all_Query?.push(this.sqlQuery);
    if(this.sqlQuery) {
      this.data.getData(param).subscribe(res=> {
        this.tableData = res;
        this.isExecute = true;
        const modalRef = this.modalservice.open(ModalComponent);
        modalRef.componentInstance.isExecute = true;
      })
    } else {
      const modalRef = this.modalservice.open(ModalComponent);
      modalRef.componentInstance.isEmpty = true;
    }

  }

  SaveQuery() {
    //save the query i.e this.sqlQuery
    const modalRef = this.modalservice.open(ModalComponent);
    if(this.sqlQuery) {
      modalRef.componentInstance.isSave = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }

  ExportTocsv() {
    const modalRef = this.modalservice.open(ModalComponent);
    if(this.sqlQuery) {
      modalRef.componentInstance.isReport = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }

}
