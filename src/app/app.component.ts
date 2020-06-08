import { Component } from '@angular/core';
import { ToastService } from './share/toast/toast.service';
import { ToastrService } from 'ngx-toastr';
import { pageAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageAnimation]
})
export class AppComponent {
  title = 'bla-bla-auto';

  constructor(
    private toastr: ToastrService,
  ) {
    ToastService.initialize(toastr);
  }
}
