import { Component, Input, OnInit } from '@angular/core';
import { LoaderAlignment, LoaderDisplay, LoaderType } from './ng-on-wait-model';

@Component({
  selector: 'ng-on-wait',
  templateUrl: './ng-on-wait.component.html',
  styleUrls: ['./ng-on-wait.component.scss']
})
export class NgOnWaitComponent implements OnInit {
  @Input() type: LoaderType = 'default'
  @Input() size: string = '1rem'
  @Input() align: LoaderAlignment = 'center'
  @Input() display: LoaderDisplay = 'block'

  ngOnInit(): void {
    this.rectifyInputErrors();
  }

  rectifyInputErrors(){
    //if (this.size.)
  }
}
