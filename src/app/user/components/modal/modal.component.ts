import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @Input() position!: string;
  @Input() dispatchType!: any;
  faClose = faClose;
  constructor(private store: Store) {
    document.body.classList.add('disable-scroll');
  }

  closeModal() {
    this.store.dispatch(this.dispatchType());
  }

  modalChild(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('disable-scroll');
  }
}
