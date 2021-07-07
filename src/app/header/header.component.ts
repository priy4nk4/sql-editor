import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalservice: NgbModal, private data: DataService) { }

  ngOnInit(): void {
  }

  shareRecord() {
    const modalRef = this.modalservice.open(ModalComponent);
    if(this.data.currentQuery) {
      modalRef.componentInstance.isShare = true;
    } else {
      modalRef.componentInstance.isEmpty = true;
    }
  }
}
