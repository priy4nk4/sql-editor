import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input() isExecute!: boolean;
  @Input() isEmpty!: boolean;
  @Input() isSave!: boolean;
  @Input() isShare!: boolean;
  @Input() isReport!: boolean;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(){
    this.activeModal.dismiss();
  }
}
