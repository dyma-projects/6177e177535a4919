import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  interpolationOfVariable: string;
  liaisonOfProperty: string;
  liaisonEvenement: string;

  constructor() {
    this.interpolationOfVariable = `J'ai réussi l'interpolation de variable ici `;
    this.liaisonOfProperty = `J'ai réussi la liaison de propriété ici`;
    this.liaisonEvenement = `Liaison d'événement`;
  }

  ngOnInit(): void {}
}
