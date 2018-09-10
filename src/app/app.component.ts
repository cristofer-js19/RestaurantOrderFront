import { Component, Input } from '@angular/core'
import { FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms'
import { RestaurantOrderService } from './restaurant.order.service'
import { RestaurantOrderModel } from './model/restaurant.order.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantOrderService]
})
export class AppComponent {
  public input: string
  public output: string
  private outputTableItems: Array<any>[];
  private newOutputTableItem: any = {}

  ngOnInit() {
    this.outputTableItems = new Array();
  }

  private maintainTableOutputs(input: string, output: string) {
    this.newOutputTableItem = new RestaurantOrderModel(this.input, this.output)
    this.addOutput()
  }

  private addOutput() {
    this.outputTableItems.push(this.newOutputTableItem)
    this.newOutputTableItem = {}
  }

  constructor(private service: RestaurantOrderService) {}

  public form: FormGroup = new FormGroup({
    'input': new FormControl(null, [Validators.required])
  })

  public sendInput(): void {
    this.input = this.form.value.input
    this.service.getOutput(this.input)
      .subscribe(
        (output: string) => {
          this.output = output
          this.maintainTableOutputs(this.input, output)
        },
        (error: any) => {
          this.output = "Server unavailable or another technical error (Error status: " + error.status + ")"
          this.maintainTableOutputs(this.input, this.output)
        }
      )
  }
}