import {Component, Input } from '@angular/core';
import {Hero} from "../../model/rpg/hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input()
  hero!: Hero;

}
