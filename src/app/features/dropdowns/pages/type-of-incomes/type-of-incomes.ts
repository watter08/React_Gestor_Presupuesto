import { Component } from '@angular/core';
import { CardComponent } from "src/app/theme/shared/components/card/card.component";
import { InputTextComponent } from "src/app/shared/components/input-text/input-text-component";

@Component({
  selector: 'app-type-of-incomes',
  imports: [CardComponent, InputTextComponent],
  templateUrl: './type-of-incomes.html',
  styleUrl: './type-of-incomes.scss'
})
export class TypeOfIncomes {

}
